import styled from "styled-components";
import SubmittedImg from '../images/illustration-thank-you.svg'

const Submitted = ({ rating }) => {
  return (
    <Container>
      <Image src={SubmittedImg} alt="illustration" />
      <SelectedRating>You selected {rating} out of 5</SelectedRating>
      <Thanks>
        <h1>Thank you!</h1>
        <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
      </Thanks>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`

const Image = styled.img`
  width: 144px;
  height: 96px;

  @media screen and (min-width: 768px) {
    width: 162px;
    height: 108px;
  }
`;

const SelectedRating = styled.div`
  background: #262E38;
  border-radius: 22.5px;
  padding: 5px 12px;
  font-weight: 400;
  font-size: 0.875rem;
  color: #FC7614;

  @media screen and (min-width: 768px) {
    padding: 4px 20px;
    font-size: 15px;
    line-height: 24px;
  }
`

const Thanks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  text-align: center;

  h1 {
    font-size: 1.5rem;
    color: white;
    line-height: 1.5;
    font-weight: 700;
  }

  p {
    font-size: .875rem;
    color: #969FAD;
    line-height: 22px;
    font-weight: 400;
  }

  @media screen and (min-width: 768px) {
    gap: 7px;

    h1 {
      font-size: 28px;
      line-height: 35px;
    }

    p {
      font-size: 15px;
      line-height: 24px;
    }
  }
`



export default Submitted;