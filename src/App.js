
import './App.css';
import Welcome from './Components/welcome';
import Introduction from './Components/intro';

function App() {

  const students = ["David", "Joshua", "Michael", "Doe", "John"];

  return (
    <div className="App">

      <Welcome/>
      <Introduction name={students} />
      
    </div>
  );
}

export default App;
