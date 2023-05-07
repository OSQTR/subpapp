import styled from "styled-components";
import Page from "./pages";

const Container = styled.div`
  margin: 80px 16px 0 16px;
`;

const PageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 850px;
  width: 100%;
  margin: auto;
  justify-content: center;
`;

function Home() {
  return (
    <>
      <Container>
        <h1>Hello World!</h1>
        <PageContainer>
          <Page />
          <Page />
          <Page />
          <Page />
          <Page />
          <Page />
          <Page />
          <Page />
          <Page />
          <Page />
          <Page />
          <Page />
          <Page />
          <Page />
        </PageContainer>
      </Container>
    </>
  );
}

export default Home;
