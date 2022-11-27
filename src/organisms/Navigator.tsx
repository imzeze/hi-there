import { Div } from '@/atoms';
import { Header, TabNavigation } from '@/organisms';

interface NavigatorProps {
  children: React.ReactNode;
}

const Navigator = ({ children }: NavigatorProps) => {
  return (
    <Div>
      <Header />
      <Div width="100%" height="calc(100vh - 84px)">
        {children}
      </Div>
      <TabNavigation />
    </Div>
  );
};

export default Navigator;
