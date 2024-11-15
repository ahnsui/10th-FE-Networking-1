const contentHeader = () => {
  const tabWrapper = document.getElementById("tabWrapper");
  const viewerWrapper = document.getElementById("viewerWrapper");
  const allNewsList = document.querySelector(".newsListWrapper.all");
  const myNewsList = document.querySelector(".newsListWrapper.my");

  console.log(allNewsList);
  console.log(myNewsList);

  let menuList = [
    {
      id: 0,
      isClicked: true,
      title: "전체 언론사",
    },
    { id: 1, isClicked: false, title: "내가 구독한 언론사" },
  ];

  const render = () => {
    tabWrapper.innerHTML = "";

    menuList.map((menu, idx) => {
      const tab = document.createElement("button");
      tab.innerHTML = menu.title;
      tab.className = menu.isClicked ? "tab active" : "tab";
      tab.id = menu.id;
      tab.onclick = onClickMenuBtn;
      tabWrapper.appendChild(tab);
    });
  };

  const onClickMenuBtn = (e) => {
    const selectedId = Number(e.target.id);
    if (selectedId === 0) {
      myNewsList.classList.remove("active");
      allNewsList.classList.add("active");
    } else {
      myNewsList.classList.add("active");
      allNewsList.classList.remove("active");
    }
    menuList = menuList.map((list) => ({
      ...list,
      isClicked: selectedId === list.id,
    }));
    render();
  };

  render();

  const viewer1 = document.createElement("img");
  viewer1.src = "src/assets/icon/listview.png";
  viewer1.alt = "listview Icon";

  const viewer2 = document.createElement("img");
  viewer2.src = "src/assets/icon/gridview.png";
  viewer2.alt = "gridview Icon";
  viewerWrapper.append(viewer1, viewer2);
};

export default contentHeader;
