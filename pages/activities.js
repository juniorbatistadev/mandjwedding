import Title from "../src/components/Title";
import Wordle from "../src/components/Wordle";
import styles from "../styles/games.module.css";

function Activities() {
  return (
    <div style={{ width: "100%" }}>
      <Title text="Activities" />
      <Wordle />
      <h2 style={{ marginTop: 40, marginBottom: 30 }}>Crossword</h2>
      <iframe
        width="100%"
        height="500"
        style={{
          backgroundColor: "white",
          border: "3px solid black",
          margin: "auto",
        }}
        frameBorder="0"
        src="https://crosswordlabs.com/embed/junior-madeline"
      ></iframe>
    </div>
  );
}

export default Activities;
