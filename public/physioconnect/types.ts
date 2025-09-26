export interface ChatMessage {
  id: string;
  role: 'user' | 'doctor' | 'loading';
  content: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  avatar: string; // URL to image
}