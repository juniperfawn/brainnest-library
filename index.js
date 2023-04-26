'use strict';

let myLibrary = [];

function Book(title, author, pages, language, read) {
  this.title = title.toUpperCase().trim();
  this.author = author.trim();
  this.pages = pages;
  this.language = language;
  this.read = read;
}

Book.prototype.toggleReadStatus = function () {
    this.read = !this.read;
  };

//Get the form input data to the library array
function addBookToLibrary() {
  // Get user input from the form
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const language = document.getElementById('language').value;
  const read = document.getElementById('read').checked;

  //validate data from 
  if (title.trim() === '' || author.trim() === '') {
    return;
  }

  // Create a new Book object with the user input
  const newBook = new Book(title, author, pages, language, read);

  // Add the new Book object to the myLibrary array
  myLibrary.push(newBook);
}

//Render the book cards on the Library
function displayBooks() {
    const libraryContainer = document.getElementById('book-cards');
  
    libraryContainer.innerHTML = '';
  
    myLibrary.forEach((book, index) => {
      const bookCard = document.createElement('div');
      bookCard.classList.add('book-card');
  
      const title = document.createElement('h2');
      title.textContent = book.title;
      bookCard.appendChild(title);
  
      const author = document.createElement('h3');
      author.textContent = `By: ${book.author}`;
      bookCard.appendChild(author);
  
      const pages = document.createElement('p');
      pages.textContent = `${book.pages} pages`;
      bookCard.appendChild(pages);
  
      const language = document.createElement('p');
      language.textContent = `Language: ${book.language}`;
      bookCard.appendChild(language);
  
      const read = document.createElement('p');
      read.textContent = book.read ? 'Read' : 'Unread';
      bookCard.appendChild(read);
  
      const readButton = document.createElement('button');
      readButton.classList.add('book-read-btn');
      readButton.textContent = book.read ? 'Mark as unread' : 'Mark as read';
      readButton.addEventListener('click', () => {
        book.toggleReadStatus();
        read.textContent = book.read ? 'Read' : 'Unread';
        readButton.textContent = book.read ? 'Mark as unread' : 'Mark as read';
  
        updateCounters();
      });
      bookCard.appendChild(readButton);
  
      const removeButton = document.createElement('button');
      removeButton.classList.add('book-remove-btn');
      removeButton.textContent = 'Remove';
      removeButton.setAttribute('data-index', index);
      removeButton.addEventListener('click', removeBookFromLibrary);
      bookCard.appendChild(removeButton);
  
      libraryContainer.appendChild(bookCard);
    });
  
    updateCounters();
  }

// Call the displayBooks function initially to display the book cards on the page
displayBooks();

function removeBookFromLibrary(index) {
    // Remove the book at the specified index from the myLibrary array
    myLibrary.splice(index, 1);
  
    // Re-render the book cards in the library section
    displayBooks();
  
    // Update the counts in the counters section
    updateCounters();
  }


//manage the counters for total books, read and unread books
function updateCounters() {
    const totalBooks = myLibrary.length;
    const totalReadBooks = myLibrary.filter((book) => book.read).length;
    const totalUnreadBooks = myLibrary.filter((book) => !book.read).length;
  
    const totalBooksCounter = document.querySelector('#total-books');
    totalBooksCounter.textContent = totalBooks;
  
    const totalReadBooksCounter = document.querySelector('#total-read-books');
    totalReadBooksCounter.textContent = totalReadBooks;
  
    const totalUnreadBooksCounter = document.querySelector('#total-unread-books');
    totalUnreadBooksCounter.textContent = totalUnreadBooks;
  }
  
  updateCounters();