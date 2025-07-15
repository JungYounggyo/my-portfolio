// src/pages/AboutPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate 훅 불러오기

function AboutPage() {
  const navigate = useNavigate(); // useNavigate 훅 사용

  const goToHome = () => {
    navigate('/'); // '/' 경로로 이동 (홈 페이지)
  };

  return (
    <div>
      <h2>✨ 소개 페이지입니다!</h2>
      <p>우리에 대해 더 알아보세요.</p>
      <button onClick={goToHome}>홈으로 돌아가기</button> {/* 버튼 클릭 시 페이지 이동 */}
    </div>
  );
}

export default AboutPage;