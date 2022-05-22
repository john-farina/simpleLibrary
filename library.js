let myLibrary = [];
const body = document.querySelector('body');
const container = document.querySelector('#container');
let formIsOpen = false;

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
    };
    return aBook;
}

function addBookToLibrary(title, author, pages, read) {
    let aNewBook = new Book(title, author, pages, read);
    myLibrary.push(aNewBook);
}

addBookToLibrary('Ready Player One', 'Ernist Cline', 384, true);
addBookToLibrary('Psycho', 'Robert Bloch', 200, true);

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

        let bookEdge = document.createElement('div');
        bookEdge.classList.add('bookEdge');

        let wordsDiv = document.createElement('div');
        wordsDiv.classList.add('wordsDiv');

        let bookTitle = document.createElement('h2');
        bookTitle.classList.add('bookTitle');
        bookTitle.innerHTML = myLibrary[i].title;

        let bookAuthor = document.createElement('h3');
        bookAuthor.classList.add('bookAuthor');
        bookAuthor.innerHTML = myLibrary[i].author;

        let bookPages = document.createElement('h4');
        bookPages.classList.add('bookPages');
        bookPages.innerHTML = myLibrary[i].pages;

        let readBook = document.createElement('h4');
        readBook.classList.add('readBook');
        readBook.innerHTML = myLibrary[i].read;

        let delButton = document.createElement('button');
        delButton.classList.add(`bookButton${i}`);

        bookDiv.appendChild(bookEdge);
        wordsDiv.appendChild(bookTitle);
        wordsDiv.appendChild(bookAuthor);
        wordsDiv.appendChild(bookPages);
        wordsDiv.appendChild(readBook);
        wordsDiv.appendChild(delButton);
        bookDiv.appendChild(wordsDiv);
        container.appendChild(bookDiv);

        console.log(myLibrary[i]);
    }
}

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

addBookToPage();

for (loop = 0; loop < myLibrary.length; loop++) {
    let name = `bookButton${loop}`.toString();
    let className = document.getElementsByClassName(`bookButton${loop}`);
    className.addEventListener('click', function () {
        alert('hi');
    });
}
