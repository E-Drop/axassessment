import React, { useEffect } from 'react';
import { gnomeActions } from './actions';
import { connect } from 'react-redux';

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
