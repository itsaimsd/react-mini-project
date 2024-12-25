import styled from "styled-components";
import { BASE_URL, Button } from "../../App";

const SearchResult = ({ data }) => {
  return (
    <FoodCardContainer>
      <FoodCards>
        {data?.map(({ image, name, text, price }) => (
          <FoodCard key={name}>
            <div className="food_image">
              <img src={BASE_URL + image} alt={name} />
            </div>
            <div className="food_info">
              <h3>{name}</h3>
              <p>{text}</p>
              <ButtonWrapper>
                <Button>${price.toFixed(2)}</Button>
              </ButtonWrapper>
            </div>
          </FoodCard>
        ))}
      </FoodCards>
    </FoodCardContainer>
  );
};

export default SearchResult;

// Styled Components
const FoodCardContainer = styled.section`
  min-height: calc(100vh - 160px);
  background-image: url("/bg.png");
  background-size: cover;
  background-position: center;
  padding: 20px;
  overflow-y: auto;
`;

const FoodCards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 cards per row */
  gap: 20px;
  padding: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* 2 cards per row for tablets */
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr; /* 1 card per row for mobiles */
  }
`;

const FoodCard = styled.div`
  background: rgba(255, 255, 255, 0.15); /* Light, transparent background */
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  display: flex;
  flex-direction: row;
  padding: 16px;
  align-items: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }

  .food_image {
    flex-shrink: 0;
    width: 100px; /* Slightly bigger circular image */
    height: 100px;
    border-radius: 50%; /* Makes the image circular */
    overflow: hidden;
    margin-right: 16px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .food_info {
    flex: 1;
    color: white;

    h3 {
      margin: 0 0 8px;
      font-size: 18px; /* Bold, larger title */
      font-weight: bold;
    }

    p {
      margin: 0 0 12px;
      font-size: 14px;
      line-height: 1.5;
      color: #ddd; /* Lighter color for description */
    }
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end; /* Button aligned to the bottom-right */
  width: 100%;

  button {
    background-color: #ff4343;
    border: none;
    color: white;
    padding: 8px 16px;
    border-radius: 6px;
    font-size: 14px;
    cursor: pointer;

    &:hover {
      background-color: #ff5e5e;
    }
  }
`;
