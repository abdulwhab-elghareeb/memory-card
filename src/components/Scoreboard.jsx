export default function Scoreboard({ currentScore, highestScore }) {
  return (
    <section>
      <p>Highest score: {highestScore}</p>
      <p>Current score: {currentScore}</p>
    </section>
  );
}
