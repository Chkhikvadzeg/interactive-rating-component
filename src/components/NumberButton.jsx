import styled from "styled-components";
const NumberButton = ({ number, onClick, chosen }) => {
  return (
    <Button chosen={chosen} onClick={() => onClick(number)}>
      {number}
    </Button>
  );
}

const Button = styled.button`
  background: ${props => props.chosen ? '#7C8798' : '#262E38'};
  border-radius: 50%;
  width: 42px;
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.chosen ? 'white' : '#7C8798'};
  font-size: 0.875rem;
  font-weight: 700;
  border: none;
  cursor: pointer;

  /* if chosen hover */
  ${props => !props.chosen && `
    &:hover {
      background: #FC7614;
      color: white;      
    }`}

  @media screen and (min-width: 768px) {
    width: 42px;
    height: 42px; 
  }
  
`;

export default NumberButton;