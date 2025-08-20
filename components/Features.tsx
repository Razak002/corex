"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dumbbell, Target, Zap, Heart, ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    icon: Dumbbell,
    title: "Weight Lifting",
    description:
      "Professional weight training equipment and expert guidance for strength building.",
    details:
      "Access to Olympic barbells, dumbbells up to 150lbs, and specialized strength machines with certified trainers.",
    price: "$29/month",
  },
  {
    icon: Target,
    title: "Specific Muscle",
    description:
      "Targeted workouts designed to focus on specific muscle groups for optimal results.",
    details:
      "Customized workout plans targeting chest, back, legs, arms, and core with progressive overload techniques.",
    price: "$35/month",
  },
  {
    icon: Zap,
    title: "Flex Your Muscle",
    description:
      "Flexibility and mobility training to enhance your overall fitness performance.",
    details:
      "Dynamic stretching, yoga classes, and mobility sessions to improve range of motion and prevent injuries.",
    price: "$25/month",
  },
  {
    icon: Heart,
    title: "Cardio Exercise",
    description:
      "High-intensity cardio workouts to improve cardiovascular health and endurance.",
    details:
      "HIIT classes, treadmills, ellipticals, and group cardio sessions for maximum calorie burn.",
    price: "$30/month",
  },
];

export default function Features() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  return (
    <section id="features" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif font-bold text-4xl sm:text-5xl text-foreground mb-4">
            FEATURES
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive fitness programs designed to help you
            achieve your goals
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              <Card
                className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card border-border cursor-pointer ${
                  expandedCard === index ? "ring-2 ring-primary" : ""
                }`}
                onClick={() =>
                  setExpandedCard(expandedCard === index ? null : index)
                }
              >
                <CardContent className="p-8 text-center">
                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="bg-primary/10 p-4 rounded-full group-hover:bg-primary transition-colors"
                    >
                      <feature.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif font-semibold text-xl text-card-foreground mb-4">
                    {feature.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {feature.description}
                  </p>

                  {/* Expandable Details with AnimatePresence */}
                  <AnimatePresence>
                    {expandedCard === index && (
                      <motion.div
                        key="details"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="mt-4 p-4 bg-primary/5 rounded-lg border border-primary/20"
                      >
                        <p className="text-sm text-muted-foreground mb-3">
                          {feature.details}
                        </p>
                        <div className="flex flex-col  items-center justify-center">
                          <span className="font-bold text-primary text-lg">
                            {feature.price}
                          </span>
                          <Button
                            size="sm"
                            className="bg-primary hover:bg-primary/90"
                          >
                            Get Started
                            <ArrowRight className="ml-1 h-3 w-3" />
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="mt-4 text-xs text-muted-foreground">
                    Click to {expandedCard === index ? "collapse" : "expand"}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
