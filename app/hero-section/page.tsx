"use client"

import Link from "next/link"
import type React from "react"
import { useState, useEffect } from "react"
import { useLocale } from "@/contexts/locale-context"
import { Button } from "@/components/ui/button"
import {
    Facebook,
    Phone,
    MessageCircle,
    Mouse,
} from "lucide-react"

export default function HeroSection() {
    const { t } = useLocale()
    const [typedText, setTypedText] = useState("")
    const fullText = t("Hero.title")

    useEffect(() => {
        let index = 0
        let isDeleting = false
        let currentText = ""

        const typeSpeed = 100
        const deleteSpeed = 50
        const pauseTime = 2000

        const timer = setInterval(
            () => {
                if (!isDeleting) {
                    // Typing
                    if (index <= fullText.length) {
                        currentText = fullText.slice(0, index)
                        setTypedText(currentText)
                        index++
                    } else {
                        // Pause before deleting
                        setTimeout(() => {
                            isDeleting = true
                        }, pauseTime)
                    }
                } else {
                    // Deleting
                    if (index > 0) {
                        currentText = fullText.slice(0, index - 1)
                        setTypedText(currentText)
                        index--
                    } else {
                        // Reset for next cycle
                        isDeleting = false
                        index = 0
                    }
                }
            },
            isDeleting ? deleteSpeed : typeSpeed,
        )

        return () => clearInterval(timer)
    }, [])

    const scrollToAbout = () => {
        document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
    }

    return (
        <section id="home" className="relative w-full h-[calc(100vh-3.5rem)] flex items-center justify-center">
            <div className="container max-w-[95%] sm:max-w-[80%] mx-auto text-center">
                <div className="text-center mb-4">
                    <p className="text-lg md:text-xl lg:text-2xl font-bold tracking-tighter mb-2 text-foreground min-h-[2rem] md:min-h-[2.5rem] lg:min-h-[3rem]">
                        "{typedText}"
                        <span className="animate-pulse">|</span>
                    </p>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
                        <span className="bg-clip-text text-transparent bg-gradient-to-br from-purple-400 to-violet-600">
                            {t("Hero.title1")}
                        </span>{" "}
                        {t("Hero.title2")}
                    </h1>
                </div>
                <p className="max-w-2xl mx-auto text-lg md:text-xl text-foreground mb-8">{t("Hero.subtitle")}</p>

                <div className="mt-8 flex justify-center gap-4 mb-8">
                    <Button
                        size="lg"
                        className="bg-gradient-to-br from-purple-500 to-violet-600 text-white shadow-lg hover:shadow-violet-500/50 transition-shadow"
                        onClick={() => {
                            document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
                        }}
                    >
                        {t("Hero.buttonServices")}
                    </Button>
                    <Link
                        href="https://wa.me/8562098780045"
                        target="_blank"
                    >
                        <Button size="lg" variant="outline">
                            {t("Hero.buttonContact")}
                        </Button>
                    </Link>
                </div>

                <div className="flex justify-center gap-6 mb-12">
                    <Link
                        href="https://www.facebook.com/profile.php?id=61564877261159"
                        target="_blank"
                        className="p-3 bg-background/60 backdrop-blur-sm border border-white/10 rounded-full text-foreground hover:text-purple-500 hover:border-purple-500/50 transition-all duration-300 hover:scale-110"
                    >
                        <Facebook className="h-5 w-5" />
                    </Link>
                    <Link
                        href="https://www.tiktok.com/@okardtech"
                        target="_blank"
                        className="p-3 bg-background/60 backdrop-blur-sm border border-white/10 rounded-full text-foreground hover:text-purple-500 hover:border-purple-500/50 transition-all duration-300 hover:scale-110"
                    >
                        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                        </svg>
                    </Link>
                    <Link
                        href="tel:+8562098780045"
                        className="p-3 bg-background/60 backdrop-blur-sm border border-white/10 rounded-full text-foreground hover:text-purple-500 hover:border-purple-500/50 transition-all duration-300 hover:scale-110"
                    >
                        <Phone className="h-5 w-5" />
                    </Link>
                    <Link
                        href="https://wa.me/8562098780045"
                        target="_blank"
                        className="p-3 bg-background/60 backdrop-blur-sm border border-white/10 rounded-full text-foreground hover:text-purple-500 hover:border-purple-500/50 transition-all duration-300 hover:scale-110"
                    >
                        <MessageCircle className="h-5 w-5" />
                    </Link>
                </div>

                <div className="flex justify-center">
                    <button
                        onClick={scrollToAbout}
                        className="flex flex-col items-center gap-2 text-foreground/70 hover:text-purple-500 transition-colors duration-300 group"
                    >
                        <div className="relative">
                            <Mouse className="animate-bounce" />
                        </div>
                        <span className="text-sm font-medium">{t("Hero.scrollDown")}</span>
                    </button>
                </div>
            </div>
        </section>
    )
}
