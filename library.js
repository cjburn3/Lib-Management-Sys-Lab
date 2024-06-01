class Book {
    constructor(title, author, isbn, availableCopies) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
      this.availableCopies = availableCopies;
    }
  
    borrowBook() {
      this.availableCopies -= Math.min(this.availableCopies, 1);
      console.log(`One copy of '${this.title}' borrowed. ${this.availableCopies} copies left.`);
    }
  
    returnBook() {
      this.availableCopies += 1;
      console.log(`One copy of '${this.title}' returned. ${this.availableCopies} copies available.`);
    }
  }
  
  class Library {
    constructor(name) {
      this.name = name;
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
      console.log(`Book '${book.title}' added to the library.`);
    }
  
    removeBook(isbn) {
      this.books = this.books.filter(book => book.isbn !== isbn);
      console.log(`Book with ISBN '${isbn}' removed from the library.`);
    }
  
    findBookByTitle(title) {
      const book = this.books.find(book => book.title === title);
      console.log(
        book
          ? `Found book: Title: ${book.title}, Author: ${book.author}, ISBN: ${book.isbn}, Available Copies: ${book.availableCopies}`
          : `No book with title '${title}' found in the library.`
      );
      return book;
    }
  
    listAllBooks() {
      console.log(this.books.length ? "Listing all books in the library:" : "No books available in the library.");
      this.books.forEach(book => {
        console.log(`Title: ${book.title}, Author: ${book.author}, ISBN: ${book.isbn}, Available Copies: ${book.availableCopies}`);
      });
    }
  }
  
  const library = new Library("City Library");
  const book1 = new Book("1984", "George Orwell", "978-0451524935", 3);
  const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "978-0061120084", 5);
  
  library.addBook(book1);
  library.addBook(book2);
  library.listAllBooks();
  library.findBookByTitle("1984");
  library.removeBook("978-0451524935");
  library.listAllBooks();
  
  book2.borrowBook();
  book2.returnBook();
