"use client"

import type React from "react"
import { createContext, useState, useContext, useMemo } from "react"
import enMessages from "../messages/en.json"
import loMessages from "../messages/lo.json"

type Locale = "en" | "lo"

const messages = {
  en: enMessages,
  lo: loMessages,
}

// A little helper function to get nested keys like "Header.about"
const getTranslation = (locale: Locale, key: string) => {
  const keys = key.split(".")
  let result: any = messages[locale]
  for (const k of keys) {
    result = result?.[k]
    if (result === undefined) {
      return key // Return key if not found
    }
  }
  return result
}

interface LocaleContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string) => string
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

export const LocaleProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocale] = useState<Locale>("en")

  const t = useMemo(() => (key: string) => getTranslation(locale, key), [locale])

  return <LocaleContext.Provider value={{ locale, setLocale, t }}>{children}</LocaleContext.Provider>
}

export const useLocale = () => {
  const context = useContext(LocaleContext)
  if (context === undefined) {
    throw new Error("useLocale must be used within a LocaleProvider")
  }
  return context
}
