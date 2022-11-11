import React from "react";
import Title from "../src/components/Title";
import styles from "../styles/party.module.css";
import dakota from "../assets/images/bm.jpg";
import marya from "../assets/images/bm2.jpg";

function Party() {
  console.log(marya, dakota);
  return (
    <div style={{ maxWidth: 1000 }}>
      <Title text="Bridal Party" />
      <div
        style={{
          display: "flex",
        }}
        className={styles.sections}
      >
        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>Bridemaids</h2>
          <div className={styles.person}>
            <img className={styles.avatar} src={marya.src} />
            <p className={styles.name}>Marya Miller</p>
            <p className={styles.job}>Maid of Honor</p>
          </div>
          <div className={styles.person}>
            <img className={styles.avatar} src={dakota.src} />
            <p className={styles.name}>Dakota Kautz</p>
            <p className={styles.job}>Bridemaid</p>
          </div>
          <div className={styles.person}>
            <img
              className={styles.avatar}
              src="https://d44ri6pmeripj.cloudfront.net/morilee/wp-content/uploads/2022/04/05173554/product_img_21791_gallery_img_1-scaled.jpg"
            />
            <p className={styles.name}>Rachel Hegdhal</p>
            <p className={styles.job}>Bridemaid</p>
          </div>
          <div className={styles.person}>
            <img
              className={styles.avatar}
              src="https://d44ri6pmeripj.cloudfront.net/morilee/wp-content/uploads/2022/04/05173554/product_img_21791_gallery_img_1-scaled.jpg"
            />
            <p className={styles.name}>Anna Bower</p>
            <p className={styles.job}>Bridemaid</p>
          </div>
          <div className={styles.person}>
            <img
              className={styles.avatar}
              src="https://d44ri6pmeripj.cloudfront.net/morilee/wp-content/uploads/2022/04/05173554/product_img_21791_gallery_img_1-scaled.jpg"
            />
            <p className={styles.name}>Jaima DeWitt</p>
            <p className={styles.job}>Bridemaid</p>
          </div>
          <div className={styles.person}>
            <img
              className={styles.avatar}
              src="https://d44ri6pmeripj.cloudfront.net/morilee/wp-content/uploads/2022/04/05173554/product_img_21791_gallery_img_1-scaled.jpg"
            />
            <p className={styles.name}>Joanna Erwin</p>
            <p className={styles.job}>Bridemaid</p>
          </div>
        </div>
        <div className={styles.section + " " + styles.groommen}>
          <h2 className={styles.sectionTitle}>Groomsmen</h2>
          <div className={styles.person}>
            <img
              className={styles.avatar}
              src="https://scontent.fhex4-1.fna.fbcdn.net/v/t1.6435-9/97795766_235364401222613_3788460716155994112_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHBg6G3mVmEMBo4sW8MSzRv_tPC4pyvP1_-08LinK8_X4NFZ0LqYQvDQzCDr5hU4U63BJWX_4KlJlTi1xCDYJnE&_nc_ohc=cKe3r1Eb65cAX8mvUig&_nc_ht=scontent.fhex4-1.fna&oh=00_AfDLWcQ6ar24O_aqQN_jYUNKWlHFRkfWrtwbcvs9F2rZEA&oe=638D045D"
            />
            <p className={styles.name}>Jose Angel</p>
            <p className={styles.job}>Bestman</p>
          </div>
          <div className={styles.person}>
            <img
              className={styles.avatar}
              src="https://www.mensweddingstyle.com/wp-content/uploads/2021/06/linen-suit-1.jpg"
            />
            <p className={styles.name}>Caleb Despain </p>
            <p className={styles.job}>Groomsmen</p>
          </div>
          <div className={styles.person}>
            <img
              className={styles.avatar}
              src="https://www.mensweddingstyle.com/wp-content/uploads/2021/06/linen-suit-1.jpg"
            />
            <p className={styles.name}>David Kody</p>
            <p className={styles.job}>Groomsmen</p>
          </div>
          <div className={styles.person}>
            <img
              className={styles.avatar}
              src="https://www.mensweddingstyle.com/wp-content/uploads/2021/06/linen-suit-1.jpg"
            />
            <p className={styles.name}>Branden Dahlberg</p>
            <p className={styles.job}>Groomsmen</p>
          </div>
          <div className={styles.person}>
            <img
              className={styles.avatar}
              src="https://www.mensweddingstyle.com/wp-content/uploads/2021/06/linen-suit-1.jpg"
            />
            <p className={styles.name}>Breylon Miller</p>
            <p className={styles.job}>Groomsmen</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Party;
