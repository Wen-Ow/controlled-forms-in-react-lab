import { useState } from "react"; // Imports the useState hook from React to manage state in the component

// Define the Bookshelf component; this functional component will manage book data and form inputs
const Bookshelf = () => {
  // Create a state variable to store an array of book objects
  const [books, setBooks] = useState([
    { title: "Fourth Wing", author: "Rebecca Yarros" },
    { title: "The Lion, the Witch and the Wardrobe", author: "C.S. Lewis" },
  ]);

  // Create a state variable to store an array of new book additions
  const [newBook, setNewBook] = useState({ title: "", author: "" });

  // Create event handler for input changes (this function updates the form's state as the user types into the input fields).
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewBook((prevBook) => ({ ...prevBook, [name]: value }));
  };

  // Create event handler for form submission (this function manages the submission, adding a new book to the list, and resetting the input fields).
  const handleSubmit = (event) => {
    event.preventDefault(); // Begin the function by stopping the default form submission behavior/action
    if (newBook.title && newBook.author) {
      // Check if both title and author are provided
      setBooks((prevBooks) => [...prevBooks, newBook]); // Add the new book to the list
      setNewBook({ title: "", author: "" }); // Reset the input fields
    }
  };

  return (
    <div className="bookshelfDiv">
      {/* Book Form */}
      <div className="formDiv">
        <h3>Add a Book</h3>
        {/* Form will go here */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title:"
            value={newBook.title}
            onChange={handleInputChange}
            required
          />
          <br />
          <input
            type="text"
            name="author"
            placeholder="Author:"
            value={newBook.author}
            onChange={handleInputChange}
            required
          />
          <br />
          <button type="submit">Add Book</button>
        </form>
      </div>

      {/* Book Display */}
      <div className="bookCardsDiv">
        <h3>My Bookshelf</h3>
        {books.map((book, index) => (
          <div key={index} className="bookCard">
            <h4>{book.title}</h4>
            <p>by {book.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
