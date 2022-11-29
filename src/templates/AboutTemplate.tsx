import { Div } from '@/atoms';
import useInitNavigator from '@/utils/hooks/useInitNavigator';

const AboutTemplate = () => {
  useInitNavigator({
    header: 'ABOUT',
  });

  return (
    <Div
      width="100%"
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      정보
    </Div>
  );
};

export default AboutTemplate;
