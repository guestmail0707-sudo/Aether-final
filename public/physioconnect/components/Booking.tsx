import React, { useState, useMemo } from 'react';
import { CheckCircleIcon } from './Icons';
import { Doctor } from '../types';

const availableTimeSlots = [
  '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '02:00 PM', '02:30 PM',
  '03:00 PM', '03:30 PM', '04:00 PM',
];

interface BookingProps {
  doctor: Doctor | null;
}

export const Booking: React.FC<BookingProps> = ({ doctor }) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isBooked, setIsBooked] = useState(false);

  const daysOfWeek = useMemo(() => {
    const startOfWeek = new Date();
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay() + 1); // Start on Monday
    return Array.from({ length: 5 }, (_, i) => {
      const date = new Date(startOfWeek);
      date.setDate(date.getDate() + i);
      return date;
    });
  }, []);

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setSelectedTime(null);
    setIsBooked(false);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      setIsBooked(true);
    }
  };
  
  if (!doctor) {
    return (
      <div className="text-center p-8 animate-fade-in">
        <h3 className="text-2xl font-semibold text-[#5D504A]">No Doctor Selected</h3>
        <p className="text-lg text-[#8D7B72] mt-2">
          Please go back to the Home page and select a specialist to book an appointment.
        </p>
      </div>
    );
  }

  if (isBooked) {
    return (
      <div className="text-center p-8 transition-all duration-500 ease-in-out transform">
        <CheckCircleIcon />
        <h3 className="text-2xl font-semibold mt-4 text-[#5D504A]">Appointment Confirmed!</h3>
        <p className="text-lg text-[#8D7B72] mt-2">
          Your appointment with <span className="font-semibold text-[#5D504A]">{doctor.name}</span> is scheduled for <span className="font-semibold text-[#5D504A]">{selectedTime}</span> on <span className="font-semibold text-[#5D504A]">{selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</span>.
        </p>
        <button 
          onClick={() => { setIsBooked(false); setSelectedTime(null); }}
          className="mt-6 bg-[#D4BBAA] text-white px-6 py-2 rounded-lg hover:bg-[#c9a994] transition-colors duration-300 font-semibold"
        >
          Book Another Appointment
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h3 className="text-2xl font-semibold mb-4 text-[#5D504A]">
          Select a Date for your appointment with <span className="text-[#D4BBAA]">{doctor.name}</span>
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          {daysOfWeek.map(day => (
            <button
              key={day.toISOString()}
              onClick={() => handleDateSelect(day)}
              className={`p-4 rounded-lg text-center transition-all duration-300 border-2 ${
                selectedDate.toDateString() === day.toDateString()
                  ? 'bg-[#E6D4C1] border-[#D4BBAA] text-[#5D504A] shadow-md'
                  : 'bg-white/50 border-transparent hover:border-[#E6D4C1] hover:bg-white'
              }`}
            >
              <p className="font-bold text-lg">{day.toLocaleDateString('en-US', { weekday: 'short' })}</p>
              <p className="text-2xl font-light">{day.getDate()}</p>
            </button>
          ))}
        </div>
      </div>

      {selectedDate && (
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-[#5D504A]">Select a Time</h3>
          <p className="text-[#8D7B72] mb-4">Available slots for {selectedDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })}</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
            {availableTimeSlots.map(time => (
              <button
                key={time}
                onClick={() => handleTimeSelect(time)}
                className={`p-3 rounded-lg transition-colors duration-300 border-2 ${
                  selectedTime === time
                    ? 'bg-[#E6D4C1] border-[#D4BBAA] text-[#5D504A] font-semibold shadow-md'
                    : 'bg-white/50 border-transparent hover:border-[#E6D4C1] hover:bg-white text-[#8D7B72]'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}

      {selectedTime && (
        <div className="text-center pt-4">
          <button 
            onClick={handleBooking}
            className="bg-[#D4BBAA] text-white px-8 py-3 rounded-lg hover:bg-[#c9a994] transition-colors duration-300 text-lg font-semibold shadow-lg hover:shadow-xl"
          >
            Confirm Booking for {selectedTime}
          </button>
        </div>
      )}
    </div>
  );
};