export function getDate(today) {
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  const day = today.getDay() - 1;

  const strDay = ["월", "화", "수", "목", "금", "토", "일"];

  const todaysDate =
    year + ". " + month + ". " + date + ". " + strDay[day] + "요일";

  return todaysDate;
}
