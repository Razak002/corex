"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import VideoModal from "./video-modal"

export default function Header() {
  const [isvideoModalOpen, setIsVideoModalOpen] = useState(false)

  const scrollToFeatures = () => {
    const element = document.getElementById("features")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const openVideoModal = () => {
    setIsVideoModalOpen(true)
  }

  return (
    <>
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* <img src="/modern-professional-gym.png" alt="Fitness background" className="w-full h-full object-cover" /> */}
          <Image src={'/bg.jpg'} alt="gym" fill
            className="object-cover"
            quality={100}
            priority
            sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="font-serif font-bold text-4xl sm:text-5xl lg:text-7xl text-white mb-6 leading-tight">
              STEP UP YOUR
              <br />
              <span className="text-primary">FITNESS</span> NOW
            </h1>

            <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              Build Your Body And Fitness With Professional Touch
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={scrollToFeatures}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 animate-pulse-glow group"
              >
                JOIN US NOW
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <VideoModal isOpen={isvideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />

              <Button
                onClick={openVideoModal}
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 group bg-transparent"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                WATCH DEMO
              </Button>
            </div>
          </div>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
    </>
  )
}
