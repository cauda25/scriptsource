// tab-button 클리시 짝 맞춰서 tab-content 보여주기

const tb1 = document.querySelector(".list li:nth-child(1)");
const tb2 = document.querySelector(".list li:nth-child(2)");
const tb3 = document.querySelector(".list li:nth-child(3)");

// show 클래스명을 부착할 요소 찾아오기
const d1 = document.querySelector(".container div:nth-child(2)");
const d2 = document.querySelector(".container div:nth-child(3)");
const d3 = document.querySelector(".container div:nth-child(4)");

tb1.addEventListener("click", () => {
  d1.classList.add("show");
  d2.classList.remove("show");
  d3.classList.remove("show");

  // orange 클래스명 부착과 제거
  tb1.classList.add("orange");
  tb2.classList.remove("orange");
  tb3.classList.remove("orange");
});
tb2.addEventListener("click", () => {
  d2.classList.add("show");
  d1.classList.remove("show");
  d3.classList.remove("show");

  tb2.classList.add("orange");
  tb1.classList.remove("orange");
  tb3.classList.remove("orange");
});
tb3.addEventListener("click", () => {
  d3.classList.add("show");
  d2.classList.remove("show");
  d1.classList.remove("show");

  tb3.classList.add("orange");
  tb2.classList.remove("orange");
  tb1.classList.remove("orange");
});
