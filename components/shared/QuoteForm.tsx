"use client";

import { FormEvent, useState } from "react";
import { Calendar, Clock, ChevronDown } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export function QuoteForm() {
  const [parkingType, setParkingType] = useState<"Hourly" | "Overnight" | "Monthly">("Hourly");
  const [terminal, setTerminal] = useState("NAIA Terminal 3");
  const [duration, setDuration] = useState("1 Day");
  const [checkInDate, setCheckInDate] = useState("2026-05-18");
  const [checkInTime, setCheckInTime] = useState("10:00 AM");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const reservationData = {
      parkingType,
      terminal,
      duration,
      checkInDate,
      checkInTime,
    };

    console.log("Parking reservation submission:", reservationData);

    toast.success("Reservation request received!", {
      description: `Booked ${parkingType} parking at ${terminal} for ${duration} starting ${checkInDate} at ${checkInTime}.`,
    });
  }

  return (
    <div className="w-full max-w-[420px] overflow-hidden rounded-2xl bg-white shadow-2xl p-6 sm:p-8">
      <div className="text-center pb-5">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Reserve Your Parking</h2>
        <p className="mt-1 text-xs font-semibold text-gray-400 tracking-wide uppercase">
          Quick &bull; Easy &bull; Guaranteed
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Parking Type Selection */}
        <div className="space-y-1.5">
          <Label className="text-xs font-bold text-gray-700">Parking Type</Label>
          <div className="grid grid-cols-3 gap-2">
            {(["Hourly", "Overnight", "Monthly"] as const).map((type) => {
              const isSelected = parkingType === type;
              return (
                <button
                  key={type}
                  type="button"
                  onClick={() => setParkingType(type)}
                  className={cn(
                    "h-10 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer",
                    isSelected
                      ? "bg-[#FC681E] text-white shadow-sm"
                      : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                  )}
                >
                  {type}
                </button>
              );
            })}
          </div>
        </div>

        {/* Terminal Selection */}
        <div className="space-y-1.5">
          <Label className="text-xs font-bold text-gray-700">Terminal</Label>
          <div className="relative">
            <select
              value={terminal}
              onChange={(e) => setTerminal(e.target.value)}
              className="w-full h-11 pl-4 pr-10 rounded-lg bg-gray-100 text-gray-900 border-none outline-none text-xs font-bold focus:ring-2 focus:ring-orange-500 appearance-none cursor-pointer"
            >
              <option value="NAIA Terminal 1">NAIA Terminal 1</option>
              <option value="NAIA Terminal 2">NAIA Terminal 2</option>
              <option value="NAIA Terminal 3">NAIA Terminal 3</option>
              <option value="NAIA Terminal 4">NAIA Terminal 4</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 size-4 -translate-y-1/2 text-gray-500 pointer-events-none" />
          </div>
        </div>

        {/* Duration Selection */}
        <div className="space-y-1.5">
          <Label className="text-xs font-bold text-gray-700">Duration</Label>
          <div className="relative">
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full h-11 pl-4 pr-10 rounded-lg bg-gray-100 text-gray-900 border-none outline-none text-xs font-bold focus:ring-2 focus:ring-orange-500 appearance-none cursor-pointer"
            >
              <option value="1 Day">1 Day</option>
              <option value="2 Days">2 Days</option>
              <option value="3 Days">3 Days</option>
              <option value="5 Days">5 Days</option>
              <option value="1 Week">1 Week</option>
              <option value="2 Weeks">2 Weeks</option>
              <option value="1 Month">1 Month</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 size-4 -translate-y-1/2 text-gray-500 pointer-events-none" />
          </div>
        </div>

        {/* Check-in Date and Time */}
        <div className="space-y-1.5">
          <Label className="text-xs font-bold text-gray-700">Check-in Date</Label>
          <div className="grid grid-cols-2 gap-3">
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-500 pointer-events-none" />
              <input
                type="date"
                value={checkInDate}
                onChange={(e) => setCheckInDate(e.target.value)}
                className="w-full h-11 pl-9 pr-2 rounded-lg bg-gray-100 text-gray-900 border-none outline-none text-xs font-bold focus:ring-2 focus:ring-orange-500 cursor-pointer"
              />
            </div>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-500 pointer-events-none" />
              <select
                value={checkInTime}
                onChange={(e) => setCheckInTime(e.target.value)}
                className="w-full h-11 pl-9 pr-8 rounded-lg bg-gray-100 text-gray-900 border-none outline-none text-xs font-bold focus:ring-2 focus:ring-orange-500 appearance-none cursor-pointer"
              >
                <option value="08:00 AM">08:00 AM</option>
                <option value="09:00 AM">09:00 AM</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="11:00 AM">11:00 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="01:00 PM">01:00 PM</option>
                <option value="02:00 PM">02:00 PM</option>
                <option value="03:00 PM">03:00 PM</option>
                <option value="04:00 PM">04:00 PM</option>
                <option value="05:00 PM">05:00 PM</option>
                <option value="06:00 PM">06:00 PM</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 size-4 -translate-y-1/2 text-gray-500 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="h-12 w-full rounded-lg bg-[#FC681E] text-sm font-bold text-white hover:scale-105 shadow-md transition-colors cursor-pointer mt-4 animate-none"
        >
          Reserve My Slot
        </Button>
      </form>
    </div>
  );
}

