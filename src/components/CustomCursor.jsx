import { useEffect, useRef } from 'react';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const outline = outlineRef.current;

    let mouseX = 0, mouseY = 0;
    let outlineX = 0, outlineY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    const animateOutline = () => {
      outlineX += (mouseX - outlineX) * 0.12;
      outlineY += (mouseY - outlineY) * 0.12;
      outline.style.left = `${outlineX}px`;
      outline.style.top = `${outlineY}px`;
      requestAnimationFrame(animateOutline);
    };

    const handleMouseEnterInteractive = () => {
      dot.style.transform = 'translate(-50%, -50%) scale(2)';
      outline.style.transform = 'translate(-50%, -50%) scale(1.5)';
      outline.style.borderColor = 'rgba(0, 212, 255, 0.8)';
    };

    const handleMouseLeaveInteractive = () => {
      dot.style.transform = 'translate(-50%, -50%) scale(1)';
      outline.style.transform = 'translate(-50%, -50%) scale(1)';
      outline.style.borderColor = 'rgba(108, 99, 255, 0.6)';
    };

    document.addEventListener('mousemove', handleMouseMove);
    animateOutline();

    const interactiveElements = document.querySelectorAll('a, button, .project-card, input, textarea');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnterInteractive);
      el.addEventListener('mouseleave', handleMouseLeaveInteractive);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
      <div
        ref={outlineRef}
        className="cursor-outline"
        style={{ transform: 'translate(-50%, -50%)' }}
      />
    </>
  );
};

export default CustomCursor;
