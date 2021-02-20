import './App.css';

import Home from './Home/Home';
import Commitment from './Commitment/Commitment';
import Services from './Services/Services';
import Investors from './Investors/Investors';

function App() {
  return (
    <div className="App">
      <Home />
      <Commitment />
      <Services />
      <Investors />
    </div>
  );
}

export default App;
