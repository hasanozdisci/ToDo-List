const txtItem = document.querySelector("#txtItem");
const btnCreate = document.querySelector("#btnCreate");
const myList = document.querySelector("#myList");

// Create List Element
function createElement() {
  const newLI = document.createElement("LI");
  newLI.classList.add("checked");
  newLI.className = "list-group-item";
  newLI.textContent = txtItem.value;
  emptyTextError(newLI.textContent, newLI);
}

// when the button clicked, createElement function will create another li element
btnCreate.addEventListener("click", createElement);

const deleteAll = document.querySelector("#deleteAll");
const checkListElement = document.querySelectorAll(".list-group-item.checked");

myList.addEventListener("click", function(item) {
    if (item.target.tagName == "LI") {
      item.target.classList.toggle("checked");
      deleteButton();
    }
  });

function deleteButton() {
  if (checkListElement) {
    deleteAll.classList.remove("d-none");
  }
}

// delete list elements with delete button
deleteAll.addEventListener("click", function () {
  let element = document.querySelectorAll(".checked");
  element.forEach(function (item) {
    item.style.display = "none";
    deleteAll.classList.add("d-none");
  });
});

// Error Message
function emptyTextError(value, element) {
  if (value === "") {
    alert("lutfen bir deger giriniz");
  } else {
    myList.append(element);
    txtItem.value = "";
  }
}
