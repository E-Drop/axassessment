import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import {IGnome} from '../models/IGnome';

import { gnomeActions } from '../actions';
import { filteredGnomeActions } from '../actions';

import SearchBar from '../components/SearchBar';
import Pagination from '../components/pagination/Pagination';

interface GnomeListContainerProps {
  current: number,
  setTotalPages: number,
  gnomes: IGnome[],
  filteredGnomes: {
    Brastlewark: IGnome[]
  },
  fillFilteredGnome: any,
  fillGnomeData: any,
}

const GnomeListContainer = (props: GnomeListContainerProps) => {
  const { fillGnomeData, gnomes, filteredGnomes, fillFilteredGnome, current } = props;
  const [gnomeList, setGnomeList] = useState();

  useEffect(() => {
      fillGnomeData();
  }, [fillGnomeData]);

  useEffect(()=> {
      fillFilteredGnome(gnomes);
  }, [gnomes]);

  useEffect(()=> {
    filteredGnomes.Brastlewark && current !== 1  && setGnomeList(filteredGnomes.Brastlewark.slice(current*10 , current*10+10 ));
    filteredGnomes.Brastlewark && current === 1  && setGnomeList(filteredGnomes.Brastlewark.slice(0 , 10 ));
  }, [filteredGnomes, current]);

  return (
    <div className="GnomeListContainer">
    <SearchBar/>
     {gnomeList && gnomeList.map((x,key)=><p key={key}>{x.name}</p>)}
     <Pagination/>
    </div>
  );
}

const mapStateToProps = (state) => ({
  gnomes: state.gnomes.data,
  filteredGnomes: state.filteredGnomes,
  current: state.pagination.currentPage,
});

const mapDispatchToProps = dispatch => ({
  fillGnomeData: data => dispatch(gnomeActions.fillGnomeData()),
  fillFilteredGnome: data => dispatch(filteredGnomeActions.fillFilteredGnome(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GnomeListContainer)
