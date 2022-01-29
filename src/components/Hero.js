/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState, useRef, useEffect } from "react";
import styled, { css, keyframes } from "styled-components/macro";
import { Button } from "./Button";
// import { IoMdArrowRoundForward } from "react-icons/io";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import "animate.css";

const HeroSection = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;
`;

const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const HeroSlide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;
const HeroSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.4;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.6) 100%);
  }
`;

const FadeInImg = keyframes`
  0% {
    opacity: 0.5;
  }
  50%{
    opacity: 1;
  }
`;

const FadeInText = keyframes`
  0%{
    transform: translateY(-50px);
  }
  100%{
    transform: translateY(0px);
  }
`;

const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  /* transition: 0.5s ease-in-out; */
  animation: ${FadeInImg} 4s ease-in-out;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  width: calc(100% - 100px);
  color: #fff;

  h1 {
    font-size: clamp(1rem, 8vw, 7rem);
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    text-align: left;
    margin-bottom: 0.8rem;
    animation: ${FadeInText} 1s ease-in-out;
  }

  p {
    margin-bottom: 1.2rem;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    animation: ${FadeInText} 1s ease-in-out;
  }

  a {
    text-align: center;
  }
`;

// const Arrow = styled(IoMdArrowRoundForward)`
//   vertical-align: middle;
//   margin-left: 0.5rem;
// `;

const arrowButtons = css`
  width: 50px;
  height: 50px;
  color: #fff;
  cursor: pointer;
  user-select: none;
  transition: 0.3s;
  opacity: 0.5;

  &:hover {
    color: #cd853f;
    opacity: 1;
    transform: scale(1.3);
  }
`;

const SliderButtonsRight = styled.div`
  position: absolute;
  right: 30px;
  display: flex;
  z-index: 10;
`;

const SliderButtonsLeft = styled.div`
  position: absolute;
  left: 30px;
  display: flex;
  z-index: 10;
`;

const PrevArrow = styled(MdArrowBackIos)`
  ${arrowButtons}
`;

const NextArrow = styled(MdArrowForwardIos)`
  ${arrowButtons}
`;

const Hero = ({ slides }) => {
  const [isSlide, setSlide] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  const nextSlide = () => {
    setSlide(isSlide === length - 1 ? 0 : isSlide + 1);
  };

  const PrevSlide = () => {
    setSlide(isSlide === 0 ? length - 1 : isSlide - 1);
  };

  // auto change slide
  useEffect(() => {
    const autonextSlide = () => {
      setSlide((isSlide) => (isSlide === length - 1 ? 0 : isSlide + 1));
    };
    console.log(timeout.current);
    timeout.current = setTimeout(autonextSlide, 3000);

    return function () {
      if (timeout.current) {
        console.log("clearnup");
        clearTimeout(timeout.current);
      }
    };
  });

  // Check if slides is an array or not enought link

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <HeroSection>
      <HeroWrapper>
        {slides.map((slide, index) => {
          return (
            <HeroSlide key={index}>
              {index === isSlide && (
                <HeroSlider>
                  <HeroImage src={slide.image} alt={slide.alt} />
                  <HeroContent>
                    <h1>{slide.title}</h1>
                    <p>{slide.price}</p>
                    <Button
                      to={slide.path}
                      primary
                      css={`
                        display: inline-block;
                        max-width: 160px;
                        animation: ${FadeInText} 1s ease-in-out;
                      `}
                    >
                      {slide.label}
                    </Button>
                  </HeroContent>
                </HeroSlider>
              )}
            </HeroSlide>
          );
        })}
        <SliderButtonsLeft>
          <PrevArrow onClick={PrevSlide} />
        </SliderButtonsLeft>
        <SliderButtonsRight>
          <NextArrow onClick={nextSlide} />
        </SliderButtonsRight>
      </HeroWrapper>
    </HeroSection>
  );
};

export default Hero;
