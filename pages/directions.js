import Title from "../src/components/Title";
import styles from "../styles/directions.module.css";

function Directions() {
  return (
    <div style={{ maxWidth: 1000 }}>
      <Title text="Directions" />
      <div>
        <p className={styles.text} style={{ marginTop: 50 }}>
          The Golden Horseshoe Inn is located at:
        </p>
        <p className={styles.text}>
          9 Golden Horseshoe Rd. Stanardsville, Virginia 22973
        </p>
        <p
          style={{ marginTop: 70, fontSize: 22, marginBottom: 30 }}
          className={styles.text}
        >
          <b>HELPFUL TIP:</b> If using GPS / Navigation please type in our FULL
          street name (there is also a Horseshoe Rd. in Stanardsville - so be
          sure not to forget the "Golden" portion of our street name!)
        </p>
        <p className={styles.text} style={{ fontSize: 22, marginBottom: 30 }}>
          <b>FROM ROUTE 33 WEST:</b> If you are traveling West on Route 33 -
          look for the Lydia Log Cabin building on your LEFT with the RED TIN
          ROOF - we are the very next LEFT on ROUTE 625. If you pass a sign that
          says "Now Entering Shenandoah National Park" you have gone too far.
        </p>
        <p className={styles.text} style={{ fontSize: 22 }}>
          <b>FROM ROUTE 33 EAST:</b> If you are heading East on Route 33 we are
          the first RIGHT after coming down the mountains and passing the sign
          that says "Now Leaving Shenandoah National Park"
        </p>
        <p
          className={styles.text}
          style={{ fontSize: 22, marginTop: 25, marginBottom: 25 }}
        >
          Lost? <a href="tel:434-566-2555">Call 434-566-2555</a> .
        </p>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3129.434521340631!2d-78.5070909!3d38.338923799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b46677cfe751f3%3A0x6bc3bee2ad6e17d9!2s9%20Golden%20Horseshoe%20Rd%2C%20Stanardsville%2C%20VA%2022973%2C%20USA!5e0!3m2!1sen!2sdo!4v1668128889628!5m2!1sen!2sdo"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowfullscreen="true"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Directions;
