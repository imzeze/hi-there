import { Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import globalStyle from '@/globalStyle';
import { Navigator } from '@/organisms';
import Router from '@/Router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Global styles={globalStyle} />
    <BrowserRouter>
      <Navigator>
        <Router />
      </Navigator>
    </BrowserRouter>
  </React.StrictMode>,
);
