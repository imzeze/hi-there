import { Div } from '@/atoms';
import { TabMenu } from '@/molecules';

const TabNavigation = () => {
  return (
    <Div
      width="100%"
      height="60px"
      backgroundColor="var(--paleGreen)"
      display="flex"
      justifyContent="space-evenly"
    >
      <TabMenu type="home" />
      <TabMenu type="about" />
    </Div>
  );
};

export default TabNavigation;
