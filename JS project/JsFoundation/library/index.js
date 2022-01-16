var library = [
    {
        name: 'Power of subconsious mind',
        author: 'J K Rowling',
        page: 200,
        read: 'Yes'
    },
    {
        name: 'Think and grow rich',
        author: 'R C Paul',
        page: 140,
        read: 'Yes'
    }
];
const displayBooks = () => {
    let bookCard = document.getElementById('card');
    bookCard.innerHTML = '';
    library.forEach(book => {
        const book1 = document.createElement('div');
        book1.style.cssText = 'background-color: #423542; border-radius: 5px; padding:2%; margin:2%;  color: #ffffff';
        book1.innerHTML = `
        <div>Book name - ${book.name}</div>
         <div>Author - ${book.author}</div>
         <div>Number of pages - ${book.page}</div>
         <div>Read(Yes/No) - ${book.read}</div>
        `;
        bookCard.appendChild(book1);
        console.log(`${book.name}, ${book.author}, ${book.page}, ${book.read}`);
    });
};
const addBookToLibrary = (name, author, page, read) => {
    library.push({ name, author, page, read });
};
displayBooks();
