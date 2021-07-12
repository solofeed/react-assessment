import styled, { css } from 'styled-components';

export const ButtonsGroup = styled.div`
  margin: 30px 0px;
  width: 100%;
  ${(props) => props.center && css`
    justify-content: center;
    display: flex;
  `}
  ${(props) => props.right && css`
    justify-content: flex-end;
    display: flex;
  `}
`;

export const Button = styled.button`
  min-width: 120px;
  color: #23619a;
  background: transparent;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 700;
  height: 42px;
  margin: 5px;
  padding: 0em 2em;
  cursor: pointer;
  border: 1px solid #23619a;  
  ${(props) => props.primary && css`
    background: #e8f4ff;
    color: #326ba1;
  `}
  ${(props) => props.closeBtn && css`
    transform: scale(0.7);
    position: absolute;
    right: -5px;
    top: -5px;
  `}
`;
