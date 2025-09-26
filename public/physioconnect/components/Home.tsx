import React from 'react';
import { Doctor } from '../types';

// Mock data for doctors
const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Evelyn Reed',
    specialty: 'Sports Injury Specialist',
    bio: 'Specializes in rehabilitating sports-related injuries and improving athletic performance. Your primary chat contact.',
    avatar: `https://i.pravatar.cc/150?u=dr.evelyn.reed`,
  },
  {
    id: '2',
    name: 'Dr. Alex Carter',
    specialty: 'Post-Surgical Rehab',
    bio: 'Expert in post-operative recovery, helping patients regain mobility and strength after surgery.',
    avatar: `https://i.pravatar.cc/150?u=dr.alex.carter`,
  },
  {
    id: '3',
    name: 'Dr. Sofia Chen',
    specialty: 'Pediatric Physiotherapy',
    bio: 'Dedicated to helping children with developmental and mobility challenges through gentle, effective therapies.',
    avatar: `https://i.pravatar.cc/150?u=dr.sofia.chen`,
  },
   {
    id: '4',
    name: 'Dr. Marcus Thorne',
    specialty: 'Geriatric & Mobility',
    bio: 'Focuses on improving the quality of life for seniors by addressing age-related mobility and pain issues.',
    avatar: `https://i.pravatar.cc/150?u=dr.marcus.thorne`,
  },
];

interface HomeProps {
  onSelectDoctor: (doctor: Doctor) => void;
}

export const Home: React.FC<HomeProps> = ({ onSelectDoctor }) => {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-[#5D504A]">Our Specialists</h2>
        <p className="mt-2 text-lg text-[#8D7B72]">Choose a physiologist to start your booking.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {doctors.map((doctor) => (
          <div
            key={doctor.id}
            onClick={() => onSelectDoctor(doctor)}
            className="bg-white/70 rounded-xl p-6 flex items-center gap-6 cursor-pointer transition-all duration-300 hover:shadow-xl hover:scale-105 border-2 border-transparent hover:border-[#D4BBAA]"
          >
            <img 
              src={doctor.avatar} 
              alt={doctor.name} 
              className="w-24 h-24 rounded-full object-cover border-4 border-[#E6D4C1]" 
            />
            <div>
              <h3 className="text-xl font-bold text-[#5D504A]">{doctor.name}</h3>
              <p className="text-md font-semibold text-[#D4BBAA]">{doctor.specialty}</p>
              <p className="text-sm text-[#8D7B72] mt-2">{doctor.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
