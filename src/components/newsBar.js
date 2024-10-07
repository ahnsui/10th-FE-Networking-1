const newsBar = () => {
  const newsBar1 = document.getElementById("newsBar1");
  const newsBar2 = document.getElementById("newsBar2");

  const newsCompany1 = document.createElement("div");
  newsCompany1.id = "newsCompany";
  newsCompany1.innerHTML = "연합뉴스";

  const newsCompany2 = document.createElement("div");
  newsCompany2.id = "newsCompany";
  newsCompany2.innerHTML = "연합뉴스";

  const newsBarTitle1 = document.createElement("div");
  newsBarTitle1.id = "newsBarTitle";
  newsBarTitle1.innerHTML =
    "[1보] 김기현·안철수·천하람·황교안, 與전대 본경선 진출";

  const newsBarTitle2 = document.createElement("div");
  newsBarTitle2.id = "newsBarTitle";
  newsBarTitle2.innerHTML =
    "[속보] 與최고위원 본경선, 김병민·김용태·김재원·민영삼";

  newsBar1.append(newsCompany1, newsBarTitle1);
  newsBar2.append(newsCompany2, newsBarTitle2);
};

export default newsBar;
