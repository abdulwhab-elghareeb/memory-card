import "../styles/Scoreboard.css";

export default function Scoreboard({ currentScore, highestScore }) {
  return (
    <section className="scoreboard">
      <p>Highest score: {highestScore}</p>
      <p>Current score: {currentScore}</p>
    </section>
  );
}
