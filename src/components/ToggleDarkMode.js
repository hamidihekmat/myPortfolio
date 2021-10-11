import React from 'react';
import styled from 'styled-components';
import { MdLightMode, MdOutlineLightMode } from 'react-icons/md';
import useSound from 'use-sound';
import switchOn from '../sounds/switch-on.mp3';
import switchOff from '../sounds/switch-off.mp3';

function ToggleDarkMode({ darkMode, setDarkMode, constraintsRef }) {
  const [playSwitchOn] = useSound(switchOn);
  const [playSwitchOff] = useSound(switchOff);
  const handleToggle = () => {
    if (darkMode) {
      playSwitchOn();
      localStorage.setItem('darkMode', 'false');
    } else {
      playSwitchOff();
      localStorage.setItem('darkMode', 'true');
    }
    setDarkMode(!darkMode);
  };
  return (
    <Button
      drag
      dragConstraints={constraintsRef}
      darkMode={darkMode}
      onClick={handleToggle}
    >
      {darkMode ? (
        <MdLightMode size="2em" />
      ) : (
        <MdOutlineLightMode size="2em" />
      )}
    </Button>
  );
}

const Button = styled.div`
  /* :hover {
    border: 1px solid ${(props) => (props.darkMode ? 'white' : 'black')};
  } */
  /* border: 1px solid ${(props) => (props.darkMode ? 'black' : 'white')};
  background: ${(props) => (props.darkMode ? 'black' : 'white')}; */
  cursor: pointer;
  color: ${(props) => (props.darkMode ? 'white' : 'black')};
  /* -moz-box-shadow: 10px 10px 40px
    ${(props) => (props.darkMode ? '#222831' : 'white')};
  -webkit-box-shadow: 10px 10px 40px
    ${(props) => (props.darkMode ? '#222831' : 'white')};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
  transition: color 300ms ease-in-out;
`;

export default ToggleDarkMode;
