import { useEffect } from "react";
import Title from "../src/components/Title";
// import styles from "../styles/rsvp.module.css";

function Livestream() {
  return (
    <div style={{ maxWidth: 1000, width: "100%" }}>
      <Title text="Livestream" />
      <iframe
        style={{ marginBottom: 40, marginTop: 40 }}
        width="1024"
        height="576"
        src="https://www.youtube.com/embed/1z_STdEOocc"
        title="Wedding M&J"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Livestream;
