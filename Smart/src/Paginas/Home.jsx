import React, { useEffect, useState } from 'react';

export function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    'https://img.freepik.com/fotos-gratis/respingo-colorido-abstrato-3d-background-generativo-ai-background_60438-2509.jpg?size=626&ext=jpg&ga=GA1.1.1518270500.1717545600&semt=sph',
    'https://png.pngtree.com/thumb_back/fh260/background/20230408/pngtree-powder-smoke-colorful-background-image_2164096.jpg',
    'https://png.pngtree.com/thumb_back/fh260/background/20230412/pngtree-colorful-abstract-ocean-waves-background-image_2357907.jpg'
  ];
  const delay = 3000;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, delay);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="slideshow-container">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={index === currentIndex ? 'slide active' : 'slide'}
        >
          <img src={slide} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}
