"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Gift, Timer } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function Offer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 8,
    minutes: 23,
    seconds: 45,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev

        if (seconds > 0) {
          seconds--
        } else if (minutes > 0) {
          minutes--
          seconds = 59
        } else if (hours > 0) {
          hours--
          minutes = 59
          seconds = 59
        } else if (days > 0) {
          days--
          hours = 23
          minutes = 59
          seconds = 59
        }

        return { days, hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section id="offer" className="relative py-20 overflow-hidden">
      {/* Background Image with Overlay */}
       <div className="absolute inset-0 z-0">
        <Image
          src="/offer.jpg"
          alt="Summer offer background"
          fill
          className="object-cover"
          quality={100}
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
      </div>
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-6 py-2 mb-8">
            <Star className="h-4 w-4 text-primary" />
            <span className="text-primary font-semibold">LIMITED TIME OFFER</span>
            <Star className="h-4 w-4 text-primary" />
          </div>

          <h2 className="font-serif font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            A Big <span className="text-primary">OFFER</span>
            <br />
            FOR THIS SUMMER
          </h2>

          <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Ride with us now, let&apos;s build that dream muscle. Get up to 50% off on all membership plans.
          </p>

          {/* Offer Details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-colors group">
              <Gift className="h-6 w-6 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <div className="text-2xl font-bold text-primary">50%</div>
              <div className="text-white text-sm">OFF</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-colors group">
              <Timer className="h-6 w-6 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <div className="text-2xl font-bold text-primary">3</div>
              <div className="text-white text-sm">MONTHS FREE</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-colors group">
              <Star className="h-6 w-6 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-white text-sm">ACCESS</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 animate-pulse-glow group"
            >
              JOIN NOW
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 bg-transparent"
            >
              LEARN MORE
            </Button>
          </div>

          <div className="mt-8 text-white/80">
            <p className="text-sm mb-2 flex items-center justify-center gap-2">
              <Timer className="h-4 w-4" />
              Offer expires in:
            </p>
            <div className="flex justify-center space-x-4 text-2xl font-bold">
              <div className="bg-primary/20 backdrop-blur-sm rounded-lg px-3 py-2 min-w-[60px] hover:bg-primary/30 transition-colors">
                <div>{timeLeft.days.toString().padStart(2, "0")}</div>
                <div className="text-xs text-white/60">DAYS</div>
              </div>
              <div className="bg-primary/20 backdrop-blur-sm rounded-lg px-3 py-2 min-w-[60px] hover:bg-primary/30 transition-colors">
                <div>{timeLeft.hours.toString().padStart(2, "0")}</div>
                <div className="text-xs text-white/60">HRS</div>
              </div>
              <div className="bg-primary/20 backdrop-blur-sm rounded-lg px-3 py-2 min-w-[60px] hover:bg-primary/30 transition-colors">
                <div>{timeLeft.minutes.toString().padStart(2, "0")}</div>
                <div className="text-xs text-white/60">MIN</div>
              </div>
              <div className="bg-primary/20 backdrop-blur-sm rounded-lg px-3 py-2 min-w-[60px] hover:bg-primary/30 transition-colors">
                <div>{timeLeft.seconds.toString().padStart(2, "0")}</div>
                <div className="text-xs text-white/60">SEC</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
