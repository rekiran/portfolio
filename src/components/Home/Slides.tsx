import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";
import slide1 from "../../assets/react.svg";
export default function Slides() {
  const autoplay = useRef(Autoplay({ delay: 6000, stopOnInteraction: false }));
  return (
    <Carousel
      withIndicators={false}
      height={400}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      withControls={false}
    >
      <Carousel.Slide>
        <Image h={400} fit="contain" src={slide1} alt="slide1" />
      </Carousel.Slide>
      <Carousel.Slide>2</Carousel.Slide>
      <Carousel.Slide>3</Carousel.Slide>
    </Carousel>
  );
}
