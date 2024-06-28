import React, { useEffect, useState } from 'react';
import upArrow from '../assets/up-arrow.png';



export default function BackToTop() {
    const [showScrollButton, setShowScrollButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show the scroll-to-top button when user scrolls down 400px
            if (window.pageYOffset > 200) {
                setShowScrollButton(true);
            } else {
                setShowScrollButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'  // Smooth scroll animation
        });
    };

    return (
        <div>

            {showScrollButton && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-4 right-4 text-white px-4 py-2 rounded-lg z-10"
                >
                    <img src={upArrow} className='w-10' alt="" />
                </button>
            )}
        </div>
    )
}