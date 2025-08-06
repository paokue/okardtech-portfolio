"use client"

import type React from "react"
import { useLocale } from "@/contexts/locale-context"
import { Globe, GraduationCap, Headphones, Smartphone } from "lucide-react"

import { GlassCard } from "../page"

export default function ServicesSection() {
    const { t } = useLocale()
    const services = [
        {
            icon: <Globe className="h-6 w-6" />,
            title: t("Services.webDevTitle"),
            description: t("Services.webDevText"),
        },
        {
            icon: <Smartphone className="h-6 w-6" />,
            title: t("Services.mobileAppTitle"),
            description: t("Services.mobileAppText"),
        },
        {
            icon: <GraduationCap className="h-6 w-6" />,
            title: t("Services.technicalTitle"),
            description: t("Services.technicalText")
        },
        {
            icon: <Headphones className="h-6 w-6" />,
            title: t("Services.itTitle"),
            description: t("Services.itText"),
        },
    ]
    return (
        <section id="services" className="py-16 md:py-24">
            <div className="container max-w-[95%] sm:max-w-[80%] mx-auto">
                <div className="text-center mb-12">
                    <p className="text-sm text-purple-500 font-medium mb-2">{t("Services.title")}</p>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">{t("Services.subtitle")}</h2>
                    <p className="max-w-3xl mx-auto text-lg text-foreground drop-shadow-md">
                        {t("Services.description")}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <GlassCard key={index} className="text-center p-6 hover:shadow-xl transition-shadow duration-300">
                            <div className="flex justify-center mb-4">
                                <div className="p-4 bg-purple-500/10 rounded-full text-purple-500">{service.icon}</div>
                            </div>
                            <h3 className="text-lg font-bold mb-3 text-foreground drop-shadow-sm">{service.title}</h3>
                            <p className="text-foreground text-sm leading-relaxed mb-4 drop-shadow-sm">{service.description}</p>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    )
}
