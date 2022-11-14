import { useEffect } from "react";
import Title from "../src/components/Title";
// import styles from "../styles/rsvp.module.css";

function Rsvp() {
  return (
    <div style={{ maxWidth: 1000, width: "100%" }}>
      <Title text="RSVP" />
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdkC4jF_E8F45DJD7g2OTDp7AHHxazgZEssrTmv4_xDCgowvg/viewform?embedded=true"
        width="100%"
        height="1000"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
      >
        Loading…
      </iframe>
    </div>
  );
}

export default Rsvp;
