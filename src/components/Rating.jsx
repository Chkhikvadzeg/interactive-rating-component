import React, { useState } from 'react'
import starIcon from '../images/icon-star.svg'
import styled from 'styled-components'
import NumberButton from './NumberButton';

export default function Rating({ rating, setRating, setSubmitted }) {
  const numbers = [1, 2, 3, 4, 5];
  const [isError, setIsError] = useState(false);
  return (
    <>
      <StarContainer>
        <img alt='star' src={starIcon} />
      </StarContainer>
      <Heading>How did we do?</Heading>
      <Description>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</Description>
      <Numbers>
        <Error isError={isError}>Choose one of the numbers</Error>
        {numbers.map(number => <NumberButton onClick={() => {
          setIsError(false)
          setRating(number)
        }} chosen={number === rating} key={number} number={number} />)}
      </Numbers>
      <SubmitButton onClick={() => {
        if (rating) {
          setSubmitted(true)
        } else {
          setIsError(true)
        }
      }}>Submit</SubmitButton>
    </>
  )
}

const StarContainer = styled.div`
  background: #262E38;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 48px;
    height: 48px;
  }
`;

const Heading = styled.h1`
  font-size: 1.5rem;
  color: white;
  line-height: 1.5;
  font-weight: 700;
  margin: 16px 0 10px;

  @media screen and (min-width: 768px) {
    font-size: 28px;
    line-height: 35px;
    margin: 30px 0 7px;
  }
`;

const Description = styled.p`
  font-size: .875rem;
  color: #969FAD;
  line-height: 22px;
  font-weight: 400;

  @media screen and (min-width: 768px) {
    font-size: 15px;
    line-height: 24px; 
  }
`;

const Numbers = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 24px 0;
  gap: 4px;
  position: relative;

  @media screen and (min-width: 768px) {
    margin: 32px 0 24px;
    gap: 12px;
  }
`;

const SubmitButton = styled.button`
  background: #FC7614;
  border-radius: 22.5px;
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 0.875rem;
  font-weight: 700;
  border: none;
  text-transform: uppercase;
  letter-spacing: 1.86667px;
  cursor: pointer;

  &:hover {
   background: #FFFFFF;
   color: #FC7614;
  }

  @media screen and (min-width: 768px) {
    font-size: 15px;
    line-height: 19px;
    letter-spacing: 2px;
  }
`

const Error = styled.p`
  position: absolute;
  color: red;
  font-size: 0.7rem;
  font-weight: 700;
  top: -15px;
  margin-bottom: 10px;
  display: ${props => props.isError ? 'block' : 'none'};
`;