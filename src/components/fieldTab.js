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

      WrapperList.forEach((wrap, index) => {
        if (index !== i) {
          wrap.id = "categoryWrapper";
        }
      });
    };

    fieldTabWrapper.appendChild(categoryWrapper);
    categoryWrapper.append(categoryBtn, progress);
    categoryBtn.appendChild(countText);
  }
};

export default fieldTab;
