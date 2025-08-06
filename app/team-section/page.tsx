"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { GlassCard } from "../page"
import { Button } from "@/components/ui/button"
import { useLocale } from "@/contexts/locale-context"
import { CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Github, Linkedin, Twitter } from "lucide-react"

export default function TeamSection() {
    const { t } = useLocale()
    const [currentSlide, setCurrentSlide] = React.useState(0)
    const [itemsPerSlide, setItemsPerSlide] = React.useState(3)

    const teamMembers = [
        {
            image: "/placeholder.svg?width=300&height=300",
            name: "Xorkue Xaileng",
            role: "Co-founder & CFO",
            bio: "A full-stack wizard with a love for clean code and elegant architecture.",
        },
        {
            image: "/placeholder.svg?width=300&height=300",
            name: "Daoyang Vatoua",
            role: "Co-founder & CTO",
            bio: "Passionate about creating intuitive and beautiful user experiences that delight users.",
        },
        {
            image: "/images/paokue.jpeg",
            name: "Paokue Saolong",
            role: "Co-founder & CEO",
            bio: "The organizational backbone of our team, ensuring projects are delivered on time and on budget.",
        },
        {
            image: "/images/thongphet.jpg",
            name: "Thongphet Keomanychanch",
            role: "Co-founder & Project manager",
            bio: "Expert in cloud infrastructure and automation, ensuring our systems run smoothly and securely.",
        }
    ]

    const totalSlides = Math.ceil(teamMembers.length / itemsPerSlide)

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
    }

    const goToSlide = (index: number) => {
        setCurrentSlide(index)
    }

    React.useEffect(() => {
        const updateItemsPerSlide = () => {
            if (window.innerWidth < 768) {
                setItemsPerSlide(1)
            } else {
                setItemsPerSlide(3)
            }
        }

        updateItemsPerSlide()
        window.addEventListener("resize", updateItemsPerSlide)
        return () => window.removeEventListener("resize", updateItemsPerSlide)
    }, [])

    // Auto slide every 6 seconds
    React.useEffect(() => {
        const interval = setInterval(nextSlide, 6000)
        return () => clearInterval(interval)
    }, [itemsPerSlide])

    return (
        <section id="team" className="py-16 md:py-24">
            <div className="container max-w-[95%] sm:max-w-[80%] mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">{t("Team.title")}</h2>
                    <p className="max-w-2xl mx-auto mt-2 text-muted-foreground">{t("Team.subtitle")}</p>
                </div>
                <div className="relative">
                    {/* Navigation Buttons */}
                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
                        onClick={prevSlide}
                    >
                        <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                        variant="outline"
                        size="icon"
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
                        onClick={nextSlide}
                    >
                        <ChevronRight className="h-4 w-4" />
                    </Button>

                    {/* Slides */}
                    <div className="overflow-hidden rounded-lg">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                                <div key={slideIndex} className="w-full flex-shrink-0">
                                    <div className={`grid gap-6 px-4 ${itemsPerSlide === 1 ? "grid-cols-1" : "grid-cols-1 md:grid-cols-3"}`}>
                                        {teamMembers
                                            .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                                            .map((member, memberIndex) => (
                                                <GlassCard key={memberIndex} className="text-center">
                                                    <CardContent className="pt-6 flex flex-col items-center">
                                                        <Image
                                                            src={member.image}
                                                            alt={member.name}
                                                            width={150}
                                                            height={150}
                                                            className="rounded-full mb-4 border-2 border-purple-500/50"
                                                        />
                                                        <h3 className="font-bold text-lg text-foreground drop-shadow-sm">{member.name}</h3>
                                                        <p className="text-purple-400 mb-3">{member.role}</p>
                                                        <p className="text-foreground text-sm mt-2 italic drop-shadow-sm">"{member.bio}"</p>

                                                        {/* Social Links */}
                                                        <div className="flex justify-center gap-3 mt-4">
                                                            <Link href="#" className="text-muted-foreground hover:text-purple-500 transition-colors">
                                                                <Linkedin className="h-4 w-4" />
                                                            </Link>
                                                            <Link href="#" className="text-muted-foreground hover:text-purple-500 transition-colors">
                                                                <Twitter className="h-4 w-4" />
                                                            </Link>
                                                            <Link href="#" className="text-muted-foreground hover:text-purple-500 transition-colors">
                                                                <Github className="h-4 w-4" />
                                                            </Link>
                                                        </div>
                                                    </CardContent>
                                                </GlassCard>
                                            ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Pagination Dots */}
                    <div className="hidden sm:flex justify-center mt-8 gap-2">
                        {Array.from({ length: totalSlides }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index
                                    ? "bg-purple-500 scale-125"
                                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
