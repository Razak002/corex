"use client"

import type React from "react"
import { useEffect, useState } from "react"

interface CalendlyEmbedProps {
  url: string
  styles?: React.CSSProperties
  className?: string
  onEventScheduled?: () => void
}

const CalendlyEmbed: React.FC<CalendlyEmbedProps> = ({ url, styles = {}, className = "", onEventScheduled }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true

    const handleCalendlyEvent = (e: MessageEvent) => {
      if (e.data.event === "calendly.event_scheduled") {
        setIsLoading(false)
        if (onEventScheduled) {
          onEventScheduled()
        }
      }
      if (e.data.event && e.data.event.indexOf("calendly.") === 0) {
        setIsLoading(false)
      }
    }

    window.addEventListener("message", handleCalendlyEvent)
    document.body.appendChild(script)

    return () => {
      window.removeEventListener("message", handleCalendlyEvent)
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [onEventScheduled])

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50 bg-opacity-75 z-10">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <div
        className={`calendly-inline-widget w-full h-full ${className}`}
        data-url={url}
        style={{
          minWidth: "320px",
          height: "600px",
          ...styles,
        }}
      />
    </div>
  )
}

export default CalendlyEmbed
