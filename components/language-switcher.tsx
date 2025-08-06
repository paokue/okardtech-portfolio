"use client"

import { useLocale } from "@/contexts/locale-context"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Languages } from "lucide-react"

export default function LanguageSwitcher() {
  const { setLocale, t } = useLocale()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Languages className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLocale("en")}>{t("LanguageSwitcher.english")}</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLocale("lo")}>{t("LanguageSwitcher.lao")}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
