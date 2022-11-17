import React from 'react';
import { useLocation } from 'react-router-dom';
import { Routing } from 'pages';
import { Header } from 'widgets/header';
import { Footer } from 'widgets/footer';

import './styles/index.scss';

const App = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    document.querySelector('#root')?.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="App">
      <Header />

      <Routing />

      <Footer />
    </div>
  );
};

export default App;
