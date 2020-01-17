import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components/macro';

import { IGnome } from '../models/IGnome';

import { gnomeActions } from '../actions';
import { filteredGnomeActions } from '../actions';

import SearchBar from '../components/gnomeListContainer/searchBar/SearchBar';
import Pagination from '../components/gnomeListContainer/pagination/Pagination';
import GnomeCard from '../components/gnomeListContainer/gnomeCard/GnomeCard';

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

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

export const GnomeListContainer = (props: GnomeListContainerProps) => {
  const { fillGnomeData, gnomes, filteredGnomes, fillFilteredGnome, current } = props;
  const [gnomeList, setGnomeList] = useState();

  useEffect(() => {
    fillGnomeData();
  }, [fillGnomeData]);

  useEffect(() => {
    fillFilteredGnome(gnomes);
  }, [gnomes, fillFilteredGnome]);

  useEffect(() => {
    filteredGnomes.Brastlewark && current !== 1 && setGnomeList(filteredGnomes.Brastlewark.slice(current * 10, current * 10 + 10));
    filteredGnomes.Brastlewark && current === 1 && setGnomeList(filteredGnomes.Brastlewark.slice(0, 10));
  }, [filteredGnomes, current]);

  return (
    <div className="GnomeListContainer">

      <SearchBar />
      <CardsContainer>
        {gnomeList && gnomeList.map((x: IGnome, key: number) => <GnomeCard gnome={x} key={key} />)}
      </CardsContainer>
      <Pagination />
    </div>
  );
}

export const mapStateToProps = (state) => ({
  gnomes: state.gnomes.data,
  filteredGnomes: state.filteredGnomes,
  current: state.pagination.currentPage,
});

export const mapDispatchToProps = dispatch => ({
  fillGnomeData: data => dispatch(gnomeActions.fillGnomeData()),
  fillFilteredGnome: data => dispatch(filteredGnomeActions.fillFilteredGnome(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GnomeListContainer)
