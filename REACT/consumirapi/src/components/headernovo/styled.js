import styled from 'styled-components';
import * as colors from '../../config/colors';

import {
  Navbar,
  Button,
  Typography,
  IconButton,
} from '@material-tailwind/react';

export const StyledTypography = styled(Typography)`
  font-size: 23px;
  color: #fff;
`;

export const StyledNavbar = styled(Navbar)`
  background-color: ${colors.primaryColor};
  margin: 10px auto 0;
`;

export const StyledListItem = styled.a`
  font-size: 18px;
  color: #fff;

  &:hover {
    font-weight: bold;
  }
`;

export const StyledButton = styled(Button)`
  background: #fff;
  color: ${colors.primaryColor};

  border: 2px solid #fff;
  transition: all 250ms;
  font-weight: bold;

  &:hover {
    filter: brightness(90%);
    background: transparent;
    border: 2px solid #fff;
    color: #fff;
  }
`;

export const StyledIconButton = styled(IconButton)`
  color: #fff;
  border: 0px;

  &:hover {
    background: #fff;
    color: ${colors.primaryColor};
    border: 0px;
  }
`;
