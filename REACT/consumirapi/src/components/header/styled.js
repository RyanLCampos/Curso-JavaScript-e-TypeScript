import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Nav = styled.nav`
  background: ${primaryColor};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 0 35px rgba(0, 0, 0, 0.2);
  border-radius: 0 0 10px 10px;
  margin: 0 50px;

  a {
    color: #fff;
    margin: 0 10px 0 0;
    font-weight: bold;
  }

  a:hover {
    color: #2b2b2bff;
  }
`;
