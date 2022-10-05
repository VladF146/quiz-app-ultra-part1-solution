import "./App.css";
import Header from "./components/header/Header";
import Cards from "./pages/Cards";
import Create from "./pages/Create";
import Profile from "./pages/Profile";
import Edit from "./pages/Edit";
import Navigation from "./components/navigation/Navigation";
import { Routes, Route } from "react-router-dom";

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
        <Routes>
          <Route
            path="/"
            element={
              <Cards
                cards={cards}
                onDelete={deleteCard}
                onToggle={toggleBookmark}
              />
            }
          >
            <Route path=":cardId" element={<Edit cards={cards} />} />
          </Route>
          <Route
            path="bookmark"
            element={
              <Cards
                cards={cards.filter((e) => e.bookmarked === true)}
                onDelete={deleteCard}
                onToggle={toggleBookmark}
              />
            }
          >
            <Route path=":cardId" element={<Edit cards={cards} />} />
          </Route>
          <Route path="create" element={<Create onSubmit={appendCard} />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<h1>Sorry, page doesn't exist!</h1>} />
        </Routes>
      </main>
      <Navigation />
    </div>
  );
}

export default App;
