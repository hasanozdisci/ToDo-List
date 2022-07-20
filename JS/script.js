const txtItem = document.querySelector('#txtItem');
const addButton = document.querySelector('#btnCreate');
const myList = document.querySelector('#myList')


addButton.addEventListener('click', function () {
    const inputValue = txtItem.value;
    const li = document.createElement('li');
    li.classList.add('checked');
    li.innerHTML = inputValue;
    li.className = 'list-group-item';
    myList.append(li);
    txtItem.value = ""
})

myList.addEventListener('click', function (item) {
    if (item.target.tagName == 'LI') {
        item.target.classList.toggle('checked');
        deleteButton();
    }
})

function deleteButton() {
    let checkListElement = document.querySelectorAll('.list-group-item.checked')
    if (checkListElement.length > 0) {
        document.querySelector('#deleteAll').classList.remove('d-none');
    } else {
        document.querySelector('#deleteAll').classList.add('d-none')
    }
}

const deleteAll = document.querySelector('#deleteAll');

deleteAll.addEventListener('click', function () {
    let element = document.querySelectorAll('.checked')
    element.forEach(function (item) {
        item.style.display = 'none'
    })
    deleteButton();
})


