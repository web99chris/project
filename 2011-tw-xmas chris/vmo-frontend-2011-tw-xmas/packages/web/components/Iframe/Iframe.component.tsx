import React, { useEffect } from 'react';

const Iframe: React.FC<{ src: string }> = ({ src }) => {
  useEffect(() => {
    const frame = document.querySelector('#frame') as HTMLElement;
    frame.style.overflow = 'hidden';
    window.addEventListener('message', e => {
      if (e.data.size) {
        frame.style.height = `${e.data.size.height}px`;
      }
    });
    return () => window.removeEventListener('message', () => {});
  }, []);

  return (
    <iframe
      id="frame"
      src={src}
      frameBorder="0"
      width="100%"
      scrolling="no"
      title="event description"
    />
  );
};

export default Iframe;
