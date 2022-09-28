import "./App.css";
import Header from "./components/header/Header";
import Cards from "./pages/Cards";
import Create from "./pages/Create";
import Profile from "./pages/Profile";
import Navigation from "./components/navigation/Navigation";
import { useState } from "react";

const cards = [
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

  return (
    <div className="app">
      <Header />
      <main className="app__main">
        {route === "cards" ? (
          <Cards cards={cards} />
        ) : route === "bookmark" ? (
          <Cards cards={cards.filter((e) => e.bookmarked === true)} />
        ) : route === "create" ? (
          <Create />
        ) : (
          <Profile />
        )}
      </main>
      <Navigation route={route} setRoute={setRoute} />
    </div>
  );
}

export default App;
