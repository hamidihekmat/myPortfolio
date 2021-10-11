import { GlobalStyles } from './components/GlobalStyles';
import Main from './components/Main';
import Nav from './components/Nav';
import { useState, useRef } from 'react';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import { useEffect } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  useEffect(() => {
    const localDarkMode = localStorage.getItem('darkMode');
    if (localDarkMode) {
      setDarkMode(JSON.parse(localDarkMode.toLowerCase()));
    }
  }, []);
  return (
    <div className="App">
      <GlobalStyles darkMode={darkMode} />
      <Nav
        projectRef={projectRef}
        contactRef={contactRef}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <Main darkMode={darkMode} />
      <Projects darkMode={darkMode} projectRef={projectRef} />
      <Contacts contactRef={contactRef} />
    </div>
  );
}

export default App;
