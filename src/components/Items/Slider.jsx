import { Slide } from "react-slideshow-image";

import "react-slideshow-image/dist/styles.css";
import styles from "./Slider.module.css";

export default function Slider({ images }) {
  return (
    <div className={styles.container}>
      <Slide easing="ease">
        {images.map((image, index) => {
          return (
            <div className={styles.slide} key={index}>
              <div style={{ backgroundImage: `url(${image})` }}>
              </div>
            </div>
          );
        })}
      </Slide>
    </div>
  );
}
