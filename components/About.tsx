
"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle, Users, Award, Clock, Play, Star, X, ArrowLeft } from "lucide-react"
import Image from "next/image"
import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import CalendlyEmbed from "./CalendlyEmbed"



const stats = [
  { icon: Users, value: 500, label: "Happy Members", suffix: "+" },
  { icon: Award, value: 10, label: "Years Experience", suffix: "+" },
  { icon: Clock, value: 24, label: "Support Available", suffix: "/7" },
]

const testimonials = [
  {
    name: "Khadijat Bisallah",
    role: "Fitness Enthusiast",
    content: "Amazing trainers and equipment! I've achieved my fitness goals faster than I ever imagined.",
    rating: 5,
  },
  {
    name: "Jaafar Lucid",
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
    name: "Moshood Adeosun",
    role: "Trainer",
    content: "The personalized training programs are exactly what I needed to take my performance to the next level.",
    rating: 5,
  },
]

export default function About() {
  const [animatedStats, setAnimatedStats] = useState(stats.map(() => 0))
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [showCalendly, setShowCalendly] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const aboutSectionRef = useRef(null)

  const handleCalendlyClick = () => {
    setShowCalendly(true)
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden'
    }
  }

  const handleBackToForm = () => {
    setShowCalendly(false)
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'unset'
    }
  }

  const handleCloseModal = () => {
    setShowCalendly(false)
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'unset'
    }
  }

  const handleClickOutside = (e: { target: unknown; currentTarget: unknown }) => {
    if (e.target === e.currentTarget) {
      handleCloseModal()
    }
  }
  const animateStats = useCallback(() => {
    if (hasAnimated) return

    setHasAnimated(true)
    stats.forEach((stat, index) => {
      let current = 0
      const increment = stat.value / 60
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
      }, 50)
    })
  }, [hasAnimated])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            animateStats()
          }
        })
      },
      {
        threshold: 0.3,
        rootMargin: '50px'
      }
    )

    const currentRef = aboutSectionRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
      observer.disconnect()
    }
  }, [animateStats, hasAnimated])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    return () => {
      if (typeof document !== 'undefined') {
        document.body.style.overflow = 'unset'
      }
    }
  }, [])

  return (
    <>
      <motion.section
        ref={aboutSectionRef}
        id="about"
        className="py-12 sm:py-16 lg:py-20 bg-background"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Image */}
            <motion.div
              className="relative order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
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

              {/* Experience Badge */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-primary text-primary-foreground p-3 sm:p-4 lg:p-6 rounded-xl sm:rounded-2xl shadow-xl">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl lg:text-3xl font-bold">{animatedStats[1]}+</div>
                  <div className="text-xs sm:text-sm">Years Experience</div>
                </div>
              </div>

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Button
                  size="lg"
                  onClick={handleCalendlyClick}
                  className="cursor-pointer bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-full p-4 sm:p-6 group transition-all duration-300"
                >
                  <Play className="cursor-pointer h-6 w-6 sm:h-8 sm:w-8 text-white group-hover:scale-110 transition-transform" />
                </Button>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              className="space-y-6 lg:space-y-8 order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div>
                <h2 className="font-serif font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4 lg:mb-6 leading-tight">
                  LEARN MORE
                  <span className="text-primary"> ABOUT US</span>
                </h2>

                <p className="text-base sm:text-lg leading-relaxed mb-6 lg:mb-8">
                  Our main aim and priority is to help you learn new exercises, techniques and training methods to meet
                  your weight-loss, muscle building, heart health or sports performance goals. We provide personalized
                  training programs designed specifically for your fitness journey.
                </p>

                <div className="space-y-3 sm:space-y-4 mb-6 lg:mb-8">
                  {[
                    "Professional certified trainers",
                    "State-of-the-art equipment",
                    "Personalized workout plans",
                    "Nutritional guidance included",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                      <span className="text-sm sm:text-base text-foreground">{item}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button
                    size="lg"
                    className="cursor-pointer w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-6 lg:px-8 py-3 lg:py-4 text-sm sm:text-base lg:text-lg font-semibold rounded-lg transition-all duration-300"
                  >
                    READ MORE
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={handleCalendlyClick}
                    className="cursor-pointer w-full sm:w-auto px-6 lg:px-8 py-3 lg:py-4 text-sm sm:text-base lg:text-lg font-semibold rounded-lg transition-all duration-300"
                  >
                    BOOK SESSION
                  </Button>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 pt-6 lg:pt-8 border-t border-border">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-primary/10 p-2 sm:p-3 rounded-full w-fit mx-auto mb-2 sm:mb-3">
                      <stat.icon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-primary" />
                    </div>
                    <div className="font-bold text-lg sm:text-xl lg:text-2xl text-foreground">
                      {animatedStats[index]}
                      {stat.suffix}
                    </div>
                    <div className="text-xs sm:text-sm text-muted-foreground px-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Testimonial */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  className="bg-muted p-4 sm:p-6 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center mb-3">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground italic mb-3 leading-relaxed">
                    {testimonials[currentTestimonial].content}
                  </p>
                  <div className="text-xs sm:text-sm">
                    <div className="font-semibold text-foreground">{testimonials[currentTestimonial].name}</div>
                    <div className="text-muted-foreground">{testimonials[currentTestimonial].role}</div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Calendly Modal */}
      <AnimatePresence>
        {showCalendly && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-2 sm:p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClickOutside}
          >
            <motion.div
              className="bg-white rounded-lg shadow-lg relative w-full max-w-sm sm:max-w-2xl lg:max-w-4xl h-[85vh] sm:h-[90vh] max-h-[600px] sm:max-h-[700px]"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center p-3 sm:p-4 border-b bg-white rounded-t-lg">
                  <button
                    onClick={handleBackToForm}
                    className="text-primary flex items-center hover:text-primary/80 transition-colors text-sm sm:text-base"
                  >
                    <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 mr-1" />
                    Back to form
                  </button>
                  <button
                    onClick={handleCloseModal}
                    className="text-gray-500 hover:text-gray-700 transition-colors p-1"
                  >
                    <X className="h-4 w-4 sm:h-5 sm:w-5" />
                  </button>
                </div>
                <div className="flex-grow overflow-hidden">
                  <CalendlyEmbed
                    url="https://calendly.com/aliyuabdulrazaks539/30min"
                    styles={{
                      height: "100%",
                      border: "none",
                      overflow: "hidden",
                    }}
                    className="rounded-b-lg"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}