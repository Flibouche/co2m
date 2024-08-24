import { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const toggleVisibility = () => {
        if (window.scrollY > 600) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        isVisible && (
            <div className="fixed bottom-6 right-8">
                <button onClick={scrollToTop} className="group border-2 border-white px-4 py-3 rounded-full transition-opacity hover:bg-white">
                    <img src="icons/caret-up-solid.svg" alt="Scroll To Top Button" width={12} className="filter invert brightness-0 group-hover:filter-none transition duration-500 ease-in-out group-hover:animate-bounce" />
                </button>
            </div>
        )
    );
};

export default ScrollToTopButton;