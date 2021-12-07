import { Bathtub, KingBed, Kitchen } from "@material-ui/icons";
import styled from "styled-components";
import { cardData } from "../Data";

const Card = (data) => {
  return (
    <Container data={data}>
      {cardData.map((item) => (
        <Cards>
          <Component>
            <Image src={item.img} />
            <Title>{item.title}</Title>
            <Hr />
            <DetailRoom>
              <Details>
                <KingBed />
                <Size>4</Size>
              </Details>
              <Details>
                <Bathtub />
                <Size>2</Size>
              </Details>
              <Details>
                <Kitchen />
                <Size>1</Size>
              </Details>
            </DetailRoom>
            <Button>SHOW NOW</Button>
          </Component>
        </Cards>
      ))}
    </Container>
  );
};

export default Card;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const Cards = styled.div`
  width: 18rem;
  height: 25rem;
  box-shadow: 0 0 50px #ccc;
  border-radius: 1.5rem;
  margin: 2rem;
  cursor: pointer;
`;

const Component = styled.div``;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 1.5rem;
`;

const Title = styled.h1`
  text-align: center;
  padding: 10px;
  font-size: 20px;
`;

const DetailRoom = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 20px;
`;
const Details = styled.span`
  margin: 5px;
  display: flex;
  align-items: center;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Size = styled.span`
  margin: 7px;
`;

const Button = styled.button`
  padding: 3px;
  cursor: pointer;
  background-color: white;
  color: gray;
  font-weight: 600;
  margin-left: 33%;
  border-radius: 5px;
`;
