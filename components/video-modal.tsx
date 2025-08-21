"use client"

import { useState, useRef, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X, Volume2, VolumeX, Play, Pause } from "lucide-react"

interface VideoModalProps {
    isOpen: boolean
    onClose: () => void
}

export default function VideoModal({ isOpen, onClose }: VideoModalProps) {
    const [isMuted, setIsMuted] = useState(true)
    const [isPlaying, setIsPlaying] = useState(false)
    const [hasError, setHasError] = useState(false)
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        if (isOpen && videoRef.current && !hasError) {
            videoRef.current.play().catch(() => {
                console.log("[v0] Video autoplay failed, user interaction required")
                setIsPlaying(false)
            })
        }
    }, [isOpen, hasError])

    const handlePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause()
            } else {
                videoRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    const handleVideoError = () => {
        console.log("[v0] Video failed to load, showing YouTube fallback")
        setHasError(true)
    }

    const handleVideoPlay = () => setIsPlaying(true)
    const handleVideoPause = () => setIsPlaying(false)
    const handleVideoCanPlay = () => setIsPlaying(false)
    const handleVideoWaiting = () => setIsPlaying(true)

    const videoSources = [
        {
            src: "https://res.cloudinary.com/dcdoqivsy/video/upload/v1755722051/20_Minute_Full_Body_Cardio_HIIT_Workout_NO_REPEAT_kcmobc.mp4",
            type: "video/mp4"
        },

        {
            src: "https://res.cloudinary.com/dcdoqivsy/video/upload/q_auto,w_1280/v1755722051/20_Minute_Full_Body_Cardio_HIIT_Workout_NO_REPEAT_kcmobc.mp4",
            type: "video/mp4"
        }
    ]


    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-5xl w-[95vw] max-h-[90vh] p-0 bg-black border-0 overflow-hidden">
                <DialogHeader className="absolute top-2 right-2 z-10 sm:top-4 sm:right-4">
                    <DialogTitle>Corex Demo</DialogTitle>
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={onClose}
                        className="text-white hover:bg-white/20 rounded-full h-8 w-8 sm:h-10 sm:w-10"
                    >
                        <X className="h-4 w-4 sm:h-6 sm:w-6" />
                    </Button>
                </DialogHeader>

                <div className="relative aspect-video w-full h-full">
                    {!hasError ? (
                        <>
                            <video
                                ref={videoRef}
                                className="w-full h-full object-cover"
                                muted={isMuted}
                                loop
                                playsInline
                                preload="metadata" // Better for performance
                                poster="https://res.cloudinary.com/dcdoqivsy/video/upload/so_0/v1755722051/20_Minute_Full_Body_Cardio_HIIT_Workout_NO_REPEAT_kcmobc.jpg" // Auto-generated thumbnail
                                onError={handleVideoError}
                                onPlay={handleVideoPlay}
                                onPause={handleVideoPause}
                                onCanPlay={handleVideoCanPlay}
                                onWaiting={handleVideoWaiting}
                                onLoadStart={() => setIsPlaying(true)}
                                onLoadedData={() => console.log("Video loaded successfully")}
                            >
                                {videoSources.map((source, index) => (
                                    <source key={index} src={source.src} type={source.type} />
                                ))}
                                Your browser does not support the video tag.
                            </video>


                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={handlePlayPause}
                                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-700 text-white hover:bg-white/20 rounded-full h-12 w-12 sm:h-16 sm:w-16"
                            >
                                {isPlaying ? <Pause className="h-6 w-6 sm:h-8 sm:w-8" /> : <Play className="h-6 w-6 sm:h-8 sm:w-8" />}
                            </Button>
                        </>
                    ) : (
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/watch?v=enYITYwvPAQ"
                            title="Fitness Demo Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    )}

                    {!hasError && (
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsMuted(!isMuted)}
                            className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 text-white hover:bg-white/20 rounded-full h-8 w-8 sm:h-10 sm:w-10"
                        >
                            {isMuted ? <VolumeX className="h-4 w-4 sm:h-6 sm:w-6" /> : <Volume2 className="h-4 w-4 sm:h-6 sm:w-6" />}
                        </Button>
                    )}

                    <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 text-white">
                        <h3 className="text-sm sm:text-lg font-semibold mb-1">Professional Fitness Training</h3>
                        <p className="text-xs sm:text-sm text-gray-300">
                            {hasError ? "Watch our training methods on YouTube" : "Experience our world-class training methods"}
                        </p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
