import Header from "@/components/Header"
import Navbar from "@/components/Navbar"
import Features from "@/components/Features"
import About from "@/components/About"
import Offer from "@/components/Offer"
import Footer from "@/components/Footer"
import { Scroll } from "@/components/ScrollTop"

export default function Home() {
  return (
    <main className="min-h-screen cursor-pointer">
      <Navbar />
      <Header />
      <Features />
      <About />
      <Offer />
      <Scroll />
      <Footer />
    </main>
  )
}
