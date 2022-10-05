import Card from "../components/card/Card";
import { useParams, Outlet } from "react-router-dom";

export default function Cards({ cards, onDelete, onToggle }) {
  const { cardId } = useParams();

  if (cardId) {
    return <Outlet />;
  } else {
    return (
      <>
        {cards.map((e) => (
          <Card key={e.id} card={e} onDelete={onDelete} onToggle={onToggle} />
        ))}
      </>
    );
  }
}
