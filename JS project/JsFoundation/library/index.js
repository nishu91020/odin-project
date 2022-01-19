var library = [];
const displayBooks = () => {
    let bookCard = document.getElementById('card');
    bookCard.innerHTML = '';
    library.forEach((book, index) => {
        const book1 = document.createElement('div');
        book1.style.cssText = 'background-color: #b347b3; border-radius: 5px; padding:2%; margin:2%;  color: #ffffff; font-size:1.5vw;';
        book1.innerHTML = `
        <div>Book name - ${book.name}</div>
         <div>Author - ${book.author}</div>
         <div>Number of pages - ${book.page}</div>
         <div>Read(Yes/No) - ${book.read}</div>
         <button id="delete" onClick={deleteBook(${index})}>DELETE</button>
        `;
        bookCard.appendChild(book1);
        console.log(`${book.name}, ${book.author}, ${book.page}, ${book.read}`);
    });
};

const deleteBook = index => {
    library.splice(index, 1);
    displayBooks();
};

const addBookToLibrary = (name, author, page, read) => {
    library.push({ name, author, page, read });

    document.getElementById('name').value = '';
    document.getElementById('author').value = '';
    document.getElementById('page').value = '';
    document.getElementById('read').value = '';
};
displayBooks();
