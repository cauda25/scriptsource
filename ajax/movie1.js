const txtYear = document.querySelector("#txtYear");
const selMon = document.querySelector("#selMon");
const selDay = document.querySelector("#selDay");

init = () => {
  // 오늘 날짜 구한 뒤 구한 날짜를 화면에 출력
  const now = new Date();
  const year = now.getFullYear();
  let month = now.getMonth() + 1;
  let day = now.getDate() - 1;

  txtYear.value = year;
  if (month < 10) {
    month = "0" + month;
  }

  if (day < 10) {
    day = "0" + day;
  }
  selMon.value = month;
  selDay.value = day;
};

init();

getMovie = () => {
  // 년,월,일 가져오기
  const year = txtYear.value;
  let month = selMon.value;
  let day = selDay.value;
  // url
  let url =
    "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=82ca741a2844c5c180a208137bb92bd7&targetDt=";

  // url + 년월일
  url += year + month + day;
  //console.log(url);

  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error("주소 확인");
      return response.json();
    })
    .then((data) => {
      //화면 출력
      console.log(data.boxOfficeResult.dailyBoxOfficeList);
      const movies = data.boxOfficeResult.dailyBoxOfficeList;
      let str = "";
      movies.forEach((element) => {
        // console.log("순위 : ", element.rank);
        // console.log("증감 : ", element.rankInten);
        // console.log("이름 : ", element.movieNm);
        str += `<p>${element.rank} 위( `;
        let rankInten = parseInt(element.rankInten);
        if (rankInten > 0) {
          str += `▲ `;
        } else if (rankInten < 0) {
          str += `▼ `;
        } else {
          str += ` `;
        }

        str += `${rankInten} )`;
        str += ` : ${element.movieNm}</p>`;
      });
      document.querySelector(".movie").innerHTML = str;
    })
    .catch((error) => console.log(error));
};
document.querySelector(".btn-secondary").addEventListener("click", getMovie);
