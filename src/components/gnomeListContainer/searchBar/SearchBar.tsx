import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import _ from "lodash";

import { filteredGnomeActions } from '../../../actions';
import { paginationActions } from '../../../actions';

interface searchBarProps {
  gnomes,
  fillFilteredGnome,
  goToPage,
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    searchBar: {
      width: '100%'
    },
  }),
);

const SearchBar = (props: searchBarProps) => {
  const { gnomes, fillFilteredGnome, goToPage } = props;
  const classes = useStyles('');
  const [userQuery, setUserQuery] = useState("");

  const delayedQuery = useRef(_.debounce((q,g) => searchGnomes(q,g), 500)).current;

  const searchGnomes = (query, gnomes) => {
    const filteredGnomes = {Brastlewark: gnomes.Brastlewark.filter(x => x.name.includes(query))};
    fillFilteredGnome(filteredGnomes);
    goToPage(1);
  };

  const onChange = e => {
    setUserQuery(e.target.value);
    if (e.target.value === '') {
      fillFilteredGnome(gnomes);
      goToPage(1);
    } else {
      delayedQuery(e.target.value,gnomes);
    }
  };

  return (
    <>
      <TextField className={classes.searchBar} onChange={onChange} value={userQuery} id="standard-basic" label="Write a name to search" variant="filled" />
    </>
  );
}

const mapStateToProps = (state) => ({
  gnomes: state.gnomes.data,
});

const mapDispatchToProps = dispatch => ({
  fillFilteredGnome: data => dispatch(filteredGnomeActions.fillFilteredGnome(data)),
  goToPage: data => dispatch(paginationActions.goToPage(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar)
