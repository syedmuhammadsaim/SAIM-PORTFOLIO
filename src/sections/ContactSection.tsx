import { useState, type FormEvent } from "react"
import emailjs from "@emailjs/browser"
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react"
import { personalData } from "../data/personal"
import { SocialIcons } from "../components/SocialIcons"
import { SectionHeader } from "../components/SectionHeader"

interface FormState {
  fullName: string
  email: string
  subject: string
  message: string
  botField: string // Honeypot field
}

interface FormErrors {
  fullName?: string
  email?: string
  subject?: string
  message?: string
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormState>({
    fullName: "",
    email: "",
    subject: "",
    message: "",
    botField: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [statusMessage, setStatusMessage] = useState("")

  const validate = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = "Please enter your full name (at least 2 characters)."
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please enter a valid email address."
    }

    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      newErrors.subject = "Please enter a subject (at least 3 characters)."
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = "Please enter a message (at least 10 characters)."
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    // 1. Honeypot spam check
    if (formData.botField) {
      // Silently ignore bot submission
      setSubmitStatus("success")
      setStatusMessage("Thank you! Your message has been received.")
      return
    }

    // 2. Input validation
    if (!validate()) return

    setIsSubmitting(true)
    setSubmitStatus("idle")
    setStatusMessage("")

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    try {
      if (serviceId && templateId && publicKey) {
        // Live EmailJS call
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.fullName,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
          },
          publicKey
        )
        setSubmitStatus("success")
        setStatusMessage("Thank you! Your message has been sent successfully.")
        setFormData({
          fullName: "",
          email: "",
          subject: "",
          message: "",
          botField: "",
        })
      } else {
        // Simulated local fallback when keys are not configured yet
        await new Promise((resolve) => setTimeout(resolve, 800))
        setSubmitStatus("success")
        setStatusMessage(
          "Message submitted successfully! (Note: EmailJS keys can be configured in your .env file)."
        )
        setFormData({
          fullName: "",
          email: "",
          subject: "",
          message: "",
          botField: "",
        })
      }
    } catch {
      setSubmitStatus("error")
      setStatusMessage("Failed to send message. Please try emailing directly or try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className="py-16 md:py-24 border-b border-[#eaeaea] dark:border-[#222222] bg-neutral-50/20 dark:bg-[#0c0c0c]/20"
      aria-label="Contact Section"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Get In Touch"
          title="Let's Discuss Your Next Software Project"
          description="Have an inquiry, project proposition, or engineering role? Reach out through the contact form or connect directly across professional channels."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-xl border border-[#eaeaea] dark:border-[#262626] bg-white dark:bg-[#121212] space-y-6">
              <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                Direct Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                I am based in Karachi, Pakistan, and available for remote collaboration with international clients and software teams.
              </p>

              <div className="space-y-4 pt-2">
                {/* Email item */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg border border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-[#181818] text-neutral-800 dark:text-neutral-200 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase text-neutral-400 dark:text-neutral-500">
                      Email Address
                    </p>
                    <a
                      href={`mailto:${personalData.contact.email}`}
                      className="text-sm font-medium text-neutral-900 dark:text-neutral-100 hover:underline"
                    >
                      {personalData.contact.email}
                    </a>
                  </div>
                </div>

                {/* Location item */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-lg border border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-[#181818] text-neutral-800 dark:text-neutral-200 shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase text-neutral-400 dark:text-neutral-500">
                      Location
                    </p>
                    <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
                      {personalData.contact.location}
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Channels List */}
              <div className="pt-6 border-t border-neutral-100 dark:border-neutral-800 space-y-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                  Professional Networks
                </p>
                <SocialIcons iconSize={18} variant="bordered" />
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-xl border border-[#eaeaea] dark:border-[#262626] bg-white dark:bg-[#121212] shadow-xs">
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Honeypot Spam Protection Field - Hidden from humans */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="botField">Leave this field blank</label>
                  <input
                    type="text"
                    id="botField"
                    name="botField"
                    tabIndex={-1}
                    autoComplete="off"
                    value={formData.botField}
                    onChange={(e) => setFormData({ ...formData, botField: e.target.value })}
                  />
                </div>

                {/* Full Name & Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="fullName"
                      className="block text-xs font-semibold text-neutral-800 dark:text-neutral-200"
                    >
                      Full Name <span className="text-neutral-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.fullName}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value })
                        if (errors.fullName) setErrors({ ...errors, fullName: undefined })
                      }}
                      aria-invalid={!!errors.fullName}
                      aria-describedby={errors.fullName ? "fullName-error" : undefined}
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm transition-colors bg-white dark:bg-[#161616] text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 ${
                        errors.fullName
                          ? "border-red-500 dark:border-red-500"
                          : "border-neutral-200 dark:border-neutral-800"
                      }`}
                    />
                    {errors.fullName && (
                      <p id="fullName-error" className="text-[11px] text-red-500">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* Email Address */}
                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="block text-xs font-semibold text-neutral-800 dark:text-neutral-200"
                    >
                      Email Address <span className="text-neutral-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="e.g. name@company.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value })
                        if (errors.email) setErrors({ ...errors, email: undefined })
                      }}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className={`w-full px-3.5 py-2.5 rounded-lg border text-sm transition-colors bg-white dark:bg-[#161616] text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 ${
                        errors.email
                          ? "border-red-500 dark:border-red-500"
                          : "border-neutral-200 dark:border-neutral-800"
                      }`}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-[11px] text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="subject"
                    className="block text-xs font-semibold text-neutral-800 dark:text-neutral-200"
                  >
                    Subject <span className="text-neutral-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    placeholder="e.g. Full Stack Project Inquiry / Engineering Role"
                    value={formData.subject}
                    onChange={(e) => {
                      setFormData({ ...formData, subject: e.target.value })
                      if (errors.subject) setErrors({ ...errors, subject: undefined })
                    }}
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? "subject-error" : undefined}
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm transition-colors bg-white dark:bg-[#161616] text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 ${
                      errors.subject
                        ? "border-red-500 dark:border-red-500"
                        : "border-neutral-200 dark:border-neutral-800"
                    }`}
                  />
                  {errors.subject && (
                    <p id="subject-error" className="text-[11px] text-red-500">
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="block text-xs font-semibold text-neutral-800 dark:text-neutral-200"
                  >
                    Message <span className="text-neutral-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Provide details about your project scope, timeline, or requirements..."
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value })
                      if (errors.message) setErrors({ ...errors, message: undefined })
                    }}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={`w-full px-3.5 py-2.5 rounded-lg border text-sm transition-colors bg-white dark:bg-[#161616] text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:focus:ring-neutral-600 resize-y ${
                      errors.message
                        ? "border-red-500 dark:border-red-500"
                        : "border-neutral-200 dark:border-neutral-800"
                    }`}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-[11px] text-red-500">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Feedback notification banner */}
                {submitStatus === "success" && (
                  <div
                    role="alert"
                    className="p-3.5 rounded-lg border border-emerald-500/20 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 text-xs flex items-center gap-2 animate-fadeIn"
                  >
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600 dark:text-emerald-400" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div
                    role="alert"
                    className="p-3.5 rounded-lg border border-red-500/20 bg-red-500/10 text-red-700 dark:text-red-300 text-xs flex items-center gap-2 animate-fadeIn"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-600 dark:text-red-400" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {/* Submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-lg text-sm font-semibold bg-[#111111] text-white hover:bg-[#2b2b2b] dark:bg-white dark:text-[#111111] dark:hover:bg-neutral-200 transition-all duration-200 shadow-xs cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
