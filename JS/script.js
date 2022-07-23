const txtItem = document.querySelector('#txtItem')
const btnCreate = document.querySelector('#btnCreate')
const myList = document.querySelector('#myList')

// Create List Element
function createElement() {
    const newLI = document.createElement('LI');
    newLI.classList.add('checked')
    newLI.className = 'list-group-item'
    newLI.textContent = txtItem.value
    myList.append(newLI)
    txtItem.value = ""
}

// when the button clicked createElement function will create another li element
btnCreate.addEventListener('click', createElement)



function selectMyListElement(item) {
    if (item.target.tagName == 'LI') {
        item.target.classList.toggle('checked');
        deleteButton();
    }
}

// myList elements clickable
myList.addEventListener('click', selectMyListElement)


// if myList have any element delete button display none
function deleteButton() {
    let checkListElement = document.querySelectorAll('.list-group-item.checked')
    if (checkListElement.length > 0) {
        document.querySelector('#deleteAll').classList.remove('d-none');
    } else {
        document.querySelector('#deleteAll').classList.add('d-none');
    }
}



const deleteAll = document.querySelector('#deleteAll');

// delete list elements with delete button
deleteAll.addEventListener('click', function () {
    let element = document.querySelectorAll('.checked')
    element.forEach(function (item) {
        item.style.display = 'none'
    })
    deleteButton();
})
