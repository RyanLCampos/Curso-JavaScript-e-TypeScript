import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #88032bff;
  font-size: 45px;
  font-weight: bold;

  div {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(240, 240, 240, 0.62);
  }

  section {
    margin-left: 10px;
    z-index: 2;
  }
`;
