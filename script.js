const books = [
  { id: 1, title: 'Book 1', price: 9.99, isFree: false },
  { id: 2, title: 'Book 2', price: 0.00, isFree: true },
  { id: 3, title: 'Book 3', price: 19.99, isFree: false },
  { id: 4, title: 'Book 4', price: 0.00, isFree: true },
]

const bookListContainer = document.getElementById('bookList');
const isFreeCheckBox = document.querySelector('#isFreeCheckBox')

function renderBooks(filterOnlyFree) {

  const filteredBooks = filterOnlyFree ? books.filter(book => book.isFree) : books



  const bookListHTML = filteredBooks.map(book => `
  <li>
    <strong>ID: </strong>${book.id}<br>
    <strong>Title: </strong>${book.title}<br>
    <strong>Price: </strong>${book.price}<br>
  </li>
  <hr>
  `
  )
  bookListContainer.innerHTML = bookListHTML.join('')
}

renderBooks(false)



isFreeCheckBox.addEventListener('change', () => {
  renderBooks(isFreeCheckBox.checked);
})
