import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from '../pages/home'; // 홈 페이지 컴포넌트
import AboutPage from '../pages/about'; // 소개 페이지 컴포넌트
import ProductPage from '../pages/product'; // 상품 상세 페이지 컴포넌트

function Routemanage() {
    console.log("router 실행");
    return (
        <Routes> {/* Routes 안에 모든 Route들을 정의해요 */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/product/:productId" element={<ProductPage />} />
            {/* 일치하는 경로가 없을 때 보여줄 페이지 (예: 404 Not Found) */}
            {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
    );
}
export default Routemanage;