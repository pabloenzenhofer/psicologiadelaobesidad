import React, { useRef } from 'react';

const IntroCarousel = () => {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -trackRef.current.offsetWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: trackRef.current.offsetWidth, behavior: 'smooth' });
    }
  };

  return (
    <section id="intro" style={{ padding: '4rem 1rem', backgroundColor: '#fcfcfc', textAlign: 'center' }}>
      <h2 style={{ marginBottom: '2rem', fontSize: '2rem', color: '#333', fontWeight: 700 }}>Descubrí cómo trabajo</h2>
      
      <div style={{ position: 'relative', maxWidth: '600px', margin: '0 auto' }}>
        <button 
          onClick={scrollLeft} 
          aria-label="Anterior"
          style={{
            position: 'absolute', top: '50%', left: '-20px', transform: 'translateY(-50%)',
            background: 'white', border: 'none', borderRadius: '50%', width: '40px', height: '40px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.15)', cursor: 'pointer', zIndex: 10, fontSize: '1.2rem',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}
        >
          &#10094;
        </button>

        <div 
          ref={trackRef}
          style={{
            display: 'flex', overflowX: 'auto', scrollSnapType: 'x mandatory', scrollBehavior: 'smooth',
            gap: '1rem', paddingBottom: '1rem', scrollbarWidth: 'none', msOverflowStyle: 'none'
          }}
        >
          <div style={{ flex: '0 0 100%', scrollSnapAlign: 'center', display: 'flex', justifyContent: 'center' }}>
            <img src="/assets/1-presentacion.png" alt="Presentación" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 8px 16px rgba(0,0,0,0.1)', objectFit: 'contain' }} />
          </div>
          <div style={{ flex: '0 0 100%', scrollSnapAlign: 'center', display: 'flex', justifyContent: 'center' }}>
            <img src="/assets/2-abordaje.png" alt="Abordaje" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 8px 16px rgba(0,0,0,0.1)', objectFit: 'contain' }} />
          </div>
          <div style={{ flex: '0 0 100%', scrollSnapAlign: 'center', display: 'flex', justifyContent: 'center' }}>
            <img src="/assets/3-modalidades-valores.png" alt="Modalidades y valores" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 8px 16px rgba(0,0,0,0.1)', objectFit: 'contain' }} />
          </div>
        </div>

        <button 
          onClick={scrollRight} 
          aria-label="Siguiente"
          style={{
            position: 'absolute', top: '50%', right: '-20px', transform: 'translateY(-50%)',
            background: 'white', border: 'none', borderRadius: '50%', width: '40px', height: '40px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.15)', cursor: 'pointer', zIndex: 10, fontSize: '1.2rem',
            display: 'flex', alignItems: 'center', justifyContent: 'center'
          }}
        >
          &#10095;
        </button>
      </div>
      
      {/* Hide scrollbar pseudo-element for Chrome/Safari using a style tag */}
      <style>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default IntroCarousel;
