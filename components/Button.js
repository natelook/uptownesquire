import styled from 'styled-components';
import { Blue } from './styles/Colors';

const Btn = styled.button`
  display: inline-block;
  font-size: 23px;
  border: 3px solid ${Blue};
  border-radius: 5px;
  background: none;
  padding: 10px 15px;
  font-weight: 500;
  color: ${props => props.textColor};
  margin-top: ${props => props.marginTop};
  cursor: pointer;

  outline: none;
`;

const Button = props => (
  <Btn textColor={props.textColor} marginTop={props.marginTop}>
    {props.children}
  </Btn>
);

export default Button;
