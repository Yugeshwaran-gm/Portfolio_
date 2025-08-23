import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { insertContactSchema } from "@shared/schema";
import { storage } from "./storage";
import nodemailer from "nodemailer"

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);

      // Log environment variables for debugging (do not log actual password)
      console.log("GMAIL_USER:", process.env.GMAIL_USER ? "[set]" : "[not set]");
      console.log("GMAIL_PASS:", process.env.GMAIL_PASS ? "[set]" : "[not set]");

      // Send email notification
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASS,
        },
        tls: {
          rejectUnauthorized: false, // <-- Add this line
        },
      });

      // Verify transporter connection
      transporter.verify((error, success) => {
        if (error) {
          console.error("Nodemailer transporter verification failed:", error);
        } else {
          console.log("Nodemailer transporter is ready to send emails.");
        }
      });

      const mailOptions = {
        from: process.env.GMAIL_USER,
        to: process.env.GMAIL_USER, // or any recipient you want
        subject: `New Contact Form Submission: ${contact.subject}`,
        text: `
          Name: ${contact.name}
          Email: ${contact.email}
          Subject: ${contact.subject}
          Message: ${contact.message}
        `,
      };

      console.log("Attempting to send email...");
      await transporter.sendMail(mailOptions)
        .then(info => {
          console.log("Email sent successfully:", info.response);
        })
        .catch(error => {
          console.error("Error sending email:", error);
          throw error;
        });

      res.json({
        success: true,
        message: "Thank you for your message! I will get back to you soon.",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: "Validation failed",
          errors: error.errors,
        });
      }

      console.error("Contact form error:", error);
      res.status(500).json({
        success: false,
        message: "Sorry, there was an error sending your message. Please try again.",
      });
    }
  });

  // Resume download endpoint with analytics
  app.get("/api/resume/download", async (req, res) => {
    try {
      // Log download for analytics
      console.log("Resume downloaded at:", new Date().toISOString());

      // Redirect to Google Drive direct download link
      const resumeUrl =
        process.env.RESUME_URL ||
        "https://drive.google.com/uc?export=download&id=14MMyLSsm9-5UzMl36nbeBgVepvuo9-Nt";
      res.redirect(resumeUrl);
    } catch (error) {
      console.error("Resume download error:", error);
      res.status(500).json({
        success: false,
        message: "Sorry, there was an error downloading the resume. Please try again.",
      });
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  const httpServer = createServer(app);
  return httpServer;
}
