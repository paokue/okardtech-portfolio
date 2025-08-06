"use client"

import type React from "react"
import Image from "next/image"
import { useState } from "react"
import { useLocale } from "@/contexts/locale-context"
import { GlassCard } from "../page"

// Main Page Component
export default function AboutUsSection() {
    const { t } = useLocale()
    const [activeTab, setActiveTab] = useState("company")

    const stats = [
        { number: "10+", label: t("About.experice") },
        { number: "10+", label: t("About.membersTeam") },
        { number: "5+", label: t("About.completedProject") },
        { number: "95%", label: t("About.clientSatisfaction") },
    ]

    const tabs = [
        { id: "company", label: t("About.ourCompany") },
        { id: "mission", label: t("About.missionVision") },
        { id: "values", label: t("About.ourValues") },
    ]

    const getTabContent = () => {
        switch (activeTab) {
            case "company":
                return {
                    title: t("About.whoTitle"),
                    content: t("About.storyText")
                }
            case "mission":
                return {
                    title: t("About.missionTitle"),
                    content: t("About.missionText")
                }
            case "values":
                return {
                    title: t("About.valueTitle"),
                    content: t("About.valueText")
                }
        }
    }

    const tabContent = getTabContent()


    return (
        <section id="about" className="py-16 md:py-24">
            <div className="container max-w-[95%] sm:max-w-[80%] mx-auto">
                <div className="text-center mb-12">
                    <p className="text-sm text-purple-500 font-medium mb-2">{t("Header.about")}</p>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">{t("About.storyTitle")}</h2>
                    <p className="max-w-3xl mx-auto text-lg text-foreground mb-8 space-y-2">
                        {t("About.bio")}
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                    {stats.map((stat, index) => (
                        <GlassCard key={index} className="text-center p-6">
                            <div className="text-2xl md:text-3xl font-bold text-purple-500 mb-2">{stat.number}</div>
                            <div className="text-sm text-foreground drop-shadow-sm">{stat.label}</div>
                        </GlassCard>
                    ))}
                </div>

                <div className="flex justify-center mb-8">
                    <div className="flex space-x-8">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`pb-2 text-lg font-medium transition-colors border-b-2 ${activeTab === tab.id
                                    ? "text-purple-500 border-purple-500"
                                    : "text-white text-muted-foreground border-transparent hover:text-foreground"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="hidden sm:block relative">
                        <GlassCard className="overflow-hidden">
                            <div className="relative">
                                <Image
                                    src="/images/tech-team-collaboration-purple.jpeg"
                                    alt="OkardTech Team"
                                    width={600}
                                    height={400}
                                    className="w-full h-80 object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                                    <h3 className="text-white font-bold text-xl mb-1 drop-shadow-lg">OkardTech Event</h3>
                                    {/* <p className="text-white/90 text-sm drop-shadow-md">Collaboration & Innovation</p> */}
                                </div>
                            </div>
                        </GlassCard>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4 text-foreground drop-shadow-sm">{tabContent?.title}</h3>
                        <div className="space-y-4">
                            {tabContent?.content.split("\n\n").map((paragraph, index) => (
                                <p key={index} className="text-md text-foreground leading-relaxed drop-shadow-sm">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
