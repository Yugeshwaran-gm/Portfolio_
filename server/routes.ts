import type { Express } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { insertContactSchema } from "@shared/schema";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      
      // In a real application, you would send an email here
      console.log("Contact form submission:", contact);
      
      res.json({ 
        success: true, 
        message: "Thank you for your message! I will get back to you soon." 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "Validation failed", 
          errors: error.errors 
        });
      }
      
      console.error("Contact form error:", error);
      res.status(500).json({ 
        success: false, 
        message: "Sorry, there was an error sending your message. Please try again." 
      });
    }
  });

  // Resume download endpoint with analytics
  app.get("/api/resume/download", async (req, res) => {
    try {
      // Log download for analytics
      console.log("Resume downloaded at:", new Date().toISOString());
      
      // Redirect to Google Drive direct download link
      const resumeUrl = process.env.RESUME_URL || "https://drive.google.com/uc?export=download&id=14MMyLSsm9-5UzMl36nbeBgVepvuo9-Nt";
      res.redirect(resumeUrl);
    } catch (error) {
      console.error("Resume download error:", error);
      res.status(500).json({ 
        success: false, 
        message: "Sorry, there was an error downloading the resume. Please try again." 
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
