// src/pages/ProductPage.js
import React from 'react';
import { useParams } from 'react-router-dom'; // useParams 훅 불러오기

function ProductPage() {
  let { productId } = useParams(); // URL에서 ':productId' 값을 가져와요!
  console.log(productId);
  return (
    <div>
      <h2>🛍️ 상품 상세 페이지입니다!</h2>
      <p>선택하신 상품 ID: {productId}</p>
      <p>이 상품에 대한 상세 정보를 여기에 표시할 수 있어요.</p>
    </div>
  );
}

export default ProductPage;