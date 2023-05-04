import styled from "styled-components";

const Container = styled.div`
  color: #555555;
  margin: 80px 16px 0 16px;
`;

function Home() {
  return (
    <>
      <Container>
        <h1>Hello World!</h1>
      </Container>
    </>
  );
}

export default Home;
