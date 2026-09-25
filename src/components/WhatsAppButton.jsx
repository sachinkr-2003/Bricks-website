import React from 'react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/0000000000" // Replace with your actual WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-blue-600 text-white w-14 h-14 rounded-full shadow-[0_8px_30px_rgba(37,99,235,0.4)] hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer"
      title="Chat on WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.665-2.059-.177-.298-.018-.46.13-.606.135-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01a1.08 1.08 0 0 0-.787.371c-.298.322-1.14 1.114-1.14 2.716 0 1.602 1.168 3.153 1.33 3.37.163.223 2.299 3.511 5.568 4.931 2.235.965 2.912 1.087 3.882.915.706-.126 2.164-.884 2.472-1.737.307-.852.307-1.583.214-1.737-.093-.153-.346-.247-.643-.397z" />
        <path d="M12.015 2.003L12 2A10 10 0 0 0 2 12c0 1.77.464 3.493 1.345 5.02L2 22l5.127-1.312A9.97 9.97 0 0 0 12 22a10 10 0 0 0 10-10A10 10 0 0 0 12.015 2.004zM12 20a8 8 0 0 1-4.084-1.117l-.293-.174-3.036.776.81-2.923-.191-.303A8 8 0 1 1 12 20z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
