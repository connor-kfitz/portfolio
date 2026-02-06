"use client";

import Link from "next/link";
import Image from "next/image";
import ConfirmationModal from "../shared/ConfirmationModal";
import ErrorModal from "../shared/ErrorModal";

import { useState } from "react";
import { Send, Mail, MapPin } from "lucide-react";
import { githubUrl, linkedinUrl } from "@/app/lib/constants";

export default function ContactSection() {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [errorState, setErrorState] = useState<ModalErrorState>({ open: false, title: "", message: "" });


  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: "connorkfitzsimmons@gmail.com",
          subject: "Portfolio Contact Form Message from " + formData.name,
          html: `<p>Name: ${formData.name}</p><p>Email: ${formData.email}</p><p>Message: ${formData.message}</p>`,
        })
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || 'Failed to send');
      }

      setFormData({ name: "", email: "", message: "" });
      setShowConfirm(true);
    } catch (err) {
      console.error("Email error", err);
      setErrorState({
        open: true,
        title: "Error Sending Message",
        message: "Something went wrong sending the message. Please try again later."
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <>
      <section id="contact" className="bg-background">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="section-title text-foreground">Let&apos;s Work Together</h2>
            <p className="section-subtitle">
              For inquiries or collaborations, feel free to send a message.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  maxLength={100}
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Your Full Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  maxLength={254}
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="name@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  maxLength={2000}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your request"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="cursor-pointer w-full px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium hover:opacity-90 transition-all hover:shadow-lg hover:shadow-primary/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4"/>
                  </>
                )}
              </button>
            </form>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Get in Touch</h3>
                <p className="text-muted-foreground mb-6">
                  Feel free to reach out for collaborations, opportunities, or just to chat. 
                  I will get back to your as soon as possible.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="min-w-12 min-h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary"/>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <Link href="mailto:connorkfitzsimmons@gmail.com" className="break-all text-foreground font-medium hover:text-primary transition-colors">
                      connorkfitzsimmons@gmail.com
                    </Link>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="min-w-12 min-h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary"/>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground font-medium">Ajax, ON</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium text-foreground mb-4">Follow Me</h4>
                <div className="flex items-center gap-3">
                  <Link
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
                  >
                    <Image src="/images/home/github.svg" alt="GitHub" width={20} height={20}/>
                  </Link>
                  <Link
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
                  >
                    <Image src="/images/home/linkedin.svg" alt="LinkedIn" width={20} height={20}/>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modals */}
      <ConfirmationModal
        open={showConfirm}
        title="Message Sent"
        description="Thanks — Your message has been sent successfully. I will get back to you shortly!"
        onClose={() => setShowConfirm(false)}
      />
      <ErrorModal
        open={errorState.open}
        title={errorState.title || "Error Sending Message"}
        description={errorState.message}
        onClose={() => setErrorState({ open: false, title: "", message: "" })}
      />
    </>
  );
}
