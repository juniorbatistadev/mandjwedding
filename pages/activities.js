import Title from "../src/components/Title";
import styles from "../styles/games.module.css";

function Activities() {
  return (
    <div style={{ width: "100%" }}>
      <Title text="Activities" />
      <iframe
        width="100%"
        height="500"
        style={{
          marginTop: 50,
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
