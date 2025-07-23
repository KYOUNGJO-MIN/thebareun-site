
import React from "react";

export default function SeaaeinsListing() {
  return (
    <main className="max-w-4xl mx-auto p-6 text-gray-800">
      <section className="mb-10">
        <h1 className="text-4xl font-bold mb-2">세아아인스빌딩 | 강남 대치동 핵심 자산 전속 매각</h1>
        <p className="text-lg text-gray-600">
          📍 서울 강남구 대치동 1000-12 | 연면적 4,221평 | 예상가 1,800억 원
        </p>
        <p className="mt-1 text-sm text-blue-600">🗓️ 전속 매각 진행 중 | 전체 명도 가능</p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">🔎 핵심 요약</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>지하철 2호선 삼성역 도보 3분 거리</li>
          <li>대지면적 634.46평, 연면적 4,221.59평, 지하4층~지상9층</li>
          <li>전용면적 약 2,160평, 자주식 주차 68대</li>
          <li>매각가: 1,800억 원</li>
          <li>전체 명도 후 인수 가능</li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">🏢 건물 개요</h2>
        <table className="w-full table-auto border border-gray-300">
          <tbody>
            {[
              ["대지면적", "634.46평 (2,097.4㎡)"],
              ["연면적", "4,221.59평 (13,955.67㎡)"],
              ["건축규모", "B4 / 9F"],
              ["준공", "2001년 9월"],
              ["주 용도", "업무시설, 교육연구시설"],
              ["용도지역", "제2종일반주거지역, 국제교류복합지구"],
              ["구조", "철골철근콘크리트조"],
              ["주차", "68대 (자주식)"],
              ["엘리베이터", "3대"],
            ].map(([label, value], idx) => (
              <tr key={idx} className="border-t">
                <td className="p-2 font-medium bg-gray-50 w-1/3">{label}</td>
                <td className="p-2">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">🌇 입지 및 개발호재</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>영동대로 복합환승센터 (GTX A/C, 위례신사선 포함)</li>
          <li>현대차 GBC 신축, 잠실 MICE 복합개발 예정</li>
          <li>GBD 내에서도 가장 높은 성장성의 구역</li>
          <li>고소득 수요가 집중된 외제차 전시장·갤러리 밀집 지역</li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">📈 가치 포인트</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>전체 명도 인수 가능 (End-user 입주 또는 통매각 재임대 최적)</li>
          <li>전용 239평 기준층 구성으로 사옥에 적합</li>
          <li>옥상 4면 옥외광고 허용으로 브랜드 마케팅 가능</li>
        </ul>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">🧭 위치 지도</h2>
        <div className="w-full h-72">
          <iframe
            src="https://maps.google.com/maps?q=서울 강남구 대치동 1000-12&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">📞 전속 문의</h2>
        <p className="mb-2">The바른중개법인</p>
        <p className="mb-1">📍 서울 강남구 강남대로 308, 랜드마크타워 18층</p>
        <p className="mb-1">📞 02-522-8285</p>
        <p className="mb-1">📧 kjy@thebareun.co.kr</p>
        <p className="text-blue-600">🌐 <a href="http://www.thebareun.com" target="_blank" rel="noopener noreferrer">www.thebareun.com</a></p>
      </section>
    </main>
  );
}
