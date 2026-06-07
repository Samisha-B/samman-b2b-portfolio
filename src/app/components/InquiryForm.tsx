"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function InquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      category: (form.elements.namedItem("category") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Unknown error");
      setStatus("success");
      form.reset();
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <form className="inquiry-form" onSubmit={handleSubmit} noValidate>
      <div className="form-row">
        <label>
          <span>Name</span>
          <input type="text" name="name" placeholder="Your name" required />
        </label>
        <label>
          <span>Company</span>
          <input type="text" name="company" placeholder="Company name" />
        </label>
      </div>

      <div className="form-row">
        <label>
          <span>Email</span>
          <input type="email" name="email" placeholder="you@company.com" required />
        </label>
        <label>
          <span>Phone</span>
          <input type="tel" name="phone" placeholder="+91" />
        </label>
      </div>

      <div className="form-row single">
        <label>
          <span>Required category</span>
          <select name="category" defaultValue="">
            <option value="" disabled>Select produce category</option>
            <option>Fresh vegetables</option>
            <option>Fruit programs</option>
            <option>Bulk sourcing</option>
            <option>Mixed requirement</option>
          </select>
        </label>
      </div>

      <div className="form-row single">
        <label>
          <span>Requirement details</span>
          <textarea
            name="message"
            rows={5}
            placeholder="Share quantities, destination, frequency, and preferred packaging."
            required
          />
        </label>
      </div>

      {status === "success" && (
        <p style={{ color: "var(--color-primary)", fontWeight: 600 }}>
          ✓ Inquiry sent! We will get back to you within 24 hours.
        </p>
      )}

      {status === "error" && (
        <p style={{ color: "#c0392b" }}>✗ {errorMsg}</p>
      )}

      <button
        className="btn btn-primary full"
        type="submit"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sending…" : "Send inquiry"}
      </button>
    </form>
  );
}