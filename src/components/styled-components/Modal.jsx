import styled, { css } from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: #ffffff;
  border-radius: 10px;
  border: 1px solid #d0011c;
  width: 570px;
  padding: 0px 20px;
  font-weight: 500;
  ${(props) => props.loadingModal && css`
    text-align: center;
    color: #297abb;
    font-size: 20px;
  `}
  
  > p {
    margin-left: 10px;
    font-size: 18px;
  }
`;

export const ModalTitle = styled.div`
  display: flex;
  line-height: 20px;
  font-weight: bold;
  margin: 20px 10px;
  font-size: 20px;
  border-bottom: 1px #e7e7e7 solid; 
`;

export const WarningSignContainer = styled.div`
   margin-right: 10px;
   span {
    color: red;
   }
`;

export const StyledSelect = styled.select`
    width: inherit;
    color: #4879a9;
    font-size: 14px;
    
    span {
      font-weight: 700;
    }
`;
