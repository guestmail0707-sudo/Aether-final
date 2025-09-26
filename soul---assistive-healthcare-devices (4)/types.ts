// FIX: Added React import to resolve namespace error.
import React from 'react';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
}

export interface Category {
    id: string;
    name: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface CartItem extends Product {
  quantity: number;
}

// Yellow SDK Types
export interface YellowConfig {
  apiKey: string;
}

export interface YellowPaymentDetails {
  amount: number;
  currency: string;
  onSuccess: (response: { transactionId: string }) => void;
  onError: (error: { message: string }) => void;
  onClose?: () => void;
}

export interface YellowSDK {
  init: (config: YellowConfig) => void;
  pay: (details: YellowPaymentDetails) => void;
}

declare global {
  interface Window {
    Yellow?: YellowSDK;
  }
}