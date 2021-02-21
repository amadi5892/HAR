import './App.css';

import Home from './Home/Home';
import Commitment from './Commitment/Commitment';
import Services from './Services/Services';
import Investors from './Investors/Investors';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
      <Home />
      <Commitment />
      <Services />
      <Investors />
      <Footer />
    </div>
  );
}

export default App;
