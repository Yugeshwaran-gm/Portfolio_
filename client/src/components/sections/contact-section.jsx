import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation } from '@tanstack/react-query';
import { useIntersectionObserver } from '../../hooks/use-intersection-observer';
import { useToast } from '../../hooks/use-toast';
import { apiRequest } from '../../lib/queryClient';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export function ContactSection() {
  const [leftRef, leftVisible] = useIntersectionObserver();
  const [rightRef, rightVisible] = useIntersectionObserver();
  const { toast } = useToast();

  const form = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const contactMutation = useMutation({
    mutationFn: (data) => apiRequest('POST', '/api/contact', data),
    onSuccess: async (response) => {
      const result = await response.json();
      toast({
        title: 'Message Sent!',
        description: result.message,
      });
      form.reset();
    },
    onError: async (error) => {
      let errorMessage = 'Sorry, there was an error sending your message. Please try again.';
      try {
        const errorData = await error.response?.json();
        if (errorData?.message) {
          errorMessage = errorData.message;
        }
      } catch (e) {
        // Use default error message
      }
      
      toast({
        title: 'Error',
        description: errorMessage,
        variant: 'destructive',
      });
    },
  });

  const onSubmit = (data) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      label: 'Email',
      value: 'yugeshwarangm@gmail.com',
      icon: 'fas fa-envelope',
      link: 'mailto:yugeshwarangm@gmail.com',
    },
    {
      label: 'Phone',
      value: '+91 9514955425',
      icon: 'fas fa-phone',
      link: 'tel:+919514955425',
    },
    {
      label: 'GitHub',
      value: 'Yugeshwaran-gm',
      icon: 'fab fa-github',
      link: 'https://github.com/Yugeshwaran-gm',
    },
    {
      label: 'LinkedIn',
      value: 'YUGESHWARAN G',
      icon: 'fab fa-linkedin',
      link: 'https://www.linkedin.com/in/yugeshwaran-g/',
    },
    {
      label: 'LeetCode',
      value: 'YUGESHWARAN-G',
      icon: 'fas fa-code',
      link: 'https://leetcode.com/u/YUGESHWARAN-G/',
    },
  ];

  const socialLinks = [
    { platform: 'GitHub', icon: 'fab fa-github', link: 'https://github.com/Yugeshwaran-gm' },
    { platform: 'LinkedIn', icon: 'fab fa-linkedin', link: 'https://www.linkedin.com/in/yugeshwaran-g/' },
    { platform: 'LeetCode', icon: 'fas fa-code', link: 'https://leetcode.com/u/YUGESHWARAN-G/' },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold gradient-text mb-4">Get In Touch</h2>
          <div className="w-24 h-1 animated-border mx-auto rounded"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-6">Let's discuss how we can work together</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div ref={leftRef} className={`slide-in-left ${leftVisible ? 'is-visible' : ''}`}>
            <h3 className="text-2xl font-semibold mb-8 text-gray-900 dark:text-white">Contact Information</h3>
            
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center" data-testid={`contact-info-${info.label.toLowerCase()}`}>
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mr-4">
                    <i className={`${info.icon} text-primary-600 dark:text-primary-400`}></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{info.label}</h4>
                    <a 
                      href={info.link} 
                      className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media Links */}
            <div className="mt-8">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.platform}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-primary-600 hover:text-white dark:hover:bg-primary-600 transition-all duration-300"
                    data-testid={`social-link-${social.platform.toLowerCase()}`}
                  >
                    <i className={social.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div ref={rightRef} className={`slide-in-right ${rightVisible ? 'is-visible' : ''}`}>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="contact-form">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 dark:text-gray-300">Full Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter your full name" 
                          {...field} 
                          className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 focus:ring-primary-500 focus:border-primary-500"
                          data-testid="contact-name-input"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 dark:text-gray-300">Email Address</FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder="Enter your email address" 
                          {...field} 
                          className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 focus:ring-primary-500 focus:border-primary-500"
                          data-testid="contact-email-input"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 dark:text-gray-300">Subject</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Enter the subject" 
                          {...field} 
                          className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 focus:ring-primary-500 focus:border-primary-500"
                          data-testid="contact-subject-input"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 dark:text-gray-300">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Enter your message" 
                          rows={5}
                          {...field} 
                          className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 focus:ring-primary-500 focus:border-primary-500 resize-none"
                          data-testid="contact-message-textarea"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 transform hover:scale-105 transition-all duration-300"
                  data-testid="contact-submit-button"
                >
                  {contactMutation.isPending ? (
                    <>
                      <i className="fas fa-spinner fa-spin mr-2"></i>
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane mr-2"></i>
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
