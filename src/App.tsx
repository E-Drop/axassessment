import React, { useEffect } from 'react';
import { gnomeActions } from './actions';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
interface AppProps {
  fillGnomeData: any,
  gnomes,
}

const App = (props: AppProps) => {
  const { fillGnomeData, gnomes } = props;

  useEffect(() => {
      fillGnomeData();
  }, [fillGnomeData]);

  return (
    <div className="App">
     <Link to="/gnome/1">Netflix</Link>
      {gnomes && gnomes.map(x=>x.name)}
    </div>
  );
}

const mapStateToProps = (state) => ({
  gnomes: state.gnomes.data.Brastlewark,
});

const mapDispatchToProps = dispatch => ({
  fillGnomeData: data => dispatch(gnomeActions.fillGnomeData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
