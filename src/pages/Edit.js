import Card from "../components/card/Card";
import { useParams } from "react-router-dom";

export default function Edit({ cards, onDelete, onToggle }) {
  const { cardId } = useParams();

  return (
    <>
      {cards
        .filter((card) => card.id === +cardId)
        .map((card) => (
          <Card
            key={card.id}
            card={card}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))}
    </>
  );
}
