import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <footer className="py-10 flex justify-end text-sm font-semibold px-4 dark:bg-gray-800 dark:text-white">
      <p>Copyright© {year} Amber Wang. All rights reserved.</p>
    </footer>
  );
}

export default Footer