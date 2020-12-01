import { GlobalStyles } from "./components/GlobalStyles";
import Main from "./components/Main";
import Nav from "./components/Nav";
import { useState, useRef } from "react";
import ToggleDarkMode from "./components/ToggleDarkMode";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import { useEffect } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const constraintsRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  useEffect(() => {
    const localDarkMode = localStorage.getItem("darkMode");
    if (localDarkMode) {
      setDarkMode(JSON.parse(localDarkMode.toLowerCase()));
    }
  }, []);
  return (
    <div className='App' ref={constraintsRef}>
      <GlobalStyles darkMode={darkMode} />
      <Nav
        projectRef={projectRef}
        contactRef={contactRef}
        darkMode={darkMode}
      />
      <Main darkMode={darkMode} />
      <Projects projectRef={projectRef} />
      <Contacts contactRef={contactRef} />
      <ToggleDarkMode
        constraintsRef={constraintsRef}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
    </div>
  );
}

export default App;
