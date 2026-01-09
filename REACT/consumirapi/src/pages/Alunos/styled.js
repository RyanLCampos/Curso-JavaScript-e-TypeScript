import styled from 'styled-components';

import { Button } from '@material-tailwind/react';
import * as colors from '../../config/colors';

export const AlunoContainer = styled.div`
  margin-top: 20px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
  }

  div + div {
    border-top: 1px solid #a8a8a896;
  }
`;

export const Titulo = styled.h1`
  color: ${colors.primaryDarkColor};
  font-size: 27px;
  margin-bottom: 6px;
`;

export const ProfilePicture = styled.div`
  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
  }
`;

export const Container = styled.section`
  max-width: 700px;
  background: #fff;
  margin: 50px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

export const StyledButton = styled(Button)`
  background: ${colors.primaryColor};
  color: #fff;

  transition: all 250ms;
  font-weight: bold;

  &:hover {
    filter: brightness(90%);
    background: transparent;
    border: 2px solid ${colors.primaryColor};
    color: ${colors.primaryColor};
  }
`;
