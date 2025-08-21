import Header from "@/components/Header"
import Navbar from "@/components/Navbar"
import Features from "@/components/Features"
import About from "@/components/About"
import Offer from "@/components/Offer"
import Footer from "@/components/Footer"
import { Scroll } from "@/components/ScrollTop"
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";


export default function Home() {
  return (
    <main className="w-full h-full">
      <Navbar />
      <Header />
      <Features />
      <About />
      <Offer />
      <Scroll />
      <Footer />
      <ToastContainer />
    </main>
  )
}
