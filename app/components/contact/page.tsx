"use client";

import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/ui/button";
import { Input } from "@/ui/input";
import { Textarea } from "@/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/ui/card";
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
          <CardTitle className="text-2xl font-bold text-center text-black">Contact Us</CardTitle>
        </CardHeader>
        <form ref={formRef} onSubmit={onSubmit}>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                  First Name
                </label>
                <Input
                  id="firstName"
                  name="firstName"  // Added name attribute
                  placeholder="First Name"
                  className="bg-green-600 border-2 border-white text-white placeholder-green-100 font-medium focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                  Last Name
                </label>
                <Input
                  id="lastName"
                  name="lastName"  // Added name attribute
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
                name="email"  // Added name attribute
                type="email"
                placeholder="john.doe@example.com"
                className="bg-green-600 border-2 border-white text-white placeholder-green-100 font-medium focus:ring-2 focus:ring-black focus:border-transparent"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <Textarea
                id="message"
                name="message"  // Added name attribute
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



//   return (
//     <div className="max-w-md mx-auto m-4 p-6  bg-gradient-to-br from-[#000000] to-[#08771a] rounded-lg shadow-lg">
//       <h2 className="text-3xl font-bold text-white mb-6">Contact Us</h2>
//       <form ref={formRef} onSubmit={onSubmit} className="space-y-4">
//         <div className="grid grid-cols-2 gap-4">
//           <Input
//             name="firstName"
//             placeholder="First Name"
//             required
//             className="bg-white/10 text-white placeholder-white/70 border-white/20"
//           />
//           <Input
//             name="lastName"
//             placeholder="Last Name"
//             required
//             className="bg-white/10 text-white placeholder-white/60 border-white/20"
//           />
//         </div>
//         <Input
//           name="email"
//           type="email"
//           placeholder="Email"
//           required
//           className="bg-white/10 text-white placeholder-white/60 border-white/20"
//         />
//         <Textarea
//           name="message"
//           placeholder="Your Message"
//           required
//           className="bg-white/10 text-white placeholder-white/60 border-white/20 min-h-[100px]"
//         />
//         <Button
//           type="submit"
//           className="w-full bg-lime-500 hover:bg-yellow-500 text-black font-bold"
//           disabled={isLoading}
//         >
//           {isLoading ? "Sending..." : "Send Message"}
//         </Button>
//       </form>
//     </div>
//   );
// }