import { useEffect } from 'react';

const SoulAssistiveDevices = () => {
  useEffect(() => {
    // Redirect to the Soul Assistive Devices app
    window.location.href = '/public/soul-assistive-devices/index.html';
  }, []);

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-cream-50 via-cream-100 to-cream-200 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cream-600 mx-auto mb-4"></div>
        <p className="text-lg text-cream-700">Redirecting to Soul Assistive Devices...</p>
      </div>
    </div>
  );
};

export default SoulAssistiveDevices;