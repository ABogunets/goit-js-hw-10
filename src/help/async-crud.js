const BASE_URL = 'http://localhost:3000';

const newBook = {
  title: "Test book on CSS",
  author: "Me",
  genres: ["CSS"],
  rating: 9,
};

async function addBook(book) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      body: JSON.stringify(book),
    }
  }
  const response = await fetch(`${BASE_URL}/books`, options);
  const newBook = await response.json();
  return newBook;
}

// async function addBookAndUpdateUI() {
//   try {
//     const book = await addBook({});
//     console.log(book);
//   } catch (error) {
//     console.log(error);
//   }
// }
// addBookAndUpdateUI();

async function fetchBooks() {
  const response = await fetch(`${BASE_URL}/books`);
  const books = await response.json();
  console.log(books);
}

async function fetchBooks(bookId) {
  const response = await fetch(`${BASE_URL}/books/${bookId}`);
  const book = await response.json();
  console.log(book);
}

async function deleteBook(bookId) {
  const options = {
    method: 'DELETE',
  }
  
  const response = await fetch(`${BASE_URL}/books${bookId}`, options);
  return response;
  // OR if deleted objected is needed:
  // const book = await response.json();
  // return book;
  }


  async function updateBook(update, bookId) {
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      body: JSON.stringify(update),
    }
  }
  const response = await fetch(`${BASE_URL}/books`, options);
  const book = await response.json();
  return book;
}
