const add = document.getElementById('add');

add.addEventListener('click', e => {
    e.preventDefault();
    const bookName = document.getElementById('name').value;
    const auth = document.getElementById('author').value;
    const page = document.getElementById('page').value;
    const read = document.getElementById('read').value;
    console.log(`${bookName}, ${auth}, ${page}, ${read}`);
    addBookToLibrary(bookName, auth, page, read);
    displayBooks();
});
