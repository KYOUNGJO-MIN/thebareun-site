// src/pages/Listing.jsx
import React from "react";

const listings = [
  {
    id: 1,
    title: "세아아인스빌딩 매각",
    location: "서울 강남구 대치동 1000-12",
    area: "4,221.59평 / 13,955.67㎡",
    image: "/images/seaains.png", // public/images/ 에 저장
    description: "국제교류복합지구 중심, 사옥 용도 오피스 매각 건입니다.",
  },
  {
    id: 2,
    title: "역삼동 프라임 오피스",
    location: "서울 강남구 역삼동 649-1",
    area: "3,500평 / 11,570㎡",
    image: "/images/yeoksam.png",
    description: "역삼역 초역세권 프라임급 개발 유망지.",
  },
  // 추가 가능
];

export default function Listing() {
  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {listings.map((item) => (
        <div key={item.id} className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition">
          <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-800">{item.title}</h2>
            <p className="text-sm text-gray-600">{item.location}</p>
            <p className="text-sm text-gray-500">{item.area}</p>
            <p className="mt-2 text-gray-700">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
