import "./App.css";
import Card from "./components/card/Card";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";

const content = [
  {
    id: 1,
    question: "What is HTML?",
    answer: "A markdown language.",
    tags: ["HTML", "Head", "Body"],
  },
  {
    id: 2,
    question: "What is CSS?",
    answer: "A styling language.",
    tags: ["CSS", "Cascade", "Flexbox"],
  },
  {
    id: 3,
    question: "What is JS?",
    answer: "A programming language.",
    tags: ["JS", "React", "NextJS"],
  },
];

function App() {
  
  return (
    <div className="app">
      <Header />
      <main className="app__main">
        {content.map((e) => (
          <Card
            key={e.id}
            question={e.question}
            answer={e.answer}
            tags={e.tags}
          />
        ))}
      </main>
      <Navigation />
    </div>
  );
}

export default App;
