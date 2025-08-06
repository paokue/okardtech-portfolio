"use client"

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { useLocale } from "@/contexts/locale-context"
import { Facebook, PhoneCall } from "lucide-react"

export const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M16.5 0H13v16.2a3.2 3.2 0 1 1-3.2-3.2 3.2 3.2 0 0 1 1.3.3V10a6.8 6.8 0 0 0-1.3-.1 6.8 6.8 0 1 0 6.8 6.8V7a7 7 0 0 0 4 1.3V5.2a4.8 4.8 0 0 1-4-5.2Z" />
    </svg>
);

export const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M12 0a12 12 0 0 0-10.6 17.9L0 24l6.3-1.7A12 12 0 1 0 12 0Zm6.6 17.2a10.5 10.5 0 0 1-11.8 1.6l-.8-.4-3.7 1 1-3.6-.5-.8a10.5 10.5 0 1 1 15.8 2.2Zm-5.5-2.4c-.3-.2-1.8-.9-2-1s-.5-.1-.7.2-.8 1-.9 1.1-.3.2-.6.1a8.9 8.9 0 0 1-2.6-1.6 9.6 9.6 0 0 1-1.8-2.3c-.2-.3 0-.5.1-.6l.6-.8c.2-.3.2-.5.3-.8 0-.2 0-.5-.1-.7s-.7-1.6-1-2.2c-.3-.5-.6-.5-.8-.5H5c-.2 0-.5 0-.7.3l-.6.7c-.2.3-.7 1.1-.7 2.6s1 3 1.2 3.2a10.5 10.5 0 0 0 9.2 5.3c1.6 0 2.9-.5 3.2-1s1.1-1.5 1.2-1.8c.1-.2.1-.4 0-.6-.2-.2-.5-.3-.8-.5Z" />
    </svg>
);

export default function Footer() {
    const { t } = useLocale()
    return (
        <footer className="border-t border-border/40 bg-background/95">
            <div className="container max-w-[95%] sm:max-w-[80%] mx-auto py-8">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                        <Image src="/images/okardtech-logo.png" alt="logo" width={200} height={80} className="hidden dark:block" />
                        <Image src="/images/okardtech-dark-logo.png" alt="logo" width={200} height={80} className="block dark:hidden" />
                        <p className="text-muted-foreground text-sm leading-relaxed">{t("Footer.slogan")}</p>
                        <div className="flex space-x-3 mb-6">
                            <Link
                                href="https://www.facebook.com/profile.php?id=61564877261159"
                                className="w-8 h-8 rounded-full bg-white/10 hover:bg-purple-600 flex items-center justify-center transition-colors duration-300"
                            >
                                <Facebook className="h-4 w-4" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link
                                href="https://www.tiktok.com/@okardtech"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full bg-white/10 hover:bg-black flex items-center justify-center transition-colors duration-300"
                            >
                                <TikTokIcon className="h-4 w-4" />
                                <span className="sr-only">TikTok</span>
                            </Link>
                            <Link
                                href="tel:+8562098780045"
                                className="w-8 h-8 rounded-full bg-white/10 hover:bg-purple-600 flex items-center justify-center transition-colors duration-300"
                            >
                                <PhoneCall className="h-4 w-4" />
                                <span className="sr-only">Phone</span>
                            </Link>
                            <Link
                                href="https://wa.me/8562098780045"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-full bg-white/10 hover:bg-green-500 flex items-center justify-center transition-colors duration-300"
                            >
                                <WhatsAppIcon className="h-4 w-4" />
                                <span className="sr-only">WhatsApp</span>
                            </Link>
                        </div>
                    </div>

                    <div className="ml-0 sm:ml-32">
                        <h4 className="font-semibold mb-2">{t("Footer.servicesTitle")}</h4>
                        <ul className="space-y-1">
                            <li>
                                <Link href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                                    {t("Footer.webDev")}
                                </Link>
                            </li>
                            <li>
                                <Link href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                                    {t("Footer.mobileDev")}
                                </Link>
                            </li>
                            <li>
                                <Link href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                                    {t("Footer.productDev")}
                                </Link>
                            </li>
                            <li>
                                <Link href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                                    {t("Footer.customSolutions")}
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-2">{t("Footer.contactTitle")}</h4>
                        <div className="space-y-1">
                            <p className="text-muted-foreground text-sm">{t("Footer.location")}</p>
                            <p className="text-muted-foreground">{t("Footer.phone")}</p>
                            <p className="text-muted-foreground">{t("Footer.email")}</p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 border-t border-border/40 pt-4 text-center text-muted-foreground">
                    <p>
                        &copy; {2024} {t("Footer.company")}. {t("Footer.rights")}
                    </p>
                </div>
            </div>
        </footer>
    )
}
