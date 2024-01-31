import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>  
      {/* Navbar component */}
      <Navbar title="TextUtils" aboutText="About TextUtils"/>
      <div className="container">
        <TextForm heading="Enter the text to analyze below"/>
      </div>
    </>
  );
}

export default App;
