'use client'
import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export const Scroll = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    setIsVisible(window.pageYOffset > 300)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        type="button"
        onClick={scrollToTop}
        className={classNames(
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0',
          'bg-primary',
          'backdrop-blur-md shadow-lg shadow-gray-500/30',
          'transition-all duration-300 ease-in-out transform hover:scale-110',
          'focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2',
          'inline-flex items-center justify-center rounded-full p-3 text-white'
        )}
      >
        <ArrowUp className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  )
}
