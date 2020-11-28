import React from 'react';
import styled from 'styled-components';
import { MoonStars, SunDim } from 'phosphor-react';
import { motion } from 'framer-motion';
import useSound from 'use-sound';
import switchOn from '../sounds/switch-on.mp3';
import switchOff from '../sounds/switch-off.mp3';

function ToggleDarkMode({ darkMode, setDarkMode, constraintsRef }) {
  const [playSwitchOn] = useSound(switchOn);
  const [playSwitchOff] = useSound(switchOff);
  const handleToggle = () => {
    if (darkMode) {
      playSwitchOn();
    } else {
      playSwitchOff();
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
      {darkMode ? <SunDim size={48} /> : <MoonStars size={48} />}
    </Button>
  );
}

const Button = styled(motion.div)`
  position: fixed;
  display: block;
  background: ${(props) => (props.darkMode ? 'black' : 'black')};
  cursor: pointer;
  border-radius: 50%;
  color: white;
  padding: 0.6rem 0.6rem;
  bottom: 7vh;
  right: 7vw;
  opacity: 0.8;
  -moz-box-shadow: 10px 10px 40px
    ${(props) => (props.darkMode ? '#222831' : 'white')};
  -webkit-box-shadow: 10px 10px 40px
    ${(props) => (props.darkMode ? '#222831' : 'white')};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  transition: color 300ms ease-in-out;
`;

export default ToggleDarkMode;
