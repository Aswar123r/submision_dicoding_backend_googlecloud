const books  = require('./books.js');
const {
    addBooksHandler,
    getAllBooksHandler,
    getIdBooksHandler,
    updateBooksHandler,
    deleteBooksHandler,
} = require('./handler.js');


const routes = [
{
    method : 'POST',
    path : '/books',
    handler : addBooksHandler,
},
{
    method : 'GET',
    path : '/books',
    handler : getAllBooksHandler,

},
{
    method : 'GET',
    path : '/books/{bookId}',
    handler : getIdBooksHandler,

},
{
    method: 'PUT',
    path : '/books/{bookId}',
    handler : updateBooksHandler,

},
{
    method : 'DELETE',
    path : '/books/{bookId}',
    handler : deleteBooksHandler,
},
];



module.exports = routes;


