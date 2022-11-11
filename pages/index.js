import styles from "../styles/Home.module.css";
import coverImage from "../assets/images/cover.jpg";
import Image from "next/image";
import Moment from "react-moment";
import Title from "../src/components/Title";
import paper from "../assets/images/paper.png";
import paperTop from "../assets/images/paperTop.png";
import dark from "../assets/images/dark.jpg";
import { atcb_init } from "add-to-calendar-button";
import { useEffect } from "react";
import "add-to-calendar-button/assets/css/atcb.css";
import ourstory1 from "../assets/images/ourstory1.jpg";
import ourstory2 from "../assets/images/ourstory2.jpg";
import ourstory3 from "../assets/images/ourstory3.jpg";
import ourstory4 from "../assets/images/ourstory4.jpg";
import Link from "next/link";
import { TfiPencil } from "react-icons/tfi";
import { GrGroup } from "react-icons/gr";
import { SlCalender } from "react-icons/sl";
import { GiDirectionSign } from "react-icons/gi";
import { HiOutlineClipboardList } from "react-icons/hi";

export default function Home() {
  let date = new Date("2023-04-23");
  let date2 = new Date(Date.now());

  let difference = date.getTime() - date2.getTime();
  let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));

  useEffect(() => {
    atcb_init();
  }, []);

  return (
    <div className={styles.container}>
      <div style={{ maxWidth: 1000 }}>
        <div className={styles.imageCover}>
          <img src={coverImage.src} className={styles.coverImg} />
        </div>

        <div style={{ marginTop: 40, marginBottom: 40 }} id="ourstory">
          <Title text="Our Story" />
        </div>
        <div className={[styles.storyBlock, styles.right].join(" ")}>
          <p className={styles.text}>
            About five years ago, Madeline and Junior were two strangers in
            different countries. In 2018, Junior served as staff at YWAM San
            Pedro while Madeline juggled post high school options and
            opportunities. Madeline knew she wanted to continue studying- but
            didn’t know where, when, how, or even what. Through lots of question
            asking, prayer, and conversations, she felt God leading her to a
            “gap year”, before college. She waded through dozens of different
            programs until finding
            <a
              href="https://www.ywamsanpedro.org"
              target="_blank"
              rel="noreferrer"
            >
              YWAM (Youth With A Mission)
            </a>
            , leading her to the base in San Pedro, Dominican Republic
          </p>
          <div className={styles.imgContainer}>
            <img src={ourstory4.src} />
          </div>
        </div>

        <div className={[styles.storyBlock, styles.left].join(" ")}>
          <div className={styles.imgContainer}>
            <img src={ourstory1.src} />
          </div>
          <p className={styles.text}>
            Junior had been serving at the base since 2016 in a variety of
            different roles- media, technology support, helping and leading
            kids’ camps, assisting with teams and house builds, and became a DTS
            leader the year Madeline came as a student in September of 2018. The
            school was six months, where the team of eight studied Scripture and
            later went to Colombia to challenge and apply the first couple
            months of learning. During this period in Colombia, Junior and
            Madeline noticed a mutual interest and pull towards one another,
            beginning to voice that to each other and pray for clarity and
            guidance.
          </p>
        </div>

        <div className={[styles.storyBlock, styles.right].join(" ")}>
          <p className={styles.text}>
            Three months after the school had ended, Madeline came back to the
            DR as temporary staff for the summer. It was during these couple
            months that their relationship officially began. Over the past four
            years, they have made hundreds of video calls, bought lots of flight
            tickets, and learned to maneuver the joys and challenges that come
            with long distance relationships. The past couple years have
            included long, difficult months of diagnosis and treatment, awaiting
            a slow-moving visa (it took X months!), loss of a brother, and
            discovering how hard it is to be away from someone so special in the
            difficult, mundane, and happy. However, we have also learned the
            importance of being intentional in our communication, finding unique
            ways to love each other over the distance, and the blessing it is to
            do life with someone you love.
          </p>
          <div className={styles.imgContainer}>
            <img src={ourstory2.src} />
          </div>
        </div>
        <div className={[styles.storyBlock, styles.left].join(" ")}>
          <div className={styles.imgContainer}>
            <img src={ourstory3.src} />
          </div>
          <p className={styles.text}>
            We are not sure what our future holds- where we will be living, what
            we will be doing; we do know that we will be doing it together. For
            now, we are looking forward to settling down in Harrisonburg. We are
            thankful for health, an approved visa, a supporting, loving, and
            present family and community, and this special season of celebrating
            our commitment with others. God is so good, and we are so blessed.
            Thank you all for your messages, prayers, concern, and love over the
            years.
          </p>
        </div>
      </div>

      <div
        style={{
          background: `url(${dark.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <img src={paper.src} style={{ width: "100%", zIndex: 10 }} />
        <div
          style={{
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p className={styles.start}>Let &apos;s start the adventure!</p>
          <p
            style={{
              color: "white",
              fontSize: 30,
              margin: 5,
            }}
          >
            {TotalDays} days until the wedding!
          </p>
          <div className="atcb">
            {"{"}
            &quot;name&quot;:&quot;Madeline and Junior Wedding&quot;,
            &quot;description&quot;:&quot;Madeline and Junior are starting their
            lives together.&quot;, &quot;startDate&quot;:&quot;2023-04-23&quot;,
            &quot;endDate&quot;:&quot;2023-04-23&quot;,
            &quot;startTime&quot;:&quot;13:05&quot;,
            &quot;endTime&quot;:&quot;18:00&quot;,
            &quot;location&quot;:&quot;STANARDSVILLE, VA&quot;,
            &quot;label&quot;:&quot;Add to Calendar&quot;, &quot;options&quot;:[
            &quot;Apple&quot;, &quot;Google&quot;, &quot;iCal&quot;,
            &quot;Microsoft365&quot;, &quot;MicrosoftTeams&quot;,
            &quot;Outlook.com&quot;, &quot;Yahoo&quot; ],
            &quot;timeZone&quot;:&quot;EST&quot;,
            &quot;trigger&quot;:&quot;click&quot;, &quot;inline&quot;:true,
            &quot;listStyle&quot;:&quot;modal&quot;,
            &quot;iCalFileName&quot;:&quot;Reminder-Event&quot;
            {"}"}
          </div>
        </div>

        <img src={paperTop.src} style={{ width: "100%", zIndex: 10 }} />
      </div>

      <div
        className={styles.menuIcons}
        style={{ marginTop: 70, marginBottom: 100, maxWidth: 1000 }}
      >
        <div className={styles.iconOption}>
          <TfiPencil />
          <Link href={"/#ourstory"}>Our Story</Link>
        </div>
        <div className={styles.iconOption}>
          <GrGroup />
          <Link href={"/party"}>Bridal Party</Link>
        </div>
        <div className={styles.iconOption}>
          <SlCalender />
          <Link href={"/schedule"}>Schedule</Link>
        </div>
        <div className={styles.iconOption}>
          <GiDirectionSign />
          <Link href={"/directions"}>Directions</Link>
        </div>
        <div className={styles.iconOption}>
          <HiOutlineClipboardList />
          <Link href={"/registry"}>Registry</Link>
        </div>
      </div>
      <div
        style={{
          width: "70%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: 100,
          maxWidth: 1000,
        }}
      >
        <p
          style={{
            fontFamily: "Tangerine",
            fontSize: 32,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          We wait in hope for the Lord; he is our help and our shield. In him
          our hearts rejoice, for we trust in his holy name. May your unfailing
          love be with us, Lord, even as we put our hope in you.
        </p>
        <p
          style={{
            fontFamily: "Tangerine",
            fontSize: 30,
            marginTop: 10,
            fontWeight: "bold",
          }}
        >
          Psalm 33:20-22
        </p>
      </div>
    </div>
  );
}
