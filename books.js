const axios = require('axios');
const apiUrl = 'https://api.bookstore.com';

async function getBookList() {
    try {
        const response = await axios.get(`${apiUrl}/books`);
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching book list:', error);
    }
}

async function getBookByISBN(isbn) {
    try {
        const response = await axios.get(`${apiUrl}/books/${isbn}`);
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching book by ISBN:', error);
    }
}

async function getBooksByAuthor(author) {
    try {
        const response = await axios.get(`${apiUrl}/books`, { params: { author } });
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching books by author:', error);
    }
}

async function getBooksByTitle(title) {
    try {
        const response = await axios.get(`${apiUrl}/books`, { params: { title } });
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching books by title:', error);
    }
}

async function getBookReview(bookId) {
    try {
        const response = await axios.get(`${apiUrl}/books/${bookId}/reviews`);
        console.log(response.data);
    } catch (error) {
        console.error('Error fetching book review:', error);
    }
}

module.exports = { getBookList, getBookByISBN, getBooksByAuthor, getBooksByTitle, getBookReview };
