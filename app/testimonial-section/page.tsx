"use client"

import React from "react"
import Image from "next/image"

import { GlassCard } from "../page"

import { Button } from "@/components/ui/button"
import { useLocale } from "@/contexts/locale-context"
import { CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function TestimonialSection() {
    const { t } = useLocale()
    const [currentSlide, setCurrentSlide] = React.useState(0)

    const testimonials = [
        {
            quote:
                "Working with Okardtech was a game-changer for our business. Their innovative approach, deep technical expertise, and dedication to delivering quality solutions helped us achieve results beyond our expectations.",
            author: "CEO, Innovate Inc.",
            company: "Innovate Inc.",
            image: "/placeholder.svg",
        },
        {
            quote:
                "The mobile app is a masterpiece of design and functionality. Okardtech took the time to understand our needs and delivered a product that is both user-friendly and technologically advanced.",
            author: "Founder, Startup Co.",
            company: "Startup Co.",
            image: "/placeholder.svg",
        },
        {
            quote:
                "Okardtech's expertise completely transformed our online presence. Their strategic insights and flawless execution helped us connect with our audience in ways we never thought possible.",
            author: "Marketing Director, TechCorp",
            company: "TechCorp",
            image: "/placeholder.svg",
        },
        {
            quote:
                "The team's attention to detail is outstanding, ensuring every element of our project was perfectly executed. Their commitment to excellence truly sets them apart in the industry.",
            author: "CTO, Digital Solutions",
            company: "Digital Solutions",
            image: "/placeholder.svg",
        },
        {
            quote:
                "From concept to deployment, Okardtech guided us every step of the way. Their clear communication, technical knowledge, and creative problem-solving made the process smooth and stress-free.",
            author: "Product Manager, InnovateLab",
            company: "InnovateLab",
            image: "/placeholder.svg",
        },
        {
            quote:
                "The custom solution Okardtech built has streamlined our operations, saving us time and resources. Their ability to combine innovation with practicality is exactly what our business needed.",
            author: "Operations Director, ScaleUp",
            company: "ScaleUp",
            image: "/placeholder.svg",
        },
    ]


    // Detect screen size
    const [isMobile, setIsMobile] = React.useState(false)

    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const itemsPerSlide = isMobile ? 1 : 2
    const totalSlides = Math.ceil(testimonials.length / itemsPerSlide)

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
    }

    const goToSlide = (index: number) => {
        setCurrentSlide(index)
    }

    // Auto-slide every 7s
    React.useEffect(() => {
        const interval = setInterval(nextSlide, 7000)
        return () => clearInterval(interval)
    }, [totalSlides])

    return (
        <section id="testimonials" className="py-16 md:py-24">
            <div className="container max-w-[95%] sm:max-w-[80%] mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">{t("Testimonials.title")}</h2>
                    <p className="max-w-2xl mx-auto mt-2 text-muted-foreground">{t("Testimonials.subtitle")}</p>
                </div>
                <div className="relative">
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

                    <div className="overflow-hidden rounded-lg">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                                <div key={slideIndex} className="w-full flex-shrink-0">
                                    <div
                                        className={`grid gap-6 px-4 ${isMobile ? "grid-cols-1" : "grid-cols-2"}`}
                                    >
                                        {testimonials
                                            .slice(
                                                slideIndex * itemsPerSlide,
                                                (slideIndex + 1) * itemsPerSlide
                                            )
                                            .map((testimonial, testimonialIndex) => (
                                                <GlassCard key={testimonialIndex}>
                                                    <CardContent className="pt-6">
                                                        <blockquote className="text-lg italic border-l-4 border-purple-500 pl-4 mb-6">
                                                            "{testimonial.quote}"
                                                        </blockquote>
                                                        {/* <div className="flex items-center gap-4">
                                                            <Image
                                                                src={testimonial.image}
                                                                alt={testimonial.author}
                                                                width={50}
                                                                height={50}
                                                                className="rounded-full border-2 border-purple-500/30"
                                                            />
                                                            <div>
                                                                <p className="font-bold text-foreground drop-shadow-sm">
                                                                    {testimonial.author}
                                                                </p>
                                                                <p className="text-sm text-muted-foreground">
                                                                    {testimonial.company}
                                                                </p>
                                                            </div>
                                                        </div> */}
                                                    </CardContent>
                                                </GlassCard>
                                            ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

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
