const newsBar = () => {
  const newsBar1 = document.querySelector(".newsBar1");
  const newsBar2 = document.querySelector(".newsBar2");

  let rollingNewsList1 = [];
  let rollingNewsList2 = [];

  fetch("/src/data/rollingNews1.json")
    .then((response) => response.json())
    .then((json) => {
      rollingNewsList1 = json;
      console.log("뉴스리스트 1: ", rollingNewsList1);
      renderNewsBar(newsBar1, rollingNewsList1);
    })
    .catch((err) => {
      console.error("Error:", err);
    });

  fetch("/src/data/rollingNews2.json")
    .then((response) => response.json())
    .then((json) => {
      rollingNewsList2 = json;
      console.log("뉴스리스트 2: ", rollingNewsList2);
      renderNewsBar(newsBar2, rollingNewsList2);
    })
    .catch((err) => {
      console.error("Error:", err);
    });

  function renderNewsBar(newsBar, rollingNewsList) {
    newsBar.innerHTML = "";

    for (let i = 0; i < rollingNewsList.length; i++) {
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
      } else if (i === rollingNewsList.length - 1) {
        rollingNews.className = "prev";
      } else {
        rollingNews.className = "";
      }
      newsBar.appendChild(rollingNews);
    }
  }

  let interval1 = setInterval(() => rollingCallback(newsBar1), 5000);

  let interval2;
  setTimeout(() => {
    interval2 = setInterval(() => rollingCallback(newsBar2), 5000);
  }, 1000);

  function stopRolling(newsBarNum) {
    if (newsBarNum === 1) {
      clearInterval(interval1);
    } else {
      clearInterval(interval2);
    }
  }

  function startRolling(newsBarNum) {
    if (newsBarNum === 1) {
      interval1 = setInterval(() => rollingCallback(newsBar1), 5000);
    } else {
      interval2 = setInterval(() => rollingCallback(newsBar2), 5000);
    }
  }

  // 마우스 호버 시 롤링 멈춤
  newsBar1.addEventListener("mouseover", () => stopRolling(1));
  newsBar2.addEventListener("mouseover", () => stopRolling(2));

  //마우스 떼면 다시 롤링
  newsBar1.addEventListener("mouseout", () => startRolling(1));
  newsBar2.addEventListener("mouseout", () => startRolling(2));
};

function rollingCallback(newsBar) {
  // .prev 클래스 제거
  const prev = newsBar.querySelector(".prev");
  if (prev) prev.classList.remove("prev");

  // .current 제거 -> .prev 추가
  const current = newsBar.querySelector(".current");
  current.classList.remove("current");
  current.classList.add("prev");

  // .next 제거-> .current 추가
  const next = newsBar.querySelector(".next");
  next.classList.remove("next");
  next.classList.add("current");

  // 다음 요소 업데이트
  if (next.nextElementSibling === null) {
    newsBar.querySelector("ul li:first-child").classList.add("next");
  } else {
    next.nextElementSibling.classList.add("next");
  }
}

export default newsBar;
