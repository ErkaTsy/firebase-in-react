import {Component} from 'react';
import firebase from './firebase.js';
import './App.css';

// Configure firebase on React -done
// Connect firebase data to the state
// Map throught the book state to display each book
// Add remove button
   // on remove button click, remove the book that was clicked on, remove it from the firebase
//Create an imput form to get user's input value
  // on submit of the form, grab input user value and submit it to firebase


class App extends Component {
  constructor() {
    super();
    this.state = {
      // books: ["Anne of Green Gables", "Pride and Prejudice", "Skybreaker", "Dune", "Game Of Thrones","The long way to a small agry planet",
      //         "Where's Waldo?"]
      books: [],
      userInput: ''
    };
  }

  componentDidMount() {
    // make a reference to the database
    const dbRef = firebase.database().ref();
    // get data from the database
    dbRef.on("value", (data) => {
      const firebaseDataObj = data.val();
      console.log(firebaseDataObj);

      // make a new empty array
      let booksArray = [];
      // use for in loop throught the object
      for (let propertyKey in firebaseDataObj) {
        // propertyKey = 'b1','b2', 'b3', 'b4'
        // console.log(propertyKey);
        // extracting the key and value of the object
        const propertyVal = firebaseDataObj[propertyKey];
        // format it to the way we want the object to look
        const formattedObj = {
          id: propertyKey,
          name: propertyVal,
        };
        // push this new item into the empty array
        booksArray.push(formattedObj);
      }
      console.log(booksArray);
      // updating our this.state.books state with firebase data
      this.setState({
        books: booksArray,
      });
    });
  }

  handleAdd = (e) => {
    e.preventDefault();

    const dbRef =firebase.database().ref();
dbRef.push(this.state.userInput);

    // to pass the value on click event
  };

  handleInputChange = (e) => {
    // console.log(e.target.value);
    this.setState({
      userInput: e.target.value
    })
  }

  removeBook = (bookId) => {
    const dbRef = firebase.database().ref();
    // a way to remove a record off the face of firebase

    // .child is goign locate the particular record
    // .remove() is going to remove the record
    dbRef.child(bookId).remove();
  }

  render() {
    return (
      <div className="App">
        <h1>BookShelf App</h1>
        <ul>
          {this.state.books.map((book) => {
            return (
              <li key={book.id}>
                <p>{book.name}</p>
                <button onClick={() => {this.removeBook(book.id)}}>Remove</button>
              </li>
            );
          })}
        </ul>
        <form>
          <label htmlFor="NewBook">Please give me a new title</label>
          <input type="text" id="newBook" onChange={this.handleInputChange} />
          <button onClick={this.handleAdd}>Add Book</button>
        </form>
      </div>
    );
  }
}

export default App;
