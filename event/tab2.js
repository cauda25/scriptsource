// tab1.js 개선

const tb1 = document.querySelectorAll(".tab-button");

// show 클래스명을 부착할 요소 찾아오기
const d1 = document.querySelectorAll(".tab-content");

tb1.forEach((li, idx) => {
  li.addEventListener("click", (e) => {
    // show 클래스명 모든 요소 제거
    // orange 클래스명 모든 요소 제거
    tb1.forEach((item) => item.classList.remove("orange"));
    d1.forEach((item) => item.classList.remove("show"));
    // 현재 이벤트가 일어난 대상의 ornage 클래스면 부착
    e.target.classList.add("orange");

    // d1 인덱스를 이용해서 show 부착
    d1[idx].classList.add("show");
  });
});
