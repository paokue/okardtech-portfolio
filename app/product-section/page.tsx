"use client"

import React from "react"
import Image from "next/image"
import { useLocale } from "@/contexts/locale-context"

export default function ProductsSection() {
    const { t } = useLocale()
    const [activeFilter, setActiveFilter] = React.useState("All")

    const projects = [
        {
            id: 1,
            image: "/images/e-comerce.png",
            title: "E-Commerce Platform",
            description: "Modern online shopping experience with advanced features",
            category: "Website",
            size: "tall",
        },
        {
            id: 2,
            image: "/images/lanxang-app.png",
            title: "Lanxang App",
            description: "Flight booking and travel management system",
            category: "Mobile",
            size: "medium",
        },
        {
            id: 3,
            image: "/images/okardcare.png",
            title: "Okardcare",
            description: "Comprehensive health management mobile application",
            category: "Website",
            size: "wide",
        },
        {
            id: 4,
            image: "/images/okardtech-web.png",
            title: "Okardtech Portfolio",
            description: "Custom software development solutions",
            category: "Website",
            size: "wide",
        },
        {
            id: 5,
            image: "/images/a-z-works.png",
            title: "A-Z works",
            description: "Freelancer plate form",
            category: "Mobile",
            size: "tall",
        },
        {
            id: 6,
            image: "/images/backend.png",
            title: "Training",
            description: "Master backend course traning",
            category: "Training",
            size: "square",
        },
        {
            id: 7,
            image: "/images/full-stack.png",
            title: "Training",
            description: "Full-stack course traning",
            category: "Training",
            size: "square",
        },
        {
            id: 8,
            image: "/images/frontend-course.png",
            title: "Training",
            description: "Master frontend course traning",
            category: "Training",
            size: "square",
        },
    ]

    const filterTabs = [t("Projects.all"), t("Projects.website"), t("Projects.mobileApplication"), t("Projects.training")]

    const filteredProjects =
        activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

    const getGridClass = (size: string) => {
        switch (size) {
            case "tall":
                return "md:row-span-2"
            case "wide":
                return "md:col-span-2"
            case "square":
                return ""
            default:
                return ""
        }
    }
    return (
        <section id="products" className="py-16 md:py-24">
            <div className="container max-w-[95%] sm:max-w-[80%] mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <p className="text-sm text-purple-500 font-medium mb-2">{t("Projects.title")}</p>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">{t("Projects.subTitle")}</h2>
                    <p className="max-w-3xl mx-auto text-foreground drop-shadow-md">
                        {t("Projects.description")}
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="flex space-x-8">
                        {filterTabs.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveFilter(tab)}
                                className={`pb-2 text-sm font-medium transition-colors border-b-2 ${activeFilter === tab
                                    ? "text-purple-500 border-purple-500"
                                    : "text-muted-foreground border-transparent hover:text-foreground"
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className={`group relative overflow-hidden rounded-lg cursor-pointer transition-transform duration-300 hover:scale-[1.02] ${getGridClass(project.size)}`}
                        >
                            <Image
                                src={project.image || "/placeholder.svg"}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
                            <div className="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out">
                                <div className="p-2">
                                    <h3 className="text-white font-bold text-xl drop-shadow-lg">{project.title}</h3>
                                    <p className="text-white/90 text-sm mb-3 drop-shadow-md">{project.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Show message when no projects match filter */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-muted-foreground">No projects found for the selected category.</p>
                    </div>
                )}
            </div>
        </section>
    )
}
