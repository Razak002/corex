"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dumbbell, Target, Zap, Heart, ArrowRight } from "lucide-react"
import { useState } from "react"

const features = [
  {
    icon: Dumbbell,
    title: "Weight Lifting",
    description: "Professional weight training equipment and expert guidance for strength building.",
    details:
      "Access to Olympic barbells, dumbbells up to 150lbs, and specialized strength machines with certified trainers.",
    price: "$29/month",
  },
  {
    icon: Target,
    title: "Specific Muscle",
    description: "Targeted workouts designed to focus on specific muscle groups for optimal results.",
    details:
      "Customized workout plans targeting chest, back, legs, arms, and core with progressive overload techniques.",
    price: "$35/month",
  },
  {
    icon: Zap,
    title: "Flex Your Muscle",
    description: "Flexibility and mobility training to enhance your overall fitness performance.",
    details: "Dynamic stretching, yoga classes, and mobility sessions to improve range of motion and prevent injuries.",
    price: "$25/month",
  },
  {
    icon: Heart,
    title: "Cardio Exercise",
    description: "High-intensity cardio workouts to improve cardiovascular health and endurance.",
    details: "HIIT classes, treadmills, ellipticals, and group cardio sessions for maximum calorie burn.",
    price: "$30/month",
  },
]

export default function Features() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  return (
    <section id="features" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-4xl sm:text-5xl text-foreground mb-4">FEATURES</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive fitness programs designed to help you achieve your goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card border-border cursor-pointer ${
                expandedCard === index ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => setExpandedCard(expandedCard === index ? null : index)}
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <feature.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                </div>

                <h3 className="font-serif font-semibold text-xl text-card-foreground mb-4">{feature.title}</h3>

                <p className="text-muted-foreground leading-relaxed mb-4">{feature.description}</p>

                {expandedCard === index && (
                  <div className="mt-4 p-4 bg-primary/5 rounded-lg border border-primary/20 animate-fade-in-up">
                    <p className="text-sm text-muted-foreground mb-3">{feature.details}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-primary text-lg">{feature.price}</span>
                      <Button size="sm" className="bg-primary hover:bg-primary/90">
                        Get Started
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                )}

                <div className="mt-4 text-xs text-muted-foreground">
                  Click to {expandedCard === index ? "collapse" : "expand"}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
