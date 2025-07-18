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
      <div className="portfolio-main-content flex-between introduce">
        <div className='introduce-text'>
          <p></p>
          <p></p>
          <p></p>
        </div>
        <img src="/myprofile-clean.png" alt="myProfile" />
      </div>

      <div className="portfolio-main-content ability">
        언어: HTML, CSS, JavaScript, TypeScript
        프레임워크/라이브러리: React, Jquery
        스타일링: Bootstap, Styled Components, Sass, responsive
        버전 관리: GitHub, GitLab
        디자인 툴 : Figma, Zeplin
      </div>

      <div className="portfolio-main-content project">

      </div>
      
      <div className="portfolio-main-content">
        <div>qwer2435@naver.com</div>
        <div>01040199816</div>
      </div>
    </div>
  );
}

export default PortfolioContent;