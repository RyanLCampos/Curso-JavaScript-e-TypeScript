import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Collapse,
  IconButton,
  Navbar,
  Typography,
} from '@material-tailwind/react';

import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function NavList() {
  const buttonBase =
    'flex items-center bg-neutral-50 text-primary border-2 border-solid border-neutral-50 hover:brightness-90 hover:bg-transparent hover:border-2 hover:border-neutral-50 hover:text-neutral-50';

  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography className="p-1 font-medium">
        <Link to={'/'}>
          <a className="flex p-2 text-18 text-neutral-50 font-bold items-center hover:underline decoration-neutral-50 decoration-2 underline-offset-4">
            Alunos
          </a>
        </Link>
      </Typography>
      <div className="flex items-center gap-2">
        <Typography className="p-1 font-medium">
          <Link to={'/register'}>
            <Button className={buttonBase} fullWidth>
              Cadastre-se
            </Button>
          </Link>
        </Typography>
        <Typography className="p-1 font-medium">
          <Link to={'/login'}>
            <Button className={buttonBase} fullWidth>
              Entrar
            </Button>
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
    <Navbar className="bg-primary text-neutral-50 mx-auto mt-3 max-w-screen-lg px-8 py-3 border-none">
      <div className="flex items-center justify-between">
        <Typography
          as="a"
          href="#"
          variant="h4"
          className="mr-4 cursor-pointer py-1.5"
        >
          Consumo API
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="bg-primary text-neutral-50 border-none hover:border-none hover:bg-neutral-50 hover:text-primary delay-230 transition-all p-4 ml-auto h-6 w-6 text-inherit lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}
