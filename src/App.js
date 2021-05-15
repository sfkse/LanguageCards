import './App.scss';
import ReactImg from './assets/react.svg';
import ContainerCard from './components/ContainerCard';

const App = () => {

  return (
    <div className="App">
      <div className="top-part">
        <img src={ReactImg} alt="reactImage" />
      </div>
      <div className="bottom-part">
        <ContainerCard />
      </div>

    </div>
  );
}

export default App;
