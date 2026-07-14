"use client";

import { useState } from "react";
import { MapPin, Phone } from "lucide-react";

interface ContactSectionProps {
  data: PageSection["content"];
}

export default function ContactSection({ data }: ContactSectionProps) {
  const form = data.form as FormData_ | undefined;
  const locations = (data.locations as ContactLocation[]) || [];

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const values: Record<string, string> = {};
    formData.forEach((value, key) => {
      values[key] = String(value);
    });

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formName: form?.name || "Contact Form", formValues: values }),
      });
      const json = await res.json();
      if (json.success) {
        setSubmitted(true);
      } else {
        setError(json.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid gap-12 grid-cols-1 lg:grid-cols-2">
          {/* Form */}
          <div className="rounded bg-white p-8 shadow-(--shadow-card)">
            {data.title && <h2 className="text-xl font-bold text-heading mb-6">{data.title}</h2>}

            {submitted ? (
              <div className="rounded-lg bg-green-50 border border-green-100 p-6 text-green-800 text-sm">
                Thanks for reaching out — our team will get back to you within one business day.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {(form?.fields || []).map((field) => (
                  <div key={field.id}>
                    <label htmlFor={field.name} className="block text-sm font-medium text-slate-700 mb-1.5">
                      {field.label}
                      {field.isRequired && <span className="text-red-500"> *</span>}
                    </label>
                    {field.fieldType === "TEXTAREA" ? (
                      <textarea
                        id={field.name}
                        name={field.name}
                        required={field.isRequired}
                        placeholder={field.placeholder || ""}
                        rows={4}
                        className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-heading focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    ) : (
                      <input
                        id={field.name}
                        name={field.name}
                        type={field.fieldType === "EMAIL" ? "email" : field.fieldType === "NUMBER" ? "number" : "text"}
                        required={field.isRequired}
                        placeholder={field.placeholder || ""}
                        className="w-full rounded-lg border border-slate-200 px-4 py-2.5 text-sm text-heading focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    )}
                  </div>
                ))}

                {error && <p className="text-sm text-red-600">{error}</p>}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full rounded-lg bg-[color:var(--primary)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[color:var(--primary-dark)] disabled:opacity-60"
                >
                  {submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>

          {/* Locations */}
          <div className="space-y-6">
            {locations.map((loc, i) => (
              <div key={i} className="rounded bg-white p-8 shadow-(--shadow-card)">
                <h3 className="font-bold text-heading mb-3">{loc.label}</h3>
                {loc.address && (
                  <div className="flex items-start gap-3 mb-3">
                    <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-secondary leading-relaxed">{loc.address}</p>
                  </div>
                )}
                {loc.phone && (
                  <div className="flex items-center gap-3 mb-4">
                    <Phone className="h-5 w-5 text-primary shrink-0" />
                    <a href={`tel:${loc.phone}`} className="text-sm font-medium text-slate-700 hover:text-primary">
                      {loc.phone}
                    </a>
                  </div>
                )}
                {loc.directionsUrl && (
                  <a
                    href={loc.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-primary hover:underline"
                  >
                    Get Directions
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
