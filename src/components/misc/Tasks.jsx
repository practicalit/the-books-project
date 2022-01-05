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
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Add spinner when the books are loading.
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
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
       </div>

    </>
  );
}
