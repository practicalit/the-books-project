import React, { useEffect, useState } from "react";
import axios from "axios";

export default function BookSubject() {
  const [subject, setSubject] = useState("");
  const [books, setBooks] = useState({});

  useEffect(() => {});

  const inputHandler = (event) => {
    setSubject(event.target.value);
  };

  const btnHandler = (event) => {
    //const url = "http://openlibrary.org/"
    const url = `${process.env.REACT_APP_BOOK}subjects/${subject}.json?published_in=1800-1900`;
    axios
      .get(url)
      .then((data) => {
        console.log(data.data);  
        setBooks(data.data)})
      .catch((error) => console.log(error));
  };

  return (
    <div className="container">
      <p>See how the search functionality is working from the code.</p>
      <p>Understand how we are collecting the input and see what is happening when 
        the user is clicking on search.</p>
      <input
        className="form-control"
        onKeyUp={inputHandler}
        placeholder="search book by subject. Eg. tree"
      />
      <button className="btn btn-primary mt-2" onClick={btnHandler}>
        Search
      </button>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Author</th>
            <th scope="col">Title</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {
          
          books && books.works &&
            books.works.length > 0 &&
            books.works.map((book) => {
              return <tr key={book.cover_id}>
                <th scope="row">{book.cover_id}</th>
                <td>{book.authors.map( auth => auth.name + ", ")}</td>
                <td>{book.title}</td>
                <td>{book.availability ? book.availability.status: 'Unknown'}</td>
              </tr>;
            })}
        </tbody>
      </table>
    </div>
  );
}
