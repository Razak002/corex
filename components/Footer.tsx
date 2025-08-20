"use client"

import type React from "react"

import { Dumbbell, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function Footer() {
    const [email, setEmail] = useState("")
    const [isSubscribed, setIsSubscribed] = useState(false)

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault()
        if (email) {
            setIsSubscribed(true)
            setEmail("")
            setTimeout(() => setIsSubscribed(false), 3000)
        }
    }

    return (
        <footer className="bg-slate-900 dark:bg-slate-950 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="bg-primary p-2 rounded-lg">
                                <Dumbbell className="h-6 w-6 text-primary-foreground" />
                            </div>
                            <span className="font-serif font-bold text-xl">CoreX</span>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                            Transform your body and mind with our professional fitness programs. Your journey to a healthier lifestyle
                            starts here.
                        </p>
                        <div className="flex space-x-4">
                            {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-800 hover:bg-primary p-2 rounded-lg cursor-pointer transition-all duration-300 hover:scale-110"
                                >
                                    <Icon className="h-5 w-5" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-serif font-semibold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            {[
                                { name: "Home", id: "hero" },
                                { name: "Features", id: "features" },
                                { name: "About", id: "about" },
                                { name: "Offer", id: "offer" },
                                { name: "Contact", id: "footer" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <button
                                        onClick={() => {
                                            const element = document.getElementById(link.id)
                                            if (element) {
                                                element.scrollIntoView({ behavior: "smooth" })
                                            }
                                        }}
                                        className="text-gray-300 hover:text-primary transition-colors duration-300 text-left"
                                    >
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-serif font-semibold text-lg mb-4">Services</h3>
                        <ul className="space-y-2">
                            {["Personal Training", "Group Classes", "Nutrition Coaching", "Cardio Training", "Weight Lifting"].map(
                                (service) => (
                                    <li key={service}>
                                        <a href="#" className="text-gray-300 hover:text-primary transition-colors duration-300">
                                            {service}
                                        </a>
                                    </li>
                                ),
                            )}
                        </ul>
                    </div>

                    {/* Contact & Newsletter */}
                    <div>
                        <h3 className="font-serif font-semibold text-lg mb-4">Contact Info</h3>
                        <div className="space-y-3 mb-6">
                            <div className="flex items-center space-x-3">
                                <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
                                <span className="text-gray-300">25 Fitness Street, FCT Abuja</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                                <span className="text-gray-300">+234 8140165624</span>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                                <span className="text-gray-300">devabdulrazak@gmail.com</span>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-2">Newsletter</h4>
                            <form onSubmit={handleSubscribe} className="space-y-2">
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                                />
                                <Button
                                    type="submit"
                                    size="sm"
                                    className="w-full bg-primary hover:bg-primary/90"
                                    disabled={isSubscribed}
                                >
                                    {isSubscribed ? (
                                        "Subscribed!"
                                    ) : (
                                        <>
                                            <Send className="h-4 w-4 mr-2" />
                                            Subscribe
                                        </>
                                    )}
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                    <p className="text-gray-400">© 2024 CoreX. All rights reserved. | Designed by Aliyu Abdulrazak</p>
                </div>
            </div>
        </footer>
    )
}
