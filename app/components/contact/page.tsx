"use client";

import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import { Textarea } from "@/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/ui/card";
import {
  EMAIL_JS_SERVICE_ID,
  EMAIL_JS_TEMPLATE_ID,
  EMAIL_JS_PUBLIC_KEY,
} from "@/lib/emailKeyConfig";
import styles from "../../styles/ContactForm.module.css";
; // Import the custom CSS module

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    const data = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      // Send email using EmailJS
      const response = await emailjs.send(
        EMAIL_JS_SERVICE_ID,
        EMAIL_JS_TEMPLATE_ID,
        data,
        EMAIL_JS_PUBLIC_KEY
      );

      if (response.status === 200) {
        toast({
          title: "Message sent!",
          description: "We'll get back to you as soon as possible.",
        });
      } else {
        throw new Error("Failed to send message");
      }

      // Reset form after submission
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Failed to send message",
        description: "Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={styles.contactFormContainer}>
      <Card className={styles.card}>
        <CardHeader>
          <CardTitle className={styles.cardTitle}>Contact Us</CardTitle>
        </CardHeader>
        <form ref={formRef} onSubmit={onSubmit}>
          <CardContent className={styles.cardContent}>
            <div className={styles.inputGroup}>
              <div>
                <label htmlFor="firstName" className={styles.inputLabel}>
                  First Name
                </label>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  className={styles.inputField}
                />
              </div>
              <div>
                <label htmlFor="lastName" className={styles.inputLabel}>
                  Last Name
                </label>
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  className={styles.inputField}
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className={styles.inputLabel}>
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john.doe@example.com"
                className={styles.inputField}
              />
            </div>
            <div>
              <label htmlFor="message" className={styles.inputLabel}>
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message here..."
                className={styles.textareaField}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              className={styles.submitButton}
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
