import  { useState, useEffect } from 'react';
import './upButton.css'; // Create and import the CSS file for styling

const UpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="up-button">
      {isVisible && (
        <button onClick={scrollToTop} className="scroll-to-top">
          ↑
        </button>
      )}
    </div>
  );
};

export default UpButton;
