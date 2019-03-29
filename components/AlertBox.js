import styled from 'styled-components';

const Box = styled.div`
  background-color: #4bb543;
  width: 400px;
  height: 75px;
  position: fixed;
  margin-left: -200px;
  top: ${props => (props.success ? '20px' : '-200px')};
  left: 50%;
  z-index: 30;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  transition: 0.3s;
  opacity: ${props => (props.success ? '1' : '0')};

  i {
    position: absolute;
    top: 5px;
    right: 10px;
  }
`;

const AlertBox = props => (
  <Box success={props.success}>
    <i className="fas fa-times" onClick={props.handleClick} />
    {props.children}
  </Box>
);

export default AlertBox;
