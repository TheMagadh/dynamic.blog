import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlogCreationPage from './pages/BlogCreationPage';
import Preview from './pages/Preview';
import BlogList from './pages/BlogList';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BlogCreationPage />} />
        <Route path="/preview/:id" element={<Preview />} />
        <Route path="/blogs" element={<BlogList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
