import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { Div } from '@/atoms';
import { NavigateState } from '@/recoil/common/atom';

const Header = () => {
  const navigateState = useRecoilValue(NavigateState);

  return (
    <Div
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding="16px"
    >
      <Link to="/">main</Link>
      <Div>{navigateState.header}</Div>
      <Div>로그인</Div>
    </Div>
  );
};

export default Header;
