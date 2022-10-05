import "./Card.css";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Card({ card, onDelete, onToggle }) {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { question, answer, tags, bookmarked, id } = card;

  function showDetails() {
    navigate(`${id}`);
  }


  return (
    <section className="card">
      <h2>{question}</h2>
      <button
        className="card__button-answer"
        type="button"
        onClick={() => setShow(!show)}
      >
        {show ? "Hide answer" : "Show answer"}
      </button>
      <p className={`card__answer ${show ? "card__answer--active" : ""}`}>
        {answer}
      </p>
      <button
        className="card__button-answer"
        type="button"
        onClick={() => onDelete(id)}
      >
        Delete card!
      </button>
      <ul className="card__tag-list">
        {tags.length > 0
          ? tags.map((e, i) => (
              <li key={i} className="card__tag-list-item">
                {e}
              </li>
            ))
          : ""}
      </ul>
      <div className="card__button-bookmark">
        <button
          className={`card__bookmark ${
            bookmarked ? "card__bookmark--active" : ""
          }`}
          aria-label="bookmark"
          type="button"
          onClick={() => onToggle(id)}
        >
          <svg className="card__bookmark-icon" viewBox="0 0 24 24">
            <path d="M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z" />
          </svg>
        </button>
        {location.pathname === "/" || location.pathname === "/bookmark" ? (
          <button onClick={showDetails}>Show details</button>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}

export default Card;
