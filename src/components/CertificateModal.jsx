import React from 'react'

const CertificateModal = ({ selectedCert, onClose }) => {

  return (
    <div
      className="fixed inset-0 bg-black/70 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="relative bg-white p-4 rounded-lg max-w-4xl w-auto max-h-[90vh] overflow-auto"
        onClick={(e) => e.stopPropagation()} // 防止點圖片時關閉
      >
        <img
          src={selectedCert.img}
          alt={selectedCert.title}
          className="max-w-full max-h-[80vh] h-auto w-auto rounded object-contain mx-auto"
        />
        <button
          className="absolute top-2 right-4 text-black/70 text-xl font-bold cursor-pointer px-2 border-2 rounded-lg hover:scale-105 hover:text-black"
          onClick={onClose}
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default CertificateModal