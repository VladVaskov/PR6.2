const select = document.getElementById("select")

select.addEventListener("click", () => {
  if (select.selectedIndex == 0)
    alert("Правильно!")
  else
    alert("Неправильна відповідь!")
})
