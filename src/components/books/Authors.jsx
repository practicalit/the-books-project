import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

/**
 * @author Practical IT <info@thePracticalIT.com>
 * Authors component 
 */
export default function Authors() {
  const { id } = useParams();
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    console.log(id);
    axios
      .get(`https://openlibrary.org/authors/${id}.json`)
      .then((author) => setAuthor(author.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      <div className="card">
        <div className="container-fliud">
          <div className="wrapper row">
            <div className="preview col-md-6">
              <div className="preview-pic tab-content">
                <div className="tab-pane active" id="pic-1">
                  <img
                    src={`https://covers.openlibrary.org/a/id/${author?.photos[0]}-M.jpg`}
                  />
                </div>
              </div>
            </div>
            <div className="details col-md-6">
              <h3 className="product-title">{author?.name}</h3>
              <div className="rating">
                <div className="stars">
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star checked"></span>
                  <span className="fa fa-star"></span>
                  <span className="fa fa-star"></span>
                </div>
                <span className="review-no">
                  Date of Birth: {author?.birth_date}
                </span>
              </div>
              <p className="product-description">{author?.bio?.value}</p>
              <h4 className="price">
                Title: <span>{author?.title}</span>
              </h4>
              Alternate names:
              {author?.alternate_names?.map((name) => {
                return (
                  <span
                    className="size"
                    data-toggle="tooltip"
                    title="xtra large"
                  >
                    {" "}
                    {name} -{" "}
                  </span>
                );
              })}
              <h5 className="colors">
                what else?:
                <span
                  className="color orange not-available"
                  data-toggle="tooltip"
                  title="Not In store"
                ></span>
              </h5>
              <div className="action">
                <button className="add-to-cart btn btn-default" type="button">
                  Add citation
                </button>
                <button className="like btn btn-default" type="button">
                  <span className="fa fa-heart"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
