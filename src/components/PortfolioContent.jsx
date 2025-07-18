import React, { useRef, useEffect } from 'react';

function PortfolioContent({ onScroll }) {
  const contentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
        const progress = scrollTop / (scrollHeight - clientHeight);
        onScroll(progress);
      }
    };

    const currentRef = contentRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', handleScroll);
      }
    };
  }, [onScroll]);

  return (
    <div className="portfolio-overlay-content flex-col-center" ref={contentRef}>
      <div className="portfolio-main-content">
      </div>

      <div className="portfolio-main-content">
      </div>

      <div className="portfolio-main-content">
      </div>
      
      <div className="portfolio-footer">
        <div>qwer2435@naver.com</div>
        <div>01040199816</div>
      </div>
    </div>
  );
}

export default PortfolioContent;