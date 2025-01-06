"use client";

import axios from "axios";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await axios.post("/api/contact", formData);

      // Axios automatically parses JSON responses
      setStatus(response.data.message || "Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      // Axios handles non-2xx responses
      if (error.response) {
        setStatus(
          error.response.data.error ||
            "Failed to send message. Please try again."
        );
      } else {
        setStatus("An error occurred. Please try again.");
      }
    }
  };

  return (
    <section className="bg-gradient-to-b from-cream to-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-jetBlack mb-8">
          Send me a Message!
        </h2>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-deepTeal"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-deepTeal"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-gray-700 font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-deepTeal"
              placeholder="Your Message"
            ></textarea>
          </div>
          <Button type="submit" className="text-white bg-carafe">
            Send Message
          </Button>
        </form>
        {status && <p className="mt-4 text-center text-gray-700">{status}</p>}
      </div>
    </section>
  );
}
