import Image from "next/image";
import styles from "../styles/slider.module.css";

export default function Slider(props) {
    const images = [
        "/images/dish/1.jpg",
        "/images/dish/2.jpg",
        "/images/dish/3.jpg",
       
    ]
    return <>
      <div className={styles.sliderContainer}>
       <div className={styles.sliderArrowWrapper} style={{left:0}}>
         <Image src="/chevron-left-solid.svg" alt="" layout="fill"  />
         </div>
       <div className={styles.sliderWrapper}>
       {images.map((image,i) =>{
    return  <div key={i}  
    className={styles.sliderImageContainer}
     >
    
    <Image  src={image}  alt=""  layout="fill" objectFit="contain" />
    </div>
      

       })}
       </div>
       <div className={styles.sliderArrowWrapper} style={{right:0}}>
     <Image src="/chevron-right-solid.svg" alt="" layout="fill" />
      </div>
     
      </div>
    </>

}