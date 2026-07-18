import { useCallback, useEffect, useRef, useState } from 'react';

import Icon from 'components/ui/Icon';

const HorizontalCarousel = ({ id, label, children }) => {
  const trackRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateControls = useCallback(() => {
    const track = trackRef.current;

    if (!track) return;

    const maxScrollLeft = track.scrollWidth - track.clientWidth;
    setCanScrollLeft(track.scrollLeft > 4);
    setCanScrollRight(track.scrollLeft < maxScrollLeft - 4);
  }, []);

  useEffect(() => {
    const track = trackRef.current;

    if (!track) return undefined;

    updateControls();
    track.addEventListener('scroll', updateControls, { passive: true });
    window.addEventListener('resize', updateControls);

    return () => {
      track.removeEventListener('scroll', updateControls);
      window.removeEventListener('resize', updateControls);
    };
  }, [updateControls]);

  const scroll = (direction) => {
    const track = trackRef.current;

    if (!track) return;

    const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    track.scrollBy({
      left: direction * Math.max(track.clientWidth * 0.9, 280),
      behavior: reduceMotion ? 'auto' : 'smooth',
    });
  };

  return (
    <div className="carousel">
      <div className="carousel-toolbar">
        <p className="carousel-hint">Faites glisser pour découvrir la suite</p>
        <div className="carousel-controls" aria-label={`Navigation du carrousel ${label}`}>
          <button
            type="button"
            className="carousel-button"
            aria-label="Afficher les éléments précédents"
            aria-controls={id}
            disabled={!canScrollLeft}
            onClick={() => scroll(-1)}
          >
            <Icon name="chevronLeft" />
          </button>
          <button
            type="button"
            className="carousel-button"
            aria-label="Afficher les éléments suivants"
            aria-controls={id}
            disabled={!canScrollRight}
            onClick={() => scroll(1)}
          >
            <Icon name="chevronRight" />
          </button>
        </div>
      </div>
      <div id={id} ref={trackRef} className="carousel-viewport" aria-label={label} tabIndex="0">
        {children}
      </div>
    </div>
  );
};

export default HorizontalCarousel;
