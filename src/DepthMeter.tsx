import { useState, useEffect } from 'react';

/**
 * DepthMeter Component
 * A vertical scroll-tracking indicator that shows depth from -70 ft to 36,000 ft.
 * Updated to use bounding rect calculations for compatibility with flex layouts.
 */
const DepthMeter = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [depth, setDepth] = useState(0);
  
  const START_DEPTH = 100;
  const END_DEPTH = 36037;

  useEffect(() => {
    let requestRef;

    const updateScroll = () => {
      const mainBody = document.getElementById('mainBody');
      const root = document.documentElement;
      
      let percentage = 0;

      if (mainBody) {
        // Get the bounding box of the main content
        const rect = mainBody.getBoundingClientRect();
        const winHeight = window.innerHeight;
        
        // rect.top is how far the top of the content is from the top of the viewport
        const scrolledAmount = Math.abs(rect.top);
        
        // Total distance the element can actually move up
        const totalScrollableHeight = rect.height - winHeight;

        if (totalScrollableHeight > 0) {
          percentage = scrolledAmount / totalScrollableHeight;
        }
      } else {
        // Fallback for standard window scroll if mainBody isn't found
        const scrollTop = window.pageYOffset || root.scrollTop || 0;
        const totalScrollable = root.scrollHeight - window.innerHeight;
        percentage = totalScrollable > 0 ? scrollTop / totalScrollable : 0;
      }

      // Clamp percentage between 0 and 1
      const clampedPercentage = Math.max(0, Math.min(1, percentage));
      
      // Calculate depth based on the offset:
      // When percentage is 0, depth is START_DEPTH (-70)
      // When percentage is 1, depth is END_DEPTH (36000)
      const calculatedDepth = START_DEPTH + (clampedPercentage * (END_DEPTH - START_DEPTH));
      
      setScrollPercent(clampedPercentage * 100);
      setDepth(Math.round(calculatedDepth));

      requestRef = requestAnimationFrame(updateScroll);
    };

    requestRef = requestAnimationFrame(updateScroll);

    return () => cancelAnimationFrame(requestRef);
  }, []);

  return (
    <div 
      style={{
        position: 'fixed',
        left: '20px',
        top: '40px',
        bottom: '40px',
        width: '40px',
        zIndex: 9999,
        display: 'flex',
        justifyContent: 'center',
        pointerEvents: 'none'
      }}
    >
      {/* Vertical Track Line */}
      <div 
        style={{
          position: 'absolute',
          height: '100%',
          width: '4px',
          backgroundColor: 'white',
          borderRadius: '99px'
        }}
      />

      {/* Moving Indicator Group */}
      <div 
        className="group"
        style={{ 
          position: 'absolute',
          top: `${scrollPercent}%`, 
          transform: 'translateY(-50%)',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          pointerEvents: 'auto',
          cursor: 'pointer',
          transition: 'top 0.1s ease-out' 
        }}
      >
        {/* Arrowhead SVG - Light Grey */}
        <svg 
          width="min(25px, 10vw)" 
          preserveAspectRatio='1' 
          viewBox="0 0 20 20"
          style={{ overflow: 'visible' }}
        >
          <polygon 
            points="2,2 18,10 2,18" 
            fill="#D1D5DB" 
            stroke="#540101" 
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>

        {/* Depth Tooltip */}
        <div 
          className="opacity-0 group-hover:opacity-100"
          style={{
            marginLeft: '10px',
            padding: '4px 10px',
            backgroundColor: 'rgba(15, 23, 42, 0.95)',
            color: 'white',
            fontSize: '12px',
            fontFamily: 'monospace',
            borderRadius: '4px',
            border: '1px solid rgba(51, 65, 85, 1)',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)',
            whiteSpace: 'nowrap',
            transition: 'opacity 0.2s',
            pointerEvents: 'none'
          }}
        >
          {depth.toLocaleString()} ft
        </div>
      </div>
    </div>
  );
};

export default DepthMeter;