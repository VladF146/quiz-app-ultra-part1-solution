import { useNavigate } from "react-router-dom";

export default function Create({ onSubmit }) {
  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const values = Object.fromEntries(data);
    onSubmit({ ...values, tags: [values.tags], id: Math.random() });
    e.target.reset();
    navigate("/");
  }

  let navigate = useNavigate();

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="question" />
        <input type="text" name="answer" />
        <input type="text" name="tags" />
        <button type="submit">Create new card!</button>
      </form>
    </div>
  );
}
