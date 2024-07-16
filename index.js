const { getBookList, getBookByISBN, getBooksByAuthor, getBooksByTitle, getBookReview } = require('./books');
const { registerUser, loginUser, addBookReview, deleteBookReview } = require('./user');
const { getAllBooksAsync, searchByISBN, searchByAuthor, searchByTitle } = require('./methods');

(async () => {
    await getBookList();
    await getBookByISBN('978-3-16-148410-0');
    await getBooksByAuthor('J.K. Rowling');
    await getBooksByTitle('Harry Potter');
    await getBookReview('bookId');

    await registerUser({ username: 'newUser', password: 'password' });
    await loginUser({ username: 'newUser', password: 'password' });
    await addBookReview('bookId', { review: 'Great book!', rating: 5 });
    await deleteBookReview('bookId', 'reviewId');

    getAllBooksAsync((error, data) => {
        if (error) {
            console.error(error);
        } else {
            console.log(data);
        }
    });

    searchByISBN('978-3-16-148410-0')
        .then(data => console.log(data))
        .catch(error => console.error(error));

    try {
        const booksByAuthor = await searchByAuthor('J.K. Rowling');
        console.log(booksByAuthor);
    } catch (error) {
        console.error(error);
    }

    try {
        const booksByTitle = await searchByTitle('Harry Potter');
        console.log(booksByTitle);
    } catch (error) {
        console.error(error);
    }
})();
