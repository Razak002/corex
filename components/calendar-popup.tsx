"use client"

import * as React from "react"
import { Calendar, Clock, MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "react-toastify";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface WorkoutSession {
  id: string
  title: string
  time: string
  duration: string
  instructor: string
  location: string
  spots: number
  maxSpots: number
}

const upcomingSessions: WorkoutSession[] = [
  {
    id: "1",
    title: "Morning HIIT",
    time: "07:00 AM",
    duration: "45 min",
    instructor: "Sarah Johnson",
    location: "Studio A",
    spots: 8,
    maxSpots: 12,
  },
  {
    id: "2",
    title: "Strength Training",
    time: "09:30 AM",
    duration: "60 min",
    instructor: "Mike Chen",
    location: "Weight Room",
    spots: 5,
    maxSpots: 8,
  },
  {
    id: "3",
    title: "Yoga Flow",
    time: "06:00 PM",
    duration: "75 min",
    instructor: "Emma Davis",
    location: "Studio B",
    spots: 10,
    maxSpots: 15,
  },
]

export function CalendarPopup() {
  const [selectedDate, setSelectedDate] = React.useState(new Date())

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const notify = () => {
    toast.success("You have successfully booked!");

  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="cursor-pointer gap-2 hover:bg-primary hover:text-white transition-colors bg-transparent"
        >
          <Calendar className="h-4 w-4" />
          Book Session
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            Book Your Workout Session
          </DialogTitle>
          <DialogDescription>Choose from our available sessions for {formatDate(selectedDate)}</DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {upcomingSessions.map((session) => (
            <Card key={session.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{session.title}</CardTitle>
                    <CardDescription className="flex items-center gap-4 mt-1">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {session.time}
                      </span>
                      <span>{session.duration}</span>
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Available Spots</div>
                    <div className="font-semibold text-primary">
                      {session.maxSpots - session.spots}/{session.maxSpots}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Users className="h-3 w-3" />
                      Instructor: {session.instructor}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      {session.location}
                    </div>
                  </div>
                  <Button
                    onClick={notify}
                    size="sm"
                    disabled={session.spots >= session.maxSpots}
                    className="cursor-pointer bg-primary hover:bg-primary/90"
                  >
                    {session.spots >= session.maxSpots ? "Full" : "Book Now"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-6 p-4 bg-muted rounded-lg">
          <h4 className="font-semibold mb-2">Booking Information</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li>• Sessions can be cancelled up to 2 hours before start time</li>
            <li>• First-time visitors get a complimentary session</li>
            <li>• Bring your own water bottle and towel</li>
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  )
}
