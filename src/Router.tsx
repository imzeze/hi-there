import { Navigate, Route, Routes } from 'react-router';

import { About, Home } from '@/pages';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Router;
