import styles from "./index.module.css";
import Carousel from "nuka-carousel/lib/carousel";

function Slider() {
  const images = [
    "/slideshow/slide (1).jpg",
    "/slideshow/slide (2).jpg",
    "/slideshow/slide (3).jpg",
    "/slideshow/slide (4).jpg",
  ];

  return (
    // <div className={styles.container} >
    <Carousel
      wrapAround={true}
      slidesToShow={4}
      className={styles.container}
      autoplay={true}
      withoutControls={true}
    >
      {images.map((image) => (
        <img src={image} className={styles.image} />
      ))}
    </Carousel>
    // </div>
  );
}

export default Slider;
