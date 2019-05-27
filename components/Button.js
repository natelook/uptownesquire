import styled from 'styled-components';
import { Blue } from './styles/Colors';

const Btn = styled.button`
  display: inline-block;
  font-size: 23px;
  border: 3px solid ${props => props.theme.blue};
  border-radius: 5px;
  background: none;
  padding: 10px 15px;
  font-weight: 500;
  color: ${props => props.textColor};
  margin-top: ${props => props.marginTop};
  cursor: pointer;
  outline: none;
  @media (max-width: 414px) {
    font-size: 14px;
    margin-top: 10px;
    border: 2px solid ${props => props.theme.blue};
  }
`;

const Button = props => (
  <Btn textColor={props.textColor} marginTop={props.marginTop}>
    {props.children}
  </Btn>
);

export default Button;
