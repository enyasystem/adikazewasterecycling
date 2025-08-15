
"use client"
import React from "react"

import { useFormState, useFormStatus } from "react-dom"
import { submitContactForm, type ContactFormState } from "@/app/contact/actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useEffect } from "react"
import { toast } from "sonner" // Using sonner for toasts

// Initial state must match the shape useFormState expects for the empty case
const initialState: { success: boolean; message: string; fields?: undefined; issues?: undefined } = {
  message: "",
  success: false,
}

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" disabled={pending} className="w-full bg-teal-600 hover:bg-teal-700 text-white">
      {pending ? "Sending..." : "Send Message"}
    </Button>
  )
}

export function ContactForm() {
  const [popup, setPopup] = React.useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      let result;
      try {
        result = await res.json();
      } catch (jsonErr) {
        setPopup('Error parsing response: ' + jsonErr);
        return;
      }
      if (res.ok && result.success) {
        setPopup(result.message);
        form.reset();
      } else {
        setPopup('Submission failed: ' + (result?.error || res.statusText));
      }
    } catch (err) {
      setPopup('Error submitting form: ' + err);
    }
  };

  return (
    <>
      {popup && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded shadow-lg z-50">
          {popup}
          <button className="ml-4 underline" onClick={() => setPopup("")}>Close</button>
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name">Full Name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="e.g. John Doe"
          required
          className="w-full border rounded px-3 py-2"
        />
  {/* No error rendering needed, handled by alert in handleSubmit */}
      </div>
      <div>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          required
          className="w-full border rounded px-3 py-2"
        />
  {/* No error rendering needed, handled by alert in handleSubmit */}
      </div>
      <div>
        <label htmlFor="phone">Phone Number (Optional)</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Your contact number"
          className="w-full border rounded px-3 py-2"
        />
      </div>
      <div>
        <label htmlFor="service">Service of Interest (Optional)</label>
        <select
          id="service"
          name="service"
          className="w-full border rounded px-3 py-2"
        >
          <option value="">Select a service</option>
          <option value="e-waste-collection">E-Waste Collection</option>
          <option value="data-destruction">Secure Data Destruction</option>
          <option value="recycling-process">Recycling Process Inquiry</option>
          <option value="business-services">Business Services</option>
          <option value="general-inquiry">General Inquiry</option>
        </select>
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Your message or inquiry..."
          rows={5}
          required
          className="w-full border rounded px-3 py-2"
        />
  {/* No error rendering needed, handled by alert in handleSubmit */}
      </div>
      <SubmitButton />
    </form>
    </>
  )
}
