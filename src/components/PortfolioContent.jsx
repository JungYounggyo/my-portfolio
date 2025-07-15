// src/components/PortfolioContent.jsx
import React, { useRef, useEffect } from 'react';

function PortfolioContent({ onScroll }) {
  const contentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = contentRef.current;
        // 스크롤 진행도 계산 (0 ~ 1)
        const progress = scrollTop / (scrollHeight - clientHeight);
        onScroll(progress); // App.jsx로 스크롤 진행도 전달
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
    <div className="portfolio-overlay-content" ref={contentRef}>
      {/* 여기에 친구의 실제 포트폴리오 내용을 작성합니다. */}
      {/* 스크롤을 위해 충분한 양의 콘텐츠를 넣어주세요. */}
      
      <h2 className="portfolio-section-title">👋 안녕하세요! 프론트엔드 개발자 [친구 이름]입니다!</h2>
      <p>이 포트폴리오는 슈퍼마리오 테마로 제작되었으며, 스크롤에 따라 마리오가 움직이는 인터랙티브한 경험을 제공합니다.</p>
      
      <h3 className="portfolio-subsection-title">✨ 자기소개</h3>
      <p>저의 강점과 개발 철학을 소개합니다. 저는 사용자 경험을 최우선으로 생각하며, 깔끔하고 효율적인 코드를 작성하는 것을 목표로 합니다. 새로운 기술을 배우고 적용하는 것을 즐기며, 끊임없이 발전하는 개발자가 되기 위해 노력하고 있습니다.</p>
      <p>다양한 프로젝트를 통해 프론트엔드 개발의 전반적인 과정을 경험했으며, 특히 반응형 웹 구현과 성능 최적화에 강점을 가지고 있습니다. 협업을 중요하게 생각하며, 팀원들과의 원활한 소통을 통해 시너지를 창출하는 데 기여합니다.</p>
      
      <h3 className="portfolio-subsection-title">🛠️ 기술 스택</h3>
      <ul className="portfolio-list">
        <li className="portfolio-list-item">HTML5, CSS3, JavaScript(ES6+)</li>
        <li>React, TypeScript, Next.js (학습 중)</li>
        <li>반응형 웹, 웹 표준/접근성, 크로스 브라우징</li>
        <li>Git, VS Code</li>
        <li>UI/UX 디자인 기본 이해</li>
      </ul>

      <h3 className="portfolio-subsection-title">🚀 프로젝트</h3>
      {/* 각 프로젝트별 상세 내용을 여기에 배치합니다. */}
      {/* 각 프로젝트 섹션은 충분히 길게 만들어서 스크롤이 많이 생기도록 합니다. */}
      <div className="project-card">
        <h4>프로젝트 1: [프로젝트명]</h4>
        <p>이 프로젝트는 어떤 목표로, 어떤 기술을 사용하여 개발되었습니다. [친구의 역할]을 맡아 [구체적인 기여 내용]을 통해 [어떤 성과]를 달성했습니다.</p>
        <p>주요 기능: [기능 1], [기능 2], [기능 3]</p>
        <p>사용 기술: [기술 1], [기술 2], [기술 3]</p>
        <div className="project-placeholder">
          프로젝트 스크린샷/데모 영상 영역
        </div>
        <p>회고: 이 프로젝트를 통해 [배운 점]과 [어려웠던 점], 그리고 [해결 과정]을 경험하며 성장했습니다.</p>
      </div>

      <div className="project-card">
        <h4>프로젝트 2: [프로젝트명]</h4>
        <p>이 프로젝트는 [친구의 역할]을 맡아 [어떤 문제]를 해결하고 [어떤 가치]를 창출했습니다.</p>
        <p>주요 기능: [기능 1], [기능 2], [기능 3]</p>
        <p>사용 기술: [기술 1], [기술 2], [기술 3]</p>
        <div className="project-placeholder">
          프로젝트 스크린샷/데모 영상 영역
        </div>
        <p>회고: [어떤 인사이트]를 얻었고, [다음 프로젝트에 어떻게 적용할지] 고민하게 되었습니다.</p>
      </div>

      <div style={{ minHeight: '80vh', border: '1px solid #ddd', padding: '20px', marginBottom: '40px', backgroundColor: '#fff' }}>
        <h4>프로젝트 3: [프로젝트명]</h4>
        <p>세 번째 프로젝트입니다. [친구의 역할]을 통해 [어떤 기여]를 했는지 설명합니다.</p>
        <p>주요 기능: [기능 1], [기능 2], [기능 3]</p>
        <p>사용 기술: [기술 1], [기술 2], [기술 3]</p>
        <div className="project-placeholder">
          프로젝트 스크린샷/데모 영상 영역
        </div>
        <p>회고: [어떤 어려움]을 극복하고 [어떤 성과]를 이루었는지 작성합니다.</p>
      </div>
      
      <h3>📞 연락처</h3>
      <p>이메일: your.email@example.com</p>
      <p>GitHub: github.com/your-username</p>
      <p>LinkedIn: linkedin.com/in/your-profile</p>
      
      <p className="portfolio-footer-text">
        저의 포트폴리오를 방문해주셔서 감사합니다! 💖
      </p>
    </div>
  );
}

export default PortfolioContent;