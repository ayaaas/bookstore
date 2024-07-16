const axios = require('axios');

async function getAllBooksAsync(callback) {
    try {
        const response = await axios.get('https://api.bookstore.com/books');
        callback(null, response.data);
    } catch (error) {
        callback(error, null);
    }
}

function searchByISBN(isbn) {
    return axios.get(`https://api.bookstore.com/books/${isbn}`)
        .then(response => response.data)
        .catch(error => {
            throw new Error('Error fetching book by ISBN:', error);
        });
}

async function searchByAuthor(author) {
    try {
        const response = await axios.get('https://api.bookstore.com/books', { params: { author } });
        return response.data;
    } catch (error) {
        throw new Error('Error fetching books by author:', error);
    }
}

async function searchByTitle(title) {
    try {
        const response = await axios.get('https://api.bookstore.com/books', { params: { title } });
        return response.data;
    } catch (error) {
        throw new Error('Error fetching books by title:', error);
    }
}

module.exports = { getAllBooksAsync, searchByISBN, searchByAuthor, searchByTitle };
