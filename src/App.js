import './App.css';

function App() {
  function changeColor() {
    var elm = document.getElementById('btn');
    if (elm.style.backgroundColor === 'red') {
      elm.style.backgroundColor = 'blue';
      elm.textContent = 'Change to red';
    } else {
      elm.style.backgroundColor = 'red';
      elm.textContent = 'Change to blue';
    }
  }

  return (
    <button
      id='btn'
      type='button'
      onClick={changeColor}
      style={{ backgroundColor: 'red', color: 'white' }}
    >
      Change to blue
    </button>
  );
}

export default App;
