import React from "react";

/**
 * Tasks component for adding tasks to be performed as tutorial
 * 
 * What is the difference between the jsx and js file? Which one shall we be 
 * using?
 */
export default function Tasks() {
  return (
    <>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              Add spinner when the books are loading (DONE).
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Please add spinner to search component.</strong> on the search page, you can 
              type any subject and get the list of books corresponding to the 
              seubject.
              <div>
                  But, when it is loading it might take a bit of time and we want 
                  the user to be aware that it is still loading by showing spinners.
                  You can find spinners from <a target="_blank" href="https://getbootstrap.com/docs/5.1/components/spinners/">
                  https://getbootstrap.com/docs/5.1/components/spinners/
                  </a>
              </div>
            </div>
          </div>
        </div>

        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-controls="collapseTwo"
            >
              On search, allow hitting enter key to trigger searching.
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ol>
                <li>Go to the search link</li>
                <li>Type any search term, eg flower.</li>
                <li>Hit the enter key. This time nothing happens.</li>
                <li>Click the search button and search result is show.</li>
                <li>What you will do is, to make the search result 
                  to show when the enter key is pressed also.</li>
              </ol>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-controls="collapseFour"
            >
              Author page is broken for some authors.
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ol>
                <li>Go to the search link</li>
                <li>Type the search term as "city", without quotes.</li>
                <li>Click on George Norton as author, you will find it on the results</li>
                <li>If the above doesn' work, use 
                  <a href="http://localhost:3000/authors/OL2502133A">http://localhost:3000/authors/OL2502133A</a>.</li>
                <li>You can see the page is broken. Please fix that. You can see
                  the error hints in the console.
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-controls="collapseThree"
            >
              Add book detail link.
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <p>On the current search page, we have link to the author.</p>
              <p>Clicking on the author link takes you to the detail page of author.</p>
              <p>Now add the same functionality for the book detail. We want to make the 
                title of the book as the link text. And when you click on that, it takes 
                you to the detail page of the book.
              </p>
              <p>You can get the book detail from the API: GET https://openlibrary.org/works/BOOK-ID.json</p>
              <p>Where BOOK-ID is the key you get from the search. The example API is like: 
              https://openlibrary.org/works/OL45883W.json  
              </p>
              <p>If you take a look on the search result from he network, from the search page, 
                you will see the result contains "key" under works array, eg key: "/works/OL18136690W"
                You will use that to request more information. 
              </p>
              <p>
                once you get the result, on the page show the following:
                <ul>
                  <li>Title of the book</li>
                  <li>Description of the book</li>
                  <li>Cover images of the book</li>
                  <li>Keywords of the book. You will find it under the "Subject" array in the response</li>
                  <li>Creatd date of the book.</li>
                </ul>
              </p>
              <p>***You need to create new component for this and routing as well. You can make routing
                /works/:bookId
              </p>
              <p>You can see what kind of page can be done out of that using this as reference:
                <a target="_blank" href="https://openlibrary.org/works/OL45883W/Fantastic_Mr._Fox">https://openlibrary.org/works/OL45883W/Fantastic_Mr._Fox</a>
              </p>
            </div>
          </div>
        </div>
       </div>
    </>
  );
}
