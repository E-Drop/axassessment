import React from 'react';
import { useHistory } from "react-router-dom";
import ArrowLeftOutlined from '@material-ui/icons/ArrowLeftOutlined';
import { NavContainer } from './NavigationStyle';
import logo from '../../../logo.png'
import Title from './Title';

const Navigation = () => {

  let history = useHistory();
  return (
    <NavContainer image={logo}>
      <div></div>
      <Title />
      <div onClick={() => history.goBack()}><ArrowLeftOutlined /></div>
    </NavContainer>
  );
}


export default Navigation
