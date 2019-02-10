import styled from 'styled-components';

const Card = styled.div`
  height: 500px;
  width: 300px;
  background-color: #333;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center center;
  border: 4px solid #000;
  position: relative;
  margin: 0 auto;
`;

const Name = styled.div`
  display: flex;
  position: absolute;
  height: 100px;
  bottom: 0;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 22px;
  font-weight: 700;
  background-color: rgba(8, 92, 142, 0.77);
`;

const AttorneyBox = props => (
  <Card image={props.image}>
    <Name>
      <p>{props.name}</p>
    </Name>
  </Card>
);

export default AttorneyBox;
