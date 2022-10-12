import styled from "styled-components";
import { useState } from "react";
import Rating from "./components/Rating";
import Submitted from "./components/Submitted";

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState();
  return (
    <Container>
      <Content>
        {!submitted
          ? <>
            <Rating rating={rating} setRating={setRating} setSubmitted={setSubmitted} />
          </>
          : <Submitted rating={rating} />}
      </Content>

    </Container>
  );
}

const Container = styled.div`
        height: 100vh;
        padding-inline: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
`;

const Content = styled.div`
  max-width: 327px;
  width: 100%;
  background: radial-gradient(98.96% 98.96% at 50% 0%, #232A34 0%, #181E27 100%);
  border-radius: 15px;
  padding: 24px 24px 32px;
`;

export default App;
