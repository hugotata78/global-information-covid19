import './App.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Home } from './pages/Home';
import Particles from "react-particles-js";


function App() {

  const paramsParticles = {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          value_area: 1000,
        },
      },
    },
  };


  return (
    <Provider store={store}>
      <Home />
      <Particles className="particles" params={paramsParticles} />
    </Provider>
  );
}

export default App;
