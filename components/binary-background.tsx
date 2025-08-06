"use client"

import type React from "react"
import { useRef, useEffect, useState } from "react"

const BinaryBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isDark, setIsDark] = useState(false)
  const animationRef = useRef<{ time: number }>({ time: 0 })

  useEffect(() => {
    // Check initial theme
    const checkTheme = () => {
      const isDarkMode = document.documentElement.classList.contains("dark")
      setIsDark(isDarkMode)
    }

    checkTheme()

    // Watch for theme changes
    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const fontSize = 14
    const columns = Math.floor(width / fontSize)
    const rows = Math.floor(height / fontSize)
    let grid: (0 | 1)[][] = []

    // Initialize the grid with binary only
    const initGrid = () => {
      grid = []
      for (let y = 0; y < rows; y++) {
        grid[y] = []
        for (let x = 0; x < columns; x++) {
          grid[y][x] = Math.random() > 0.5 ? 1 : 0
        }
      }
    }
    initGrid()

    // Get character based on wave intensity
    const getCharacterForWave = (intensity: number, originalBinary: 0 | 1) => {
      if (intensity > 0.75) {
        return "#"
      } else if (intensity > 0.55) {
        return "*"
      } else if (intensity > 0.35) {
        return "%"
      } else if (intensity > 0.2) {
        return "="
      } else {
        return originalBinary.toString()
      }
    }

    // Get color based on character type - pure blue/cyan theme (more subtle)
    const getColorForCharacter = (char: string, intensity: number) => {
      const baseColor = isDark ? "#374151" : "#e5e7eb" // More subtle base

      switch (char) {
        case "#":
          // Center - bright cyan (reduced opacity)
          return isDark ? "#0891b2" : "#0e7490"
        case "*":
          // Inner - bright blue (reduced opacity)
          return isDark ? "#0284c7" : "#0369a1"
        case "%":
          // Middle - medium blue (reduced opacity)
          return isDark ? "#2563eb" : "#1d4ed8"
        case "=":
          // Outer - light blue (reduced opacity)
          return isDark ? "#3b82f6" : "#2563eb"
        default:
          return baseColor
      }
    }

    const draw = () => {
      // Set background color
      const bgColor = isDark ? "#111827" : "#ffffff"
      ctx.fillStyle = bgColor
      ctx.fillRect(0, 0, width, height)

      ctx.font = `${fontSize}px monospace`

      // Update animation time for smooth movement
      animationRef.current.time += 0.3

      // Draw the grid with single large moving wave
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < columns; x++) {
          if (grid[y] && grid[y][x] !== undefined) {
            const pixelX = x * fontSize
            const pixelY = y * fontSize

            // Create organic, shape-changing wave
            const time = animationRef.current.time

            // Multiple wave functions for organic shape
            const waveX1 = Math.sin(time * 0.008) * width * 0.25
            const waveY1 = Math.cos(time * 0.006) * height * 0.2
            const waveX2 = Math.cos(time * 0.012 + Math.PI / 3) * width * 0.15
            const waveY2 = Math.sin(time * 0.009 + Math.PI / 4) * height * 0.15

            // Base position
            const baseX = width * 0.5
            const baseY = height * 0.5

            // Create organic hotspot position
            const hotspotX = baseX + waveX1 + waveX2
            const hotspotY = baseY + waveY1 + waveY2

            // Calculate distance from hotspot
            const distance = Math.sqrt(Math.pow(pixelX - hotspotX, 2) + Math.pow(pixelY - hotspotY, 2))

            // Create organic shape variation using multiple sine waves (larger variations)
            const shapeVariation1 = Math.sin(Math.atan2(pixelY - hotspotY, pixelX - hotspotX) * 3 + time * 0.02) * 50 // Increased from 30
            const shapeVariation2 = Math.cos(Math.atan2(pixelY - hotspotY, pixelX - hotspotX) * 5 + time * 0.015) * 35 // Increased from 20
            const organicDistance = distance + shapeVariation1 + shapeVariation2

            // Create smooth falloff with organic shape
            const hotspotEffect = Math.max(0, 1 - organicDistance / 300) * 1.0 // Increased radius from 200 to 300

            // Subtle background wave for extra fluidity
            const backgroundWave = Math.sin(pixelX * 0.004 + pixelY * 0.003 + time * 0.01) * 0.05

            // Combine effects with reduced intensity for better text readability
            const finalIntensity = Math.max(0, (backgroundWave + hotspotEffect) * 0.7) // Reduced to 70%
            const normalizedIntensity = Math.min(1, finalIntensity)

            const char = getCharacterForWave(normalizedIntensity, grid[y][x])
            const color = getColorForCharacter(char, normalizedIntensity)

            ctx.fillStyle = color
            ctx.fillText(char, pixelX, pixelY)
          }
        }
      }

      // Very subtle binary flicker
      const flickerCount = Math.floor(columns * rows * 0.002)
      for (let i = 0; i < flickerCount; i++) {
        const x = Math.floor(Math.random() * columns)
        const y = Math.floor(Math.random() * rows)
        if (grid[y] && grid[y][x] !== undefined) {
          grid[y][x] = grid[y][x] === 1 ? 0 : 1
        }
      }
    }

    const intervalId = setInterval(draw, 50) // Smooth animation

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
      initGrid()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      clearInterval(intervalId)
      window.removeEventListener("resize", handleResize)
    }
  }, [isDark])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 -z-10" />
}

export default BinaryBackground
