import { Routing } from 'pages';
import { Header } from 'widgets/header';
import { Footer } from 'widgets/footer';

import './styles/index.scss';

const App = () => {
  return (
    <div className="App">
      <Header />

      <Routing />

      <Footer />
    </div>
  );
};

export default App;
