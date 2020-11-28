import { GlobalStyles } from './components/GlobalStyles';
import Main from './components/Main';
import Nav from './components/Nav';
import { useState, useRef } from 'react';
import ToggleDarkMode from './components/ToggleDarkMode';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const constraintsRef = useRef(null);
  return (
    <div className="App" ref={constraintsRef}>
      <GlobalStyles darkMode={darkMode} />
      <Nav darkMode={darkMode} />
      <Main darkMode={darkMode} />
      <ToggleDarkMode
        constraintsRef={constraintsRef}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
    </div>
  );
}

export default App;
