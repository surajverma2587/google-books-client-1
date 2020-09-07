import React from "react";

const formatAuthors = (authors) => {
  return authors.join(" & ");
};

const renderButtons = (btnControls, link, id) => {
  return btnControls.map(({ text, onClick, className }, index) => {
    if (text === "View") {
      return (
        <a href={link} target="_blank" rel="noopener noreferrer" key={index}>
          <button type="button" className={className} id={id}>
            {text}
          </button>
        </a>
      );
    } else {
      return (
        <button
          type="button"
          className={className}
          onClick={onClick}
          key={index}
          id={id}
        >
          {text}
        </button>
      );
    }
  });
};

const BookCard = ({
  title,
  subTitle,
  authors,
  description,
  image,
  link,
  btnControls,
  id,
}) => {
  return (
    <div className="card mb-3">
      <div className="row p-4">
        <div className="col-md-9">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{subTitle}</p>
          <p className="card-text">
            <small className="text-muted">
              Written By {formatAuthors(authors)}
            </small>
          </p>
        </div>
        <div className="col-md-3 text-right">
          {renderButtons(btnControls, link, id)}
        </div>
      </div>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img
            src={image}
            className="card-img"
            alt={title}
            style={{
              maxHeight: "280px",
              objectFit: "contain",
            }}
          />
        </div>
        <div className="col-md-8 px-4">{description}</div>
      </div>
    </div>
  );
};

export default BookCard;
