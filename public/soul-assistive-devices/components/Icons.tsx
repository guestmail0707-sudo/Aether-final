
import React from 'react';

export const LogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <defs>
            <linearGradient id="logo-gradient" x1="12" y1="2" x2="12" y2="22" gradientUnits="userSpaceOnUse">
                <stop stopColor="#16a34a"/>
                <stop offset="1" stopColor="#4ade80"/>
            </linearGradient>
        </defs>
        <path d="M8.5 10.5C8.5 12.1569 7.15685 13.5 5.5 13.5H4.5" stroke="url(#logo-gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.5 7.5V6C10.5 4.89543 9.60457 4 8.5 4H7.5C5.84315 4 4.5 5.34315 4.5 7C4.5 8.65685 5.84315 10 7.5 10C8.60457 10 9.5 9.10457 9.5 8" stroke="url(#logo-gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 2.5C5.34315 2.5 4 3.84315 4 5.5C4 7.15685 5.34315 8.5 7 8.5H7.5" stroke="url(#logo-gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.5 7.5C11.3284 7.5 12 6.82843 12 6C12 5.17157 11.3284 4.5 10.5 4.5" stroke="url(#logo-gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8.5 10.5V15.5" stroke="url(#logo-gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 15.5H11" stroke="url(#logo-gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="8.5" cy="17.5" r="1" stroke="url(#logo-gradient)" strokeWidth="1.5"/>
        <path d="M15.5 8.5H20.5" stroke="url(#logo-gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M18 8.5V4.5" stroke="url(#logo-gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="18" cy="3" r="1" stroke="url(#logo-gradient)" strokeWidth="1.5"/>
        <path d="M19.5 14.5C19.5 12.2923 17.5834 10.5 15.25 10.5C12.9166 10.5 11 12.2923 11 14.5C11 18.5385 15.25 21.5 15.25 21.5C15.25 21.5 19.5 18.5385 19.5 14.5Z" stroke="url(#logo-gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12.5 16.5L14 15L15.25 17L16.5 15L18 16.5" stroke="url(#logo-gradient)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const CartIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c.51 0 .962-.343 1.087-.835l1.82-6.823a.75.75 0 00-.543-.922l-13.5-3.857a.75.75 0 00-.955.659l-1.386 9.703a1.5 1.5 0 001.453 1.748H7.5z" />
  </svg>
);

export const XIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const TrashIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.134-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.067-2.09.921-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
    </svg>
);

export const HeadIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
);
export const EyeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.432 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
);
export const EarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" /></svg>
);
export const MouthIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6H6a6 6 0 006 6zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
);
export const ArmIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5" /></svg>
);
export const BodyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
);
export const LegIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-4.006-4.006S12.502 4.5 12 4.5c-.502 0-1.354.046-1.354.046a4.006 4.006 0 00-4.006 4.006c-.092 1.209-.138 2.43-.138 3.662a4.006 4.006 0 004.006 4.006c.356 0 .708-.02 1.054-.057a4.522 4.522 0 013.992 0c.346.037.7.057 1.054.057a4.006 4.006 0 004.006-4.006zM12 17.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" /></svg>
);
export const BrainIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.562L16.25 21.75l-.648-1.188a2.25 2.25 0 01-1.423-1.423L13.25 18.5l1.188-.648a2.25 2.25 0 011.423 1.423l.648 1.188z" /></svg>
);

export const ArrowLeftIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
    </svg>
);

export const LockIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 00-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H4.5a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
    </svg>
);

export const CheckCircleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

export const YellowIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <circle cx="12" cy="12" r="10" fill="#FFC107" />
        <text x="12" y="16" fontSize="12" fontWeight="bold" textAnchor="middle" fill="#000">Y</text>
    </svg>
);

export const CreditCardIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75v10.5A2.25 2.25 0 004.5 19.5z" />
    </svg>
);

export const PayPalIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M7.456 6.062c.307-1.12.94-2.126 2.01-2.617 1.07-.492 2.28-.492 3.35 0 1.07.49 1.704 1.496 2.01 2.618.17 1.002.255 1.94.255 2.813 0 .874-.085 1.812-.255 2.813-.307 1.12-.94 2.126-2.01 2.617-1.07.492-2.28.492-3.35 0-1.07-.49-1.704-1.496-2.01-2.618C5.22 11.688 5 10.59 5 9.42c0-1.17.22-2.288.456-3.358z" fill="#003087" />
        <path d="M10.16 6.554c.307-1.12.94-2.126 2.01-2.617C13.24 3.445 14.45 3.445 15.52 3.937c1.07.49 1.704 1.496 2.01 2.618.306 1.12.455 2.288.455 3.358 0 1.17-.15 2.238-.456 3.358-.307 1.12-.94 2.126-2.01 2.617-1.07.492-2.28.492-3.35 0-1.07-.49-1.704-1.496-2.01-2.618C9.93 11.688 9.71 10.59 9.71 9.42c0-1.17.22-2.288.456-3.358z" fill="#009cde" />
        <path d="M12.865 7.046c.307-1.12.94-2.126 2.01-2.617 1.07-.492 2.28-.492 3.35 0 1.07.49 1.704 1.496 2.01 2.618.306 1.12.455 2.288.455 3.358 0 1.17-.15 2.238-.456 3.358-.307 1.12-.94 2.126-2.01 2.617-1.07.492-2.28.492-3.35 0-1.07-.49-1.704-1.496-2.01-2.618-.234-1.12-.455-2.188-.455-3.358 0-1.17.22-2.288.456-3.358z" fill="#002f86" />
    </svg>
);

export const GooglePayIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M10.74 12.83c.41-.42.66-1 .66-1.61 0-1.23-1-2.22-2.22-2.22H6.39v7.17h2.8c1.34 0 2.42-1.08 2.42-2.42.01-.66-.24-1.27-.67-1.72h-.02z" fill="#4285F4"/>
        <path d="M17.6 10.45c0-.57-.04-1.13-.13-1.68h-4.3v3.18h2.44c-.1.5-.32.95-.65 1.32v2.05h2.64c1.55-1.42 2.45-3.51 2.45-5.87z" fill="#4285F4"/>
        <path d="M13.17 16.36c.82 0 1.5-.27 2-.73l-2.12-1.64c-.38.26-.87.41-1.4.41-1.08 0-2-.7-2.33-1.64H7.2v2.1c1.15 2.28 3.4 3.82 6 3.82z" fill="#34A853"/>
        <path d="M9.47 12.82c-.06-.18-.1-.36-.1-.56s.04-.38.1-.56V9.61H7.2c-.37.74-.58 1.57-.58 2.44s.21 1.7.58 2.44l2.27-2.07z" fill="#FBBC05"/>
        <path d="M13.17 9.17c.56 0 1.06.19 1.46.57l1.88-1.88c-1.17-1.1-2.7-1.76-4.34-1.76-2.58 0-4.85 1.54-6 3.82l2.27 2.09c.33-.94 1.25-1.64 2.33-1.64z" fill="#EA4335"/>
    </svg>
);
