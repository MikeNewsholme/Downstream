//importing styles from styles folder
import styles from "../styles/Slider.module.css";
import Image from "next/image";
import {useState} from 'react'



const Slider = () => {
    const [index, setIndex] = useState(0)
    const images = [
      "/img/computertower2.jpg",
      "/img/headset.jpg",
      
      "/img/gfuel.jpg",
      "/img/mouse.jpeg",
      "/img/mousepad.jpg",
    ];
    const handleArrow = (direction) => {
        //if index is not 0, decrease number by 1. If it is 0, it will go to last item in index
        if(direction === 'l'){
            setIndex(index !== 0 ? index -1 : 4)
        }
        //if index is not 4, increase number by 1. If it is 4, it will go to index 0
         if (direction === "r") {
           setIndex(index !== 4 ? index + 1 : 0);
         }

    }
  return (
    <div className={styles.container}>
      <div
        className={styles.arrowContainer}
        style={{ left: 0 }}
        onClick={() => handleArrow("l")}
      >
        <Image
          src="/img/arrowl.png"
          alt="left arrow"
          layout="fill"
          objectFit="contain"
        />
      </div>

      <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
        {images.map((img, i) => (
          <div className={styles.imgContainer} key={i}>
            <Image
              src={img}
              alt=""
              layout='fill'
              objectFit="container"
            />
          </div>
        ))}
      </div>
      <div
        className={styles.arrowContainer}
        style={{ right: 0 }}
        onClick={() => handleArrow("r")}
      >
        <Image
          src="/img/arrowr.png"
          alt="right arrow"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default Slider;
