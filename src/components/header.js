import { getDate } from "../util/getDate.js";

const header = () => {
  const iconTitleWrapper = document.getElementById("iconTitleWrapper");
  const dateWrapper = document.getElementById("dateWrapper");

  const imgIcon = document.createElement("img");
  imgIcon.src = "src/assets/icon/newspaper.png";
  imgIcon.alt = "Newspaper Icon";
  iconTitleWrapper.appendChild(imgIcon);

  const title = document.createElement("h2");
  title.textContent = "뉴스스탠드";
  iconTitleWrapper.appendChild(title);

  const todaysDate = document.createElement("h3");
  todaysDate.textContent = getDate(new Date());
  dateWrapper.appendChild(todaysDate);
};

export default header;
