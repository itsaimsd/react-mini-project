import styled from "styled-components";

const App = () => {
  return (
    <Container>
      <TopContainer>
        <div className="logo">
          <img src="/Foody Zone.svg" alt="logo" />
        </div>

        <div className="search">
          <input placeholder="Search Food" />
        </div>
      </TopContainer>
    </Container>
  );
};

export default App;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const TopContainer = styled.div`
  min-height: 140px;
  display: flex;
  justify-content: space-between ;
  padding: 16px;
  align-items: center;
`;