import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  to { -webkit-transform: rotate(360deg); }
`;

export const SpinnerWrapper = styled.div`
  padding-top: 30px;
`;

export const Spinner = styled.div`
  width: 75px;
  height: 75px;
  border: 9px solid #23619a;
  border-right-color: transparent;
  border-radius: 50%;
  box-sizing: border-box;
  animation: ${rotate360} 1s infinite linear;
  display: inline-block;
`;
