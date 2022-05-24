const myLibrary = [];
const body = document.querySelector('body');
const container = document.querySelector('#container');
let formIsOpen = false;
let colorIsOpen = false;
let fontIsBlack = true;

const fillOutForm = document.querySelector('#fillOutForm');
const formButton = document.querySelector('#formButton');

const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const checkBox = document.querySelector('#read');
const submitButton = document.querySelector('#submitBtn');

function Book(title, author, pages, read) {
    let aBook = {
        title: title,
        author: author,
        pages: pages,
        read: read,
        color: '#d4af19',
        fontColor: 'black',
    };
    return aBook;
}

function addBookToLibrary(title, author, pages, read) {
    let aNewBook = new Book(title, author, pages, read);
    myLibrary.push(aNewBook);
}

addBookToLibrary('Ready Player One', 'Ernist Cline', 384, true);
addBookToLibrary('Psycho', 'Robert Bloch', 200, true);
addBookToLibrary(
    'Willy Wonka and the Chocolate Factory',
    'Roald Dahl',
    192,
    false
);

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function addBookToPage() {
    removeAllChildNodes(container);
    for (let i = 0; i < myLibrary.length; i++) {
        let bookDiv = document.createElement('div');
        bookDiv.classList.add('bookContainer');
        bookDiv.classList.add(`book${i}`);
        bookDiv.style.backgroundColor = myLibrary[i].color;
        bookDiv.style.color = myLibrary[i].fontColor;

        let bookEdge = document.createElement('div');
        bookEdge.classList.add('bookEdge');

        let wordsDiv = document.createElement('div');
        wordsDiv.classList.add('wordsDiv');

        let bookTitle = document.createElement('h2');
        bookTitle.classList.add('bookTitle');
        bookTitle.innerHTML = myLibrary[i].title;

        let bookAuthor = document.createElement('h3');
        bookAuthor.classList.add('bookAuthor');
        bookAuthor.innerHTML = 'By ' + myLibrary[i].author;

        let bookPages = document.createElement('h4');
        bookPages.classList.add('bookPages');
        bookPages.innerHTML = myLibrary[i].pages + ' pages';

        let readBook = document.createElement('h4');
        readBook.classList.add('readBook');
        if (myLibrary[i].read === true) {
            readBook.innerHTML = 'I have read this book';
        } else {
            readBook.innerHTML = 'I havent read this book';
        }

        let buttonContainer = document.createElement('div');
        buttonContainer.classList.add('buttonCont');

        let readButton = document.createElement('button');
        readButton.classList.add('bookButton');
        readButton.classList.add('readButton');
        if (myLibrary[i].read === true) {
            readButton.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
        } else {
            readButton.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        }
        readButton.addEventListener('click', function () {
            if (myLibrary[i].read === false) {
                myLibrary[i].read = true;
            } else {
                myLibrary[i].read = false;
            }
        });
        buttonContainer.appendChild(readButton);

        let delButton = document.createElement('button');
        delButton.classList.add('deleteButton');
        delButton.classList.add('bookButton');
        delButton.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
        delButton.addEventListener('click', function () {
            myLibrary.splice(i, 1)[0];
            console.log(myLibrary);
        });
        buttonContainer.appendChild(delButton);

        let colorButton = document.createElement('button');
        colorButton.classList.add('bookButton');
        colorButton.innerHTML = '<i class="fa-solid fa-palette"></i>';

        colorButton.addEventListener('click', function () {
            if (colorIsOpen === false) {
                colorButton.innerHTML = '<i class="fa-solid fa-xmark"></i>';
                colorIsOpen = true;
                colorPicker.style.display = 'flex';
                colorSubmit.style.display = 'flex';
                fontPicker.style.display = 'flex';
            } else {
                colorButton.innerHTML = '<i class="fa-solid fa-palette"></i>';
                colorIsOpen = false;
                colorPicker.style.display = 'none';
                colorSubmit.style.display = 'none';
                fontPicker.style.display = 'none';
            }
        });
        buttonContainer.appendChild(colorButton);

        let colorContainer = document.createElement('div');
        colorContainer.classList.add('colorContainer');

        let colorPicker = document.createElement('input');
        colorPicker.type = 'color';
        colorPicker.value = myLibrary[i].color;
        colorPicker.classList.add('colorPick');
        colorPicker.addEventListener('click', function () {});
        colorContainer.appendChild(colorPicker);

        let fontPicker = document.createElement('button');
        fontPicker.classList.add('bookButton');
        fontPicker.classList.add('fontPicker');
        fontPicker.style.color = myLibrary[i].fontColor;
        fontPicker.innerHTML = 'Aa';
        fontPicker.addEventListener('click', function () {
            if (myLibrary[i].fontColor === 'black') {
                fontIsBlack = false;
                fontPicker.style.color = 'white';
                myLibrary[i].fontColor = 'white';
            } else {
                fontIsBlack = true;
                fontPicker.style.color = 'black';
                myLibrary[i].fontColor = 'black';
            }
        });
        colorContainer.appendChild(fontPicker);

        let colorSubmit = document.createElement('button');
        colorSubmit.classList.add('bookButton');
        colorSubmit.classList.add('colorSubmit');
        colorSubmit.innerHTML = '<i class="fa-solid fa-check"></i>';
        colorSubmit.addEventListener('click', function () {
            let customColor = colorPicker.value;
            myLibrary[i].color = customColor;
            colorIsOpen = false;
            colorPicker.style.display = 'none';
            colorSubmit.style.display = 'none';
            fontPicker.style.display = 'none';
        });
        colorContainer.appendChild(colorSubmit);
        buttonContainer.appendChild(colorContainer);

        bookDiv.appendChild(bookEdge);
        wordsDiv.appendChild(bookTitle);
        wordsDiv.appendChild(bookAuthor);
        wordsDiv.appendChild(bookPages);
        wordsDiv.appendChild(readBook);
        bookDiv.appendChild(wordsDiv);
        wordsDiv.appendChild(buttonContainer);
        container.appendChild(bookDiv);
    }
}

let testList = ['1', '2', '3', '4', '5', '6'];
console.log(testList);
let testC = testList.splice(2, 3);
console.log(testC);
let testD = testC.splice(0, 1);
console.log(testD);

function showHideForm(show) {
    if (show === true) {
        fillOutForm.style.display = 'flex';
        formIsOpen = true;
    } else if (show === false) {
        fillOutForm.style.display = 'none';
        formIsOpen = false;
    } else {
        console.log('error');
    }
}

function clearInputs() {
    titleInput.value = '';
    authorInput.value = '';
    pagesInput.value = '';
    checkBox.checked = false;
}

formButton.addEventListener('click', function () {
    if (formIsOpen === true) {
        showHideForm(false);
    } else if (formIsOpen === false) {
        showHideForm(true);
    }
});

submitButton.addEventListener('click', function () {
    let titleInfo = titleInput.value;
    let authorInfo = authorInput.value;
    let pagesInfo = pagesInput.value;
    let checkInfo = checkBox.checked;
    if (titleInfo != '' && authorInfo != '' && pagesInfo != '') {
        addBookToLibrary(titleInfo, authorInfo, pagesInfo, checkInfo);
        addBookToPage();
        clearInputs();
        showHideForm(false);
    } else {
        alert('Please Enter All Requiremnts');
    }
    console.log(titleInfo);
});

setInterval(function () {
    if (colorIsOpen != true) {
        addBookToPage();
    }
}, 300);
