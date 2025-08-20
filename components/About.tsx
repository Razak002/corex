"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle, Users, Award, Clock, Play, Star } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

const stats = [
  { icon: Users, value: 500, label: "Happy Members", suffix: "+" },
  { icon: Award, value: 10, label: "Years Experience", suffix: "+" },
  { icon: Clock, value: 24, label: "Support Available", suffix: "/7" },
]

const testimonials = [
  {
    name: "khadijat Bisallah",
    role: "Fitness Enthusiast",
    content: "Amazing trainers and equipment! I've achieved my fitness goals faster than I ever imagined.",
    rating: 5,
  },
  {
    name: "jaafar lucid",
    role: "Professional Athlete",
    content: "The personalized training programs are exactly what I needed to take my performance to the next level.",
    rating: 5,
  },
    {
    name: "AA Gimba",
    role: "Coach Athlete",
    content: "The personalized training programs are exactly what I needed to take my performance to the next level.",
    rating: 5,
  },

    {
    name: "moshood adeosun",
    role: "trainer",
    content: "The personalized training programs are exactly what I needed to take my performance to the next level.",
    rating: 5,
  },
]

export default function About() {
  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0))
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            stats.forEach((stat, index) => {
              let current = 0
              const increment = stat.value / 50
              const timer = setInterval(() => {
                current += increment
                if (current >= stat.value) {
                  current = stat.value
                  clearInterval(timer)
                }
                setAnimatedStats((prev) => {
                  const newStats = [...prev]
                  newStats[index] = Math.floor(current)
                  return newStats
                })
              }, 30)
            })
          }
        })
      },
      { threshold: 0.5 },
    )

    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      observer.observe(aboutSection)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <Image
              src="/trainer.jpg"
              alt="About us"
              width={600}
              height={500}
              quality={100}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl">
              <div className="text-center">
                <div className="text-3xl font-bold">{animatedStats[1]}+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <Button
                size="lg"
                className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-full p-6 group"
              >
                <Play className="h-8 w-8 text-white group-hover:scale-110 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="font-serif font-bold text-4xl sm:text-5xl text-foreground mb-6">
                LEARN MORE
                <span className="text-primary"> ABOUT US</span>
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Our main aim and priority is to help you learn new exercises, techniques and training methods to meet
                your weight-loss, muscle building, heart health or sports performance goals. We provide personalized
                training programs designed specifically for your fitness journey.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Professional certified trainers",
                  "State-of-the-art equipment",
                  "Personalized workout plans",
                  "Nutritional guidance included",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
              >
                READ MORE
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="bg-primary/10 p-3 rounded-full w-fit mx-auto mb-3">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="font-bold text-2xl text-foreground">
                    {animatedStats[index]}
                    {stat.suffix}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-muted p-6 rounded-lg">
              <div className="flex items-center mb-3">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-muted-foreground italic mb-3">{testimonials[currentTestimonial].content}</p>
              <div className="text-sm">
                <div className="font-semibold text-foreground">{testimonials[currentTestimonial].name}</div>
                <div className="text-muted-foreground">{testimonials[currentTestimonial].role}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
