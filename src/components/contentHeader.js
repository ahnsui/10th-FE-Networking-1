const contentHeader = () => {
  const tabWrapper = document.getElementById("tabWrapper");
  const viewerWrapper = document.getElementById("viewerWrapper");

  const tab1 = document.createElement("button");
  tab1.innerHTML = "전체 언론사";

  const tab2 = document.createElement("button");
  tab2.innerHTML = "내가 구독한 언론사";
  tabWrapper.append(tab1, tab2);

  const viewer1 = document.createElement("img");
  viewer1.src = "src/assets/icon/listview.png";
  viewer1.alt = "listview Icon";

  const viewer2 = document.createElement("img");
  viewer2.src = "src/assets/icon/gridview.png";
  viewer2.alt = "gridview Icon";
  viewerWrapper.append(viewer1, viewer2);
};

export default contentHeader;
