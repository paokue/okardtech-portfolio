"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { useLocale } from "@/contexts/locale-context"

import { GlassCard } from "../page"

export default function ContactSection() {
    const { t } = useLocale()
    const [formData, setFormData] = React.useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission here
        console.log("Form submitted:", formData)
        // Reset form
        setFormData({ name: "", email: "", subject: "", message: "" })
    }

    return (
        <section id="contact" className="py-16 md:py-24">
            <div className="container max-w-[95%] sm:max-w-[80%] mx-auto">
                <div className="text-center mb-12">
                    <p className="text-sm text-purple-500 font-medium mb-2">Contact Us</p>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 text-foreground drop-shadow-sm">
                        {t("Contact.title")}
                    </h2>
                    <p className="max-w-3xl mx-auto text-foreground drop-shadow-md">{t("Contact.subtitle")}</p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-purple-500/20 rounded-full text-purple-500 mt-1">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-foreground mb-2 drop-shadow-sm">{t("Contact.locationTitle")}</h3>
                                <p className="text-foreground drop-shadow-sm">{t("Contact.location")}</p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-purple-500/20 rounded-full text-purple-500 mt-1">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-foreground mb-2 drop-shadow-sm">{t("Contact.emailTitle")}</h3>
                                <p className="text-foreground drop-shadow-sm">{t("Contact.email")}</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-purple-500/20 rounded-full text-purple-500 mt-1">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-foreground mb-2 drop-shadow-sm">{t("Contact.callTitle")}</h3>
                                <p className="text-foreground drop-shadow-sm">{t("Contact.phone")}</p>
                            </div>
                        </div>
                    </div>

                    <GlassCard className="p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2 drop-shadow-sm">
                                        {t("Contact.formName")}
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder={t("Contact.formNamePlaceholder")}
                                        className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2 drop-shadow-sm">
                                        {t("Contact.formEmail")}
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder={t("Contact.formEmailPlaceholder")}
                                        className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2 drop-shadow-sm">
                                    {t("Contact.formSubject")}
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    placeholder={t("Contact.formSubjectPlaceholder")}
                                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2 drop-shadow-sm">
                                    {t("Contact.formMessage")}
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    placeholder={t("Contact.formMessagePlaceholder")}
                                    rows={5}
                                    className="w-full px-4 py-3 bg-background/50 border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                                    required
                                />
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-gradient-to-r from-purple-500 to-violet-600 hover:from-purple-600 hover:to-violet-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/50"
                            >
                                {t("Contact.formSubmit")}
                            </Button>
                        </form>
                    </GlassCard>
                </div>
            </div>
        </section>
    )
}
