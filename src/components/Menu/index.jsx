import Link from "next/link";
import styles from "./index.module.css";
import { useRouter } from "next/router";

function Menu() {
  const router = useRouter();

  return (
    <ul className={styles.menu}>
      <li className={router.pathname == "/" ? styles.active : ""}>
        <Link href="/">Home</Link>
      </li>
      {/* <li className={router.pathname == "/#ourstory" ? styles.active : ""}>
        <Link href="/#ourstory">Our Story</Link>
      </li> */}
      <li className={router.pathname == "/party" ? styles.active : ""}>
        <Link href="/party">Bridal Party</Link>
      </li>
      <li className={router.pathname == "/schedule" ? styles.active : ""}>
        <Link href="/schedule">Schedule</Link>
      </li>
      <li className={router.pathname == "/directions" ? styles.active : ""}>
        <Link href="/directions">Directions</Link>
      </li>
      <li className={router.pathname == "/rsvp" ? styles.active : ""}>
        <Link href="/rsvp">RSVP</Link>
      </li>
      <li className={router.pathname == "/registry" ? styles.active : ""}>
        <Link href="/registry">Registry</Link>
      </li>
      <li className={router.pathname == "/livestream" ? styles.active : ""}>
        <Link href="/livestream">Livestream</Link>
      </li>
    </ul>
  );
}

export default Menu;
