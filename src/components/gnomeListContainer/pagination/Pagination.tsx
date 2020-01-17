import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { paginationActions } from '../../../actions';

import { PaginationButton, PaginationContainer } from './PaginationStyle';

interface PaginationProps {
  current,
  goToPage,
  filteredGnomes,
  setTotalPages,
  totalPages,
}

const Pagination = (props: PaginationProps) => {
  const { current, goToPage, filteredGnomes, setTotalPages, totalPages } = props;

  useEffect(() => {
    filteredGnomes.Brastlewark && setTotalPages(Math.floor(filteredGnomes.Brastlewark.length / 10));
  }, [filteredGnomes, setTotalPages]);

  const GoToPage = (where) => {
    goToPage(where);
  }

  return (
    <PaginationContainer>
      <PaginationButton disabled={current <= 1} onClick={() => { GoToPage(current - 1) }}>Prev</PaginationButton>
      {totalPages < 3 ?
        <>
          <PaginationButton active={true}>{current}</PaginationButton>
        </>
        : current === totalPages ?
          <>
            <PaginationButton onClick={() => { GoToPage(current - 2) }}>{current - 2}</PaginationButton>
            <PaginationButton onClick={() => { GoToPage(current - 1) }}>{current - 1}</PaginationButton>
            <PaginationButton active={true}>{current}</PaginationButton>
          </>
          : current === 1 ?
            <>
              <PaginationButton active={true}>{current}</PaginationButton>
              <PaginationButton onClick={() => { GoToPage(current + 1) }}>{current + 1}</PaginationButton>
              <PaginationButton onClick={() => { GoToPage(current + 2) }}>{current + 2}</PaginationButton>
            </>
            :
            <>
              <PaginationButton onClick={() => { GoToPage(current - 1) }}>{current - 1}</PaginationButton>
              <PaginationButton active={true}>{current}</PaginationButton>
              <PaginationButton onClick={() => { GoToPage(current + 1) }}>{current + 1}</PaginationButton>
            </>
      }
      <PaginationButton disabled={current === totalPages} onClick={() => { GoToPage(current + 1) }}>Next</PaginationButton>
    </PaginationContainer>
  );
}


const mapStateToProps = (state) => ({
  current: state.pagination.currentPage,
  totalPages: state.pagination.totalPages,
  filteredGnomes: state.filteredGnomes,
});

const mapDispatchToProps = dispatch => ({
  goToPage: data => dispatch(paginationActions.goToPage(data)),
  setTotalPages: data => dispatch(paginationActions.setTotalPages(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination)
