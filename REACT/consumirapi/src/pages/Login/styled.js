import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  input {
    border: 1px solid #888888ff;
    height: 40px;
    padding-left: 10px;
    border-radius: 4px;
    margin-top: 5px;

    &:focus {
      border: 1px solid ${colors.primaryColor};
    }
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    margin-top: 20px;
    width: 70%;
  }
`;
