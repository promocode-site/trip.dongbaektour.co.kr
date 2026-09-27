// 업데이트 내역 · 구조화 데이터 날짜 — 배포하는 날 lastUpdated와 dateModified만 바꾸면 된다.
// (사이트맵 메인 lastmod는 public/sitemap.xml 에서 같은 날짜로 맞춘다)
export const lastUpdated = "2026-09-27"; // 화면의 "최종 업데이트"
export const dateModified = "2026-09-27T17:46:00+09:00";
export const datePublished = "2026-04-07T17:30:48+09:00";

export const heading = "트립닷컴 쿠폰 업데이트 내역";
export const accent = "#2A72E5";
export const siteUrl = "https://trip.dongbaektour.co.kr/";
export const publisher = { "@type": "Organization", name: "트립닷컴 쿠폰", url: siteUrl };

export type UpdateLogEntry = { date: string; text: string };
export const entries: UpdateLogEntry[] = [
  {
    "date": "2026-09-01",
    "text": "토스페이 TOSSF05·TOSSH05 예약 9월 30일·이륙/숙박 10월 31일까지로 연장, 항공권 3% 기본 할인코드·신한 SOL·우리카드·네이버 웨일 할인 9월 30일까지로 연장"
  },
  {
    "date": "2026-08-04",
    "text": "토스페이 TOSSF05·TOSSH05, 항공권 기본 할인코드, 신한 SOL·우리카드·네이버 웨일 할인 8월 31일까지로 연장, 신한카드(일반) 기간 2026년 12월 31일까지로 수정"
  },
  {
    "date": "2026-07-02",
    "text": "항공권 기본 할인코드와 신한 SOL TRAVEL·우리카드·네이버 웨일 할인 예약 기간 7월 30일까지로 연장"
  },
  {
    "date": "2026-06-01",
    "text": "토스페이 항공권 5% TOSSF05·호텔 5% TOSSH05 할인코드 추가(최대 6만원), 항공권 기본 할인코드·신한 SOL TRAVEL 할인 6월 30일까지로 연장"
  },
  {
    "date": "2026-04-25",
    "text": "항공권 기본 할인코드와 신한 SOL TRAVEL 카드 할인 예약 기간 5월 31일까지로 연장"
  }
];

// 메인 WebPage 구조화 데이터에 넣을 날짜·발행처
export const pageDates = { datePublished, dateModified, publisher };
