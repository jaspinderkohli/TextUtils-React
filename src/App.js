// import logo from './logo.svg';
import './App.css';

function App() {
  let name = "John Doe";
  return (
    <>  
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
    </nav>
    <div className="container">
      <h1> Hello {name}!</h1>
      <p> Lorem ispsum </p>
    </div>
    </>
  );
}

export default App;
