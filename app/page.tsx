"use client"

import type React from "react"
import { ChevronUp } from "lucide-react"
import { useState, useEffect } from "react"

import Footer from "./header-footer/footer"
import TeamSection from "./team-section/page"
import HeroSection from "./hero-section/page"
import AboutUsSection from "./about-section/page"
import ServicesSection from "./service-section/page"
import ProductsSection from "./product-section/page"
import ContactSection from "./contact-us-section/page"
import TestimonialSection from "./testimonial-section/page"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Header from "./header-footer/header"

export default function OkardtechPortfolio() {
  return (
    <div className="flex flex-col min-h-screen text-sm text-neutral-800 dark:text-neutral-300">
      <Header />
      <main className="mx-auto flex-1">
        <HeroSection />
        <AboutUsSection />
        <ServicesSection />
        <ProductsSection />
        <TeamSection />
        <TestimonialSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}

// Scroll To Top Button Component
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  return (
    <div className="fixed bottom-4 right-4">
      {isVisible && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="bg-white hover:bg-gray-50 text-purple-500 hover:text-purple-600 rounded-full h-12 w-12 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 border border-purple-200"
        >
          <ChevronUp className="h-6 w-6" />
        </Button>
      )}
    </div>
  )
}

export const GlassCard = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => (
  <Card
    className={`bg-background/60 backdrop-blur-sm border border-purple-300 dark:border-white/50 shadow-lg ${className}`}
  >
    {children}
  </Card>
)

