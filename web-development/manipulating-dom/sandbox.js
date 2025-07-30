console.log(document.all);

// change text of paragraph from the click of change text btn.
const changeTextBtn = document.getElementById('changeTextBtn');
changeTextBtn.addEventListener('click', () => {
    const paragraph = document.querySelector('p');
    paragraph.innerText = 'The text has been changed!';
})

// get add new element btn by id and add event listener to create and add paragraph to div by classname.
const addElementBtn = document.getElementById("addElementBtn");
addElementBtn.addEventListener('click', () => {
    const newParagraph = document.createElement('p');
    newParagraph.innerText = "This is a new paragraph added dynamically!";
    document.querySelector('.container').appendChild(newParagraph);
})

// add remove btn and event listener to btn to remove last <p> element.
const removeElementBtn = document.createElement('button');
removeElementBtn.innerText = 'Remove Last Element';
removeElementBtn.className = 'btn btn-danger px-5';
document.querySelector('.container').appendChild(removeElementBtn);

removeElementBtn.addEventListener('click', () => {
    const paragraphs = document.querySelectorAll('p');
    const lastParagraph = paragraphs[paragraphs.length - 1];
    lastParagraph.remove();
})

// color change btn
const changeBgColorBtn = document.createElement("button");
changeBgColorBtn.innerText = 'Change Background Color';
changeBgColorBtn.className = 'btn btn-info';
document.querySelector('.container').appendChild(changeBgColorBtn);

changeBgColorBtn.addEventListener('click', () => {
    const body = document.querySelector('body');
    let colors = ["primary", "secondary", "success", "danger", "warning", "info", ""];
    body.className = `bg-${colors[Math.floor(Math.random() * colors.length)]}`;
})

const addListItemBtn = document.createElement('button');
addListItemBtn.innerText = 'Add List Item';
addListItemBtn.className = 'btn btn-warning';
document.querySelector('.container').appendChild(addListItemBtn);

addListItemBtn.addEventListener('click', () => {
    const list = document.querySelector('ul');
    const listItem = document.createElement('li');
    listItem.innerText = "new item";
    listItem.addEventListener('click', () => {
        listItem.remove();
    })
    list.appendChild(listItem);
})