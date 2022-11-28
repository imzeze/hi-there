import { Link } from 'react-router-dom';

import { Div } from '@/atoms';

const Header = () => {
  return (
    <Div
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding="16px"
    >
      <Link to="/">main</Link>
      <Div>main</Div>
      <Div>main</Div>
    </Div>
  );
};

export default Header;
