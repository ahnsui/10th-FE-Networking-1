const newsBar = () => {
  const newsBar1 = document.querySelector(".newsBar1");
  newsBar1.innerHTML = "";
  const newsBar2 = document.querySelector(".newsBar2");
  newsBar2.innerHTML = "";

  const rollingNewsList = [
    {
      id: 0,
      company: "연합뉴스",
      title: "[속보] 與최고위원 본경선, 김병민·김용태·김재원·민영삼",
    },
    {
      id: 1,
      company: "서울경제",
      title: "[1보] 김기현·안철수·천하람·황교안, 與전대 본경선 진출",
    },
    { id: 2, company: "이데일리", title: "노바백스 백신 2월중순부터 접종" },
    {
      id: 3,
      company: "헤럴드경제",
      title: "얼어붙은 투심에…현대엔지니어링 상장 철회",
    },
    {
      id: 4,
      company: "아시아경제",
      title: "공법변경 구조검토 요구, 현산 측이 묵살했다",
    },
  ];

  for (let i = 0; i < 5; i++) {
    const rollingNews = document.createElement("li");

    const newsCompany = document.createElement("a");
    newsCompany.id = "newsCompany";
    newsCompany.href = "#";
    newsCompany.innerHTML = `${rollingNewsList[i].company}`;

    const newsBarTitle = document.createElement("a");
    newsBarTitle.id = "newsBarTitle";
    newsBarTitle.href = "#";
    newsBarTitle.innerHTML = `${rollingNewsList[i].title}`;

    rollingNews.append(newsCompany, newsBarTitle);
    if (i === 0) {
      rollingNews.className = "current";
    } else if (i === 1) {
      rollingNews.className = "next";
    } else if (i === 4) {
      rollingNews.className = "prev";
    } else {
      rollingNews.className = "";
    }
    newsBar1.appendChild(rollingNews);
  }

  var interval = window.setInterval(rollingCallback, 5000);

  // 마우스 호버 시 롤링 멈춤
  document
    .querySelector(".newsBarWrapper")
    .addEventListener("mouseover", function () {
      window.clearInterval(interval);
    });

  // 마우스 떼면 다시 롤링
  document
    .querySelector(".newsBarWrapper")
    .addEventListener("mouseout", function () {
      interval = window.setInterval(rollingCallback, 5000);
    });
};

// DOMContentLoaded 이벤트 리스너로 newsBar 실행
document.addEventListener("DOMContentLoaded", newsBar);

function rollingCallback() {
  // .prev 클래스 제거
  document.querySelector(".newsBarWrapper .prev").classList.remove("prev");

  // .current 제거 -> .prev 추가
  let current = document.querySelector(".newsBarWrapper .current");
  current.classList.remove("current");
  current.classList.add("prev");

  // .next 제거-> .current 추가
  let next = document.querySelector(".newsBarWrapper .next");
  next.classList.remove("next");
  next.classList.add("current");

  // 다음 요소 업데이트
  if (next.nextElementSibling === null) {
    document
      .querySelector(".newsBarWrapper ul li:first-child")
      .classList.add("next");
  } else {
    next.nextElementSibling.classList.add("next");
  }
}

export default newsBar;
