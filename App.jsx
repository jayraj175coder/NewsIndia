// App.js
import React, { useState } from 'react';
import Navbar from './Navbar';
import NewsBoard from './NewsBoard';

const App = () => {
  const [category, setCategory] = useState("general");
  return (
    <>
      <Navbar setCategory={setCategory} />
      <NewsBoard category={category} />
    </>
  );
};

export default App;

