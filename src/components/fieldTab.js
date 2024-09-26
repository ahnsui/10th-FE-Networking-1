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

  const buttonList = [];

  let selectedCategoryId = 0;

  for (let i = 0; i < categoryList.length; i++) {
    const categoryBtn = document.createElement("button");
    categoryBtn.innerHTML = `${categoryList[i].name}`;
    if (i == 0) {
      categoryBtn.id = "categoryBtn_0";
    } else {
      categoryBtn.id = "categoryBtn";
    }
    buttonList.push(categoryBtn);

    categoryBtn.onclick = () => {
      selectedCategoryId = categoryList[i].id;
      categoryBtn.id = "categoryBtn_selected";

      buttonList.forEach((btn, index) => {
        if (index !== i) {
          btn.id = "categoryBtn";
        }
      });
    };
    fieldTabWrapper.appendChild(categoryBtn);
  }
};

export default fieldTab;
