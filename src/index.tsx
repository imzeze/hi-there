import { Global } from '@emotion/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import globalStyle from '@/globalStyle';
import { Navigator } from '@/organisms';
import Router from '@/Router';

import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Global styles={globalStyle} />
    <RecoilRoot>
      <BrowserRouter>
        <Navigator>
          <Router />
        </Navigator>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>,
);

serviceWorkerRegistration.register();
