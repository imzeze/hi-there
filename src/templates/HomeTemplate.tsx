import { Div } from '@/atoms';
import useInitNavigator from '@/utils/hooks/useInitNavigator';

const HomeTemplate = () => {
  useInitNavigator({
    header: 'HOME',
  });

  return (
    <Div
      width="100%"
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      홈
    </Div>
  );
};

export default HomeTemplate;
