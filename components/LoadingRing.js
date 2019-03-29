import styled from 'styled-components';

const LoadingBg = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;

  @media (max-width: 768px) {
    height: 400px;
  }
`;

const Ring = styled.div`
  display: inline-block;
  position: relative;
  width: 64px;
  height: 64px;
  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 51px;
    height: 51px;
    margin: 6px;
    border: 6px solid ${props => props.theme.blue};
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: ${props => props.theme.blue} transparent transparent
      transparent;
  }
  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoadingRing = () => (
  <LoadingBg>
    <Ring>
      <div />
      <div />
      <div />
      <div />
    </Ring>
  </LoadingBg>
);

export default LoadingRing;
