import { GlobalStyles } from './components/GlobalStyles';
import Main from './components/Main';
import Nav from './components/Nav';
import { useState, useRef } from 'react';
import ToggleDarkMode from './components/ToggleDarkMode';
import Projects from './components/Projects';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const constraintsRef = useRef(null);
  const projectRef = useRef(null);
  return (
    <div className="App" ref={constraintsRef}>
      <GlobalStyles darkMode={darkMode} />
      <Nav projectRef={projectRef} darkMode={darkMode} />
      <Main darkMode={darkMode} />
      <Projects projectRef={projectRef} />
      <ToggleDarkMode
        constraintsRef={constraintsRef}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
    </div>
  );
}

export default App;
