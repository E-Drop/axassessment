import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { connect } from 'react-redux';

import { filteredGnomeActions } from '../actions';

import {
  GnomeDetailContainer,
  GnomeDetailContent,
  Thumbnail,
  GnomeMainInformationContainer,
  GnomeWorksWrapper,
  KeyValueDisplay,
  HairColor
} from './GnomeDetailStyle'

interface GnomeDetailProps {
  gnome,
  saveGnome,
};

const GnomeDetail = (props: GnomeDetailProps) => {
  const { gnome, saveGnome } = props;
  const { id } = useParams();

  useEffect(() => {
    saveGnome(id);
  }, []);

  return (
    <GnomeDetailContainer>
      <GnomeDetailContent>
        {gnome &&
          <>
            <Thumbnail image={gnome[0].thumbnail} />
            <h2>{gnome[0].name}</h2>
            <hr />
            <GnomeMainInformationContainer>
              <div>
                <h4>Who</h4>
                <KeyValueDisplay><span>Age: </span><span>{gnome[0].age}</span></KeyValueDisplay>
                <KeyValueDisplay><span>Weight: </span><span>{gnome[0].weight}</span></KeyValueDisplay>
                <KeyValueDisplay><span>Height: </span><span>{gnome[0].height}</span></KeyValueDisplay>
                <KeyValueDisplay><span>Hair color: </span><HairColor color={gnome[0].hair_color} /></KeyValueDisplay>
              </div>
              <div>
                <h4>Friends</h4>
                {gnome[0].friends.map((x, k) => <p key={k}>{x}</p>)}
              </div>
            </GnomeMainInformationContainer>
            <h4>Jobs</h4>
            <GnomeWorksWrapper>
              {gnome[0].professions.map((x, k) => <span key={k}>{x}</span>)}
            </GnomeWorksWrapper>
          </>}
      </GnomeDetailContent>
    </GnomeDetailContainer>
  );
}

const mapStateToProps = (state) => ({
  gnome: state.filteredGnomes.selected,
});
const mapDispatchToProps = dispatch => ({
  saveGnome: data => dispatch(filteredGnomeActions.saveGnome(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GnomeDetail)
