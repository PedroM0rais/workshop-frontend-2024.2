"use client";

import styles from "./carousel.module.css"
import { useState } from "react";

const images = [
    { src: "/images/mapa1.jpg", alt: "imagem 1" },
    { src: "/images/mapa2.jpg", alt: "imagem 1" },
    { src: "/images/mapa3.jpg", alt: "imagem 1" },
    { src: "/images/mapa4.jpg", alt: "imagem 1" },
    { src: "/images/mapa5.jpg", alt: "imagem 1" },
    { src: "/images/mapa6.jpg", alt: "imagem 1" },
    { src: "/images/mapa7.jpg", alt: "imagem 1" },
]

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (
            prevIndex + 1
        ) % images.length)
    }
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (
            prevIndex - 1
        ) % images.length)
    }

    return(
        <div className={styles.carousel}>
            <button onClick={prevSlide} className={styles.button}>&lt;</button>
                <img 
                    src={images[currentIndex].src} 
                    alt={images[currentIndex].alt} 
                    className={styles.image}
                />
            <button onClick={nextSlide} className={styles.button}>&gt;</button>
        </div>
);

}