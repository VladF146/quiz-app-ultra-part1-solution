import Card from "../components/card/Card";

export default function Cards({ cards, onDelete, onToggle }) {
  return (
    <>
      {cards.map((e) => (
        <Card key={e.id} card={e} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </>
  );
}
