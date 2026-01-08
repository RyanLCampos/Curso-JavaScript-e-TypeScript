import React from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Typography } from '@material-tailwind/react';

import {
  StyledNavbar,
  StyledListItem,
  StyledButton,
  StyledTypography,
  StyledIconButton,
} from './styled';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography className="p-1 font-medium">
        <Link to={'/'}>
          <StyledListItem className="flex items-center transition-colors">
            Alunos
          </StyledListItem>
        </Link>
      </Typography>
      <div className="flex items-center gap-2">
        <Typography className="p-1 font-medium">
          <Link to={'/register'}>
            <StyledButton
              className="flex items-center transition-colors"
              fullWidth
            >
              Cadastre-se
            </StyledButton>
          </Link>
        </Typography>
        <Typography className="p-1 font-medium">
          <Link to={'/login'}>
            <StyledButton
              className="flex items-center transition-colors"
              fullWidth
            >
              Entrar
            </StyledButton>
          </Link>
        </Typography>
      </div>
    </ul>
  );
}

export function HeaderNovo() {
  const [openNav, setOpenNav] = React.useState(false);

  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);

  React.useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return (
    <StyledNavbar className="mx-auto max-w-screen-xl px-6 py-3">
      <div className="flex items-center justify-between">
        <StyledTypography
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5"
        >
          Consumo API
        </StyledTypography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <StyledIconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </StyledIconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </StyledNavbar>
  );
}
