import { Global } from '@emotion/react';

import { Div } from '@/atoms';
import globalStyle from '@/globalStyle';

function App() {
  return (
    <Div>
      <Global styles={globalStyle} />
      <Div width="100%" height="60px" backgroundColor="var(--paleGreen)">
        nav
      </Div>
    </Div>
  );
}

export default App;
