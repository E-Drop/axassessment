import React from 'react';
import  { useHistory} from "react-router-dom";
import ArrowLeftRounded from '@material-ui/icons/ArrowLeftRounded';
import {NavContainer} from './NavigationStyle';
const Navigation = () => {

  let history = useHistory();
  return (
    <NavContainer image={process.env.PUBLIC_URL+'gnome.png'}>
    <div></div><div onClick={() => history.goBack()}><ArrowLeftRounded/></div>
    </NavContainer>
  );
}


export default Navigation
