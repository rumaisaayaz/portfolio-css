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
    <div className="min-h-screen bg-green-600 flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-green-700 text-white shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center text-black">
            Contact Us
          </CardTitle>
        </CardHeader>
        <form ref={formRef} onSubmit={onSubmit}>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium mb-1"
                >
                  First Name
                </label>
                <Input
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  className="bg-green-600 border-2 border-white text-white placeholder-green-100 font-medium focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium mb-1"
                >
                  Last Name
                </label>
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  className="bg-green-600 border-2 border-white text-white placeholder-green-100 font-medium focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john.doe@example.com"
                className="bg-green-600 border-2 border-white text-white placeholder-green-100 font-medium focus:ring-2 focus:ring-black focus:border-transparent"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="Your message here..."
                className="bg-green-600 border-2 border-white text-white placeholder-green-100 font-medium min-h-[120px] focus:ring-2 focus:ring-black focus:border-transparent"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              className="w-full bg-black hover:bg-gray-800 text-white font-bold py-2 text-lg"
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
