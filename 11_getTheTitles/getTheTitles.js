const getTheTitles = function(arr) {
  return arr.map(book => book.title);
};

const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
]
console.log(typeof(books));
console.log(books[0]);

// Do not edit below this line
module.exports = getTheTitles;
