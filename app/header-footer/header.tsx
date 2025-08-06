"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import ThemeToggle from "@/components/theme-toggle"
import { useLocale } from "@/contexts/locale-context"
import ScrollProgress from "@/components/scroll-progress"
import LanguageSwitcher from "@/components/language-switcher"
import { LogIn, Menu, Rocket, X } from "lucide-react"

export default function Header() {
    const { t } = useLocale()
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    const navLinks = [
        { href: "#about", label: t("Header.about") },
        { href: "#services", label: t("Header.services") },
        { href: "#products", label: t("Header.products") },
        { href: "#team", label: t("Header.team") },
        { href: "#contact", label: t("Header.contact") },
    ]

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container max-w-[95%] sm:max-w-[80%] sm:max-w-[80%] mx-auto flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center gap-2 font-bold text-lg">
                    <Image src="/images/okardtech-logo.png" alt="logo" width={150} height={60} className="hidden dark:block" />
                    <Image src="/images/okardtech-dark-logo.png" alt="logo" width={150} height={60} className="block dark:hidden" />
                </Link>

                <nav className="hidden md:flex items-center gap-6 text-sm">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="transition-colors text-purple-800 hover:text-purple-500 dark:text-white/90 dark:hover:text-white/80 font-medium"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-2">
                    <LanguageSwitcher />
                    <ThemeToggle />
                    <Button variant="outline" size="sm">
                        <LogIn className="h-4 w-4 mr-2" />
                        {t("Header.login")}
                    </Button>
                </div>

                <div className="md:hidden">
                    <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </Button>
                </div>
            </div>
            <ScrollProgress />
            {isMenuOpen && (
                <div className="md:hidden bg-background/95 pb-4">
                    <nav className="flex flex-col items-center gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="transition-colors hover:text-foreground/80 text-foreground/60"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="flex items-center gap-4 mt-4">
                            <LanguageSwitcher />
                            <ThemeToggle />
                            <Button variant="outline" size="sm">
                                <LogIn className="h-4 w-4 mr-2" />
                                {t("Header.login")}
                            </Button>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    )
}
