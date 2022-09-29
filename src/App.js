import "./App.css";
import Header from "./components/header/Header";
import Cards from "./pages/Cards";
import Create from "./pages/Create";
import Profile from "./pages/Profile";
import Navigation from "./components/navigation/Navigation";
import { useState } from "react";

const cardsArray = [
  {
    id: 1,
    question: "What is HTML?",
    answer: "A markdown language.",
    tags: ["HTML", "Head", "Body"],
    bookmarked: true,
  },
  {
    id: 2,
    question: "What is CSS?",
    answer: "A styling language.",
    tags: ["CSS", "Cascade", "Flexbox"],
    bookmarked: false,
  },
  {
    id: 3,
    question: "What is JS?",
    answer: "A programming language.",
    tags: ["JS", "React", "NextJS"],
    bookmarked: true,
  },
];

function App() {
  const [route, setRoute] = useState("cards");
  const [cards, setCards] = useState(cardsArray);

  function appendCard(data) {
    const { question, answer, tags } = data;
    setCards([
      {
        question: question,
        answer: answer,
        tags: tags,
        bookmarked: false,
      },
      ...cards,
    ]);
  }

  function deleteCard(cardId) {
    setCards(cards.filter((card) => card.id !== cardId));
  }

  function toggleBookmark(cardId) {
    setCards(
      cards.map((card) =>
        card.id === cardId ? { ...card, bookmarked: !card.bookmarked } : card
      )
    );
  }

  return (
    <div className="app">
      <Header />
      <main className="app__main">
        {route === "cards" ? (
          <Cards
            cards={cards}
            onDelete={deleteCard}
            onToggle={toggleBookmark}
          />
        ) : route === "bookmark" ? (
          <Cards
            cards={cards.filter((e) => e.bookmarked === true)}
            onDelete={deleteCard}
            onToggle={toggleBookmark}
          />
        ) : route === "create" ? (
          <Create onSubmit={appendCard} setRoute={setRoute} />
        ) : (
          <Profile />
        )}
      </main>
      <Navigation route={route} setRoute={setRoute} />
    </div>
  );
}

export default App;
