import React from 'react';
import  {useParams, useHistory} from "react-router-dom";
interface AppProps {
  match,
}

const Child = (props: AppProps) => {
const { id } = useParams();
const history = useHistory()
  return (
    <div>
    asdasd
    <button type="button" onClick={() => history.goBack()}>
    back
    </button>
      {id}
    </div>
  );
}


export default Child
