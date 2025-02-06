import './App.css';
import { DeployOnDevComp } from './devDeploy';

function App() {
  return (
    <div className="App">
      <header className="App-header">This is Develop</header>
      <DeployOnDevComp />
      <div>Some text</div>
    </div>
  );
}

export default App;
