import Card from "../components/card/Card";

export default function Cards({ cards }) {
  return (
    <>
      {cards.map((e) => (
        <Card
          key={e.id}
          card={e}
        />
      ))}
    </>
  );
}
