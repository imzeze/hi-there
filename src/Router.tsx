import { Route, Routes } from 'react-router';

import { About, Home } from '@/pages';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
  );
};

export default Router;
