let items = ['item 1', 'item 2', 'item 3', 'item4']


let list = document.querySelector("#myList")



items.forEach(function(item){

    CreateItem(item)
})


// click event
list.addEventListener('click', function(item){

    if(item.target.tagName == 'LI') {
        item.target.classList.toggle('checked')
        ToggleDeleteButton()
    }

})


function ToggleDeleteButton() {
    let checkList = document.querySelectorAll('.list-group-item.checked')

    if(checkList.length > 0) {
        document.querySelector('#deleteAll').classList.remove('d-none')
    } else {
        document.querySelector('#deleteAll').classList.add('d-none')
    }
}

// Delete All
document.querySelector('#deleteAll').onclick = function() {
    let element = document.querySelectorAll('.checked')

    element.forEach(function(item){

        item.style.display = 'none';
    });

}


// Eleman girilmezse hata
document.querySelector('#btnCreate').onclick = function(){

    let item = document.querySelector('#txtItem').value
    
    if(item === '') {
        alert('lutfen bir deger giriniz')
        return
    }

    CreateItem(item)
}

// Liste elemanlarini olusturma
function CreateItem(item){
    let li = document.createElement('li');
    let t = document.createTextNode(item)
    li.className = 'list-group-item'
    li.appendChild(t)
    list.appendChild(li)

    let span = document.createElement('span')
    let text = document.createTextNode('\u00D7')
    span.className = 'close';
    span.appendChild(text)
    li.appendChild(span)

    span.onclick = function() {
        let li = this.parentElement
        li.style.display = 'none';
        li.classList.remove('checked')
    }
}



