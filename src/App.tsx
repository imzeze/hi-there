import { Div } from '@/atoms';
import globalStyle from '@/globalStyle';
import { Global } from '@emotion/react';

function App() {
  return (
    <Div>
      <Global styles={globalStyle} />
      <Div width="100%" height="48px" backgroundColor="var(--paleGreen)">
        HOME
      </Div>
    </Div>
  );
}

export default App;
