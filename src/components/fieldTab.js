const fieldTab = () => {
  const fieldTabWrapper = document.getElementById("fieldTabWrapper");

  const categoryList = [
    { id: 0, name: "종합/경제" },
    { id: 1, name: "방송/통신" },
    { id: 2, name: "IT" },
    { id: 3, name: "영자지" },
    { id: 4, name: "스포츠/연예" },
    { id: 5, name: "매거진/전문지" },
    { id: 6, name: "지역" },
  ];

  const WrapperList = [];

  let selectedCategoryId = 0;
  let presentNum = 1;
  let entireNum = 81;

  for (let i = 0; i < categoryList.length; i++) {
    const categoryWrapper = document.createElement("div");

    const categoryBtn = document.createElement("button");
    categoryBtn.id = "categoryBtn";

    const countText = document.createElement("div");
    countText.innerHTML = `${presentNum} / ${entireNum}`;
    countText.id = "countText";

    const progress = document.createElement("div");
    progress.id = "progress";

    categoryBtn.innerHTML = `${categoryList[i].name}`;
    if (i === 0) {
      categoryWrapper.id = "categoryWrapper_selected";
    } else {
      categoryWrapper.id = "categoryWrapper";
    }
    WrapperList.push(categoryWrapper);

    categoryWrapper.onclick = () => {
      selectedCategoryId = categoryList[i].id;
      categoryWrapper.id = "categoryWrapper_selected";

      WrapperList.forEach((wrap, idx) => {
        const categoryBtn = wrap.querySelector("#categoryBtn");
        const countText = wrap.querySelector("#countText");
        const progress = wrap.querySelector("#progress");
        if (idx !== i) {
          wrap.id = "categoryWrapper";
          if (countText) {
            categoryBtn.removeChild(countText);
          }
          if (progress) {
            wrap.removeChild(progress);
          }
        }
      });

      categoryBtn.appendChild(countText); //아마 selectedCategoryId 이용해서 해당 뉴스 개수 가져올 듯..
      categoryWrapper.append(progress);
    };

    if (categoryWrapper.id === "categoryWrapper_selected") {
      categoryBtn.appendChild(countText);
    }
    fieldTabWrapper.appendChild(categoryWrapper);
    categoryWrapper.append(categoryBtn, progress);
  }
};

export default fieldTab;
