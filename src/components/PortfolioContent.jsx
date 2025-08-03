import React, { useRef, useEffect, useState, useCallback } from 'react';

function PortfolioContent({ onScroll }) {
  let contentRef = useRef(null);
  let [scrollPos, setScrollPos] = useState(0);
  let itemRefs = useRef([]);

  let setRef = useCallback((node) => {
    if (node) {
      if (!itemRefs.current.includes(node)) {
        itemRefs.current.push(node);
      }
    }
  }, []);

  useEffect(() => {
    console.log('Refs 콜백 함수로 찾은 p 태그들:', itemRefs.current);
    itemRefs.current.forEach((p, index) => {
      p.style.border = `2px solid ${index % 2 === 0 ? 'purple' : 'orange'}`;
    });
    
    return () => {
      itemRefs.current = [];
    };
  }, []);

  useEffect(() => {
    let handleScroll = () => {
      if (contentRef.current) {
        let { scrollTop, scrollHeight, clientHeight } = contentRef.current;
        let progress = scrollTop / (scrollHeight - clientHeight);
        onScroll(progress);
      }
    };

    let currentRef = contentRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('scroll', handleScroll);
      }
    };
  }, [onScroll]);

  let handleScroll = (event) => {
    setScrollPos(event.target.scrollTop);
    console.log('스크롤 발생! 현재 위치:', event.target.scrollTop);

    itemRefs.current.forEach((item,i) => {
      console.log(item.offsetTop)
      if(scrollPos == item.offsetTop){
        console.log(item," active");
        item.classList.add('active');
        itemRefs.current[i-1].classList.remove('active');
      }
    })
  };

  let imageCount = 11;
  let images = Array.from({ length: imageCount }, (_, i) => i + 1);

  return (
    <div className="portfolio-overlay-content flex-col-center" ref={contentRef} onScroll={handleScroll}>
      <div className="portfolio-main-content flex-between introduce active">
        <div className="introduce-text">
          <p class="jump-text">
            <span>안</span>
            <span>녕</span>
            <span>하</span>
            <span>세</span>
            <span>요</span>
          </p>
          <p>아이디어를 현실로 만드는 것에 열정적인 프론트엔드 개발자 정영교입니다.</p>
          <p>
            탄탄한 기술력으로 견고한 UI를 구축하며,
            매 순간 문제를 해결하고 새로운 지식을 습득하는 과정에서 희열을 느낍니다.
          </p>
        </div>
        <img src="/myprofile-clean.png" alt="myProfile" />
      </div>

      <div className="portfolio-main-content ability" ref={setRef}>
        {
        // /react_practice/my-portfolio/public/langImg/9.png
          images.map((num) => {
            let imagePath = `/langImg/${num}.png`;
            return (
              <div key={num}>
                <img src={imagePath} alt={`Image ${num}`} />
                <p>{imagePath}</p> {/* 주소도 같이 출력 */}
              </div>
            );
          })
        }
      </div>

      {/* <div className="portfolio-main-content project" ref={setRef}>
      </div> */}
      
      <div className="portfolio-main-content contact" ref={setRef}>
        <div>qwer2435@naver.com</div>
        <div>01040199816</div>
      </div>
    </div>
  );
}

export default PortfolioContent;