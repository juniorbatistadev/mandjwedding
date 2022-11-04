import React from "react";
import Title from "../src/components/Title";
import styles from "../styles/party.module.css";

function Party() {
  return (
    <div>
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
            <img
              className={styles.avatar}
              src="https://scontent.fhex4-1.fna.fbcdn.net/v/t39.30808-6/304852095_112933184879953_6862252517039656991_n.jpg?stp=cp6_dst-jpg&_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEfDH5FJM8ONRjQke6vBdgIcIRz0CHvZLBwhHPQIe9ksKwhG3j3oLK0PzlonX5PGuM1xqKsmkbK6E4qViWhWKyO&_nc_ohc=RQEmg8-6x34AX_k3ru2&_nc_ht=scontent.fhex4-1.fna&oh=00_AfA1rTTz-knOrXE8cWV14IOMIzH5wCx-Z7YBgmLPgq3I5Q&oe=636A97BF"
            />
            <p className={styles.name}>Marya Miller</p>
          </div>
          <div className={styles.person}>
            <img
              className={styles.avatar}
              src="https://scontent.fhex4-2.fna.fbcdn.net/v/t1.6435-9/53393893_2235911566528177_2241761680545546240_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEGTRCWfyKxJI1rUIsgEDgjf7hfHId3skR_uF8ch3eyRAX4xxwURVBYnlVnfrxOe7ClMifI153wkI6Leo1z9dRD&_nc_ohc=F8oJZrQj-K4AX9dkQ5d&_nc_ht=scontent.fhex4-2.fna&oh=00_AfDLejk9nequdDuNLelosHwzaP-qLfhlIzKZC1fSQl7xiQ&oe=638D1A15"
            />
            <p className={styles.name}>Dakota Kautz</p>
          </div>
          <div className={styles.person}>
            <img
              className={styles.avatar}
              src="https://scontent.fhex4-2.fna.fbcdn.net/v/t39.30808-6/273433501_3123415847917367_4954445433407627422_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE0xyzy33MJsXJ272hzEUiI4_zQP6RACknj_NA_pEAKSdOeEeDl495uPeDMFBgl4wYBptPXluFASJEH4pW9AefE&_nc_ohc=dDexr_wg6nEAX-juDDL&_nc_ht=scontent.fhex4-2.fna&oh=00_AfCPMEfFEwcdvZCGvyZFrnrabHQqLtWibxcEJ0z92zOklA&oe=636ABF1A"
            />
            <p className={styles.name}>Rachel Hegdhal</p>
          </div>
          <div className={styles.person}>
            <img
              className={styles.avatar}
              src="https://scontent.fhex4-1.fna.fbcdn.net/v/t39.30808-6/299856206_1459942214472553_6572516323135144324_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEoQU5VQd-C1EzSL0L68I-35Any3Z4fwKzkCfLdnh_ArLd7AO9rKX7OQlhS0ldOz_tGIHkIsowRP-86QQDm-4kP&_nc_ohc=c13u_LH4h48AX_n41IY&_nc_ht=scontent.fhex4-1.fna&oh=00_AfAzciwoLRW3rCLd7XDmZrtRAQTiuHxlWXJ_w299Ks3MlQ&oe=6369F80F"
            />
            <p className={styles.name}>Anna Bower</p>
          </div>
          <div className={styles.person}>
            <img
              className={styles.avatar}
              src="https://d44ri6pmeripj.cloudfront.net/morilee/wp-content/uploads/2022/04/05173554/product_img_21791_gallery_img_1-scaled.jpg"
            />
            <p className={styles.name}>Jaima DeWitt</p>
          </div>
          <div className={styles.person}>
            <img
              className={styles.avatar}
              src="https://d44ri6pmeripj.cloudfront.net/morilee/wp-content/uploads/2022/04/05173554/product_img_21791_gallery_img_1-scaled.jpg"
            />
            <p className={styles.name}>Joanna Erwin</p>
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
          </div>
          <div className={styles.person}>
            <img
              className={styles.avatar}
              src="https://www.mensweddingstyle.com/wp-content/uploads/2021/06/linen-suit-1.jpg"
            />
            <p className={styles.name}>Caleb Despain </p>
          </div>
          <div className={styles.person}>
            <img
              className={styles.avatar}
              src="https://scontent.fhex4-2.fna.fbcdn.net/v/t39.30808-6/270229089_10158134350246932_4673730436150890678_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHK5T0DBRcBDwkcOkKLBNN2JUeHWEx1vaAlR4dYTHW9oJhonpESAbPzFTqULo4iSGAe45GjWYjcbRHA2Yu0k6XS&_nc_ohc=LSWa6TAav6oAX9fY98T&_nc_ht=scontent.fhex4-2.fna&oh=00_AfBNz206QhbIyujcJDMde3aSFcJK_1PcVbD198iySYzZfw&oe=636B047D"
            />
            <p className={styles.name}>David Kody</p>
          </div>
          <div className={styles.person}>
            <img
              className={styles.avatar}
              src="https://www.mensweddingstyle.com/wp-content/uploads/2021/06/linen-suit-1.jpg"
            />
            <p className={styles.name}>Branden Dahlberg</p>
          </div>
          <div className={styles.person}>
            <img
              className={styles.avatar}
              src="https://www.mensweddingstyle.com/wp-content/uploads/2021/06/linen-suit-1.jpg"
            />
            <p className={styles.name}>Breylon Miller</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Party;
