import { GlobalStyles } from './components/GlobalStyles';
import Main from './components/Main';
import Nav from './components/Nav';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="App">
      <GlobalStyles darkMode={darkMode} />
      <Nav darkMode={darkMode} />
      <Main darkMode={darkMode} />
    </div>
  );
}

export default App;
