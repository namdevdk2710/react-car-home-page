import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import { SCREENS } from "../../components/responsive";
import { Button } from "../../components/button";

import MclarenCarImg from "../../../assets/images/mclaren-orange-big.png";
import BlobImg from "../../../assets/images/blob.svg";

const TopSectionContainer = styled.div`
  min-height: 400px;
  margin-top: 6em;
  ${tw`
    w-full
    max-w-screen-2xl
    flex
    justify-between
    px-3
    lg:px-12
  `}
`;

const LeftContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
  `}
`;

const RightContainer = styled.div`
  ${tw`
    w-1/2
    flex
    flex-col
    relative
    mt-20
  `}
`;

const Slogan = styled.h1`
  ${tw`
    font-bold
    text-2xl
    text-black
    mb-4
    sm:text-3xl
    sm:leading-snug
    md:text-5xl
    md:font-extrabold
    lg:font-black
    lg:leading-normal
    xl:text-6xl
    xl:leading-relaxed
  `}
`;

const Description = styled.p`
  ${tw`
    text-xs
    overflow-hidden
    max-h-12
    text-gray-800
    sm:max-h-full
    lg:text-sm
    xl:text-xl
  `}
`;

const BlobContainer = styled.div`
  width: 20em;
  height: 10em;
  position: absolute;
  right: -5em;
  top: -9em;
  z-index: -1;
  transform: rotate(-30deg);

  img {
    height: auto;
    width: 100%;
    max-height: max-content;
  }

  @media (min-width: ${SCREENS.sm}) {
    width: 40em;
    max-height: 10em;
    right: -9em;
    top: -16em;
    transform: rotate(-25deg);
  }

  @media (min-width: ${SCREENS.lg}) {
    width: 50em;
    max-height: 30em;
    right: -7em;
    top: -15em;
    transform: rotate(-30deg);
  }

  @media (min-width: ${SCREENS.xl}) {
    width: 70em;
    max-height: 30em;
    right: -15em;
    top: -25em;
    transform: rotate(-20deg);
  }
`;

const StandaloneCar = styled.div`
  width: auto;
  height: 10em;
  position: absolute;
  right: -6em;
  top: -5em;

  img {
    height: 100%;
    width: auto;
    max-height: fit-content;
  }

  @media (min-width: ${SCREENS.sm}) {
    height: 16em;
    right: -6em;
    top: -6em;
  }

  @media (min-width: ${SCREENS.lg}) {
    height: 21em;
    right: -8em;
    top: -5em;
  }

  @media (min-width: ${SCREENS.xl}) {
    height: 30em;
    right: -13em;
    top: -9em;
  }
`;

const ButtonContainer = styled.div`
  ${tw`
    flex
    flex-wrap
    mt-4
  `}
`;

export function TopSection() {
  return (
    <TopSectionContainer>
      <LeftContainer>
        <Slogan>Rent The Best Quality Car's With Us</Slogan>
        <Description>
          Always choose the best car from our local stores or order it remotely
          at the best price for you and get the best quality cars for as long as
          as you like
        </Description>

        <ButtonContainer>
          <Button text="Book Your Ride" />
          <Button theme="filled" text="Sell Your Car" />
        </ButtonContainer>
      </LeftContainer>
      <RightContainer>
        <BlobContainer>
          <img src={BlobImg} alt="" />
        </BlobContainer>
        <StandaloneCar>
          <img src={MclarenCarImg} alt="" />
        </StandaloneCar>
      </RightContainer>
    </TopSectionContainer>
  );
}
