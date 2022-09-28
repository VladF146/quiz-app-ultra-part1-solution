import "./Card.css";
import { useState } from "react";

function Card({ card }) {
  const [show, setShow] = useState(false);
  const { question, answer, tags, bookmarked } = card;

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
        >
          <svg className="card__bookmark-icon" viewBox="0 0 24 24">
            <path d="M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z" />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default Card;

function log(content) {
  console.log(content);
}

log("Hello");
