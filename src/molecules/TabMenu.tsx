import { NavLink } from 'react-router-dom';

import { Div } from '@/atoms';

interface TabMenumProps {
  type: 'home' | 'about';
}

const ROUTE_TYPE = {
  home: {
    path: '/home',
    name: 'HOME',
  },
  about: {
    path: '/about',
    name: 'ABOUT',
  },
};

const TabMenu = ({ type }: TabMenumProps) => {
  return (
    <Div display="flex" alignItems="center" justifyContent="center">
      <NavLink to={ROUTE_TYPE[type].path}>{ROUTE_TYPE[type].name}</NavLink>
    </Div>
  );
};

export default TabMenu;
