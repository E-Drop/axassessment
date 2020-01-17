import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { connect } from 'react-redux';

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
  gnomes
};

const GnomeDetail = (props: GnomeDetailProps) => {
  const { gnomes } = props;
  const { id } = useParams();
  const [selectedGnome, setSelectedGnome] = useState();

  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem("selectedGnome"));
    if (getData && getData.id === parseInt(id)) {
      setSelectedGnome(getData)
    } else if (gnomes) {
      const gnome = gnomes[gnomes.map((x) => { return x.id; }).indexOf(parseInt(id))];
      setSelectedGnome(gnome);
      localStorage.setItem("selectedGnome", JSON.stringify(gnome));
    }
  }, [gnomes, id]);

  return (
    <GnomeDetailContainer>
      <GnomeDetailContent>
        {selectedGnome &&
          <>
            <Thumbnail image={selectedGnome.thumbnail} />
            <h2>{selectedGnome.name}</h2>
            <hr />
            <GnomeMainInformationContainer>
              <div>
                <h4>Who</h4>
                <KeyValueDisplay><span>Age: </span><span>{selectedGnome.age}</span></KeyValueDisplay>
                <KeyValueDisplay><span>Weight: </span><span>{selectedGnome.weight}</span></KeyValueDisplay>
                <KeyValueDisplay><span>Height: </span><span>{selectedGnome.height}</span></KeyValueDisplay>
                <KeyValueDisplay><span>Hair color: </span><HairColor color={selectedGnome.hair_color} /></KeyValueDisplay>
              </div>

              {selectedGnome.friends &&
                <div>
                  <h4>Friends</h4>
                  {selectedGnome.friends.map((x, k) => <p key={k}>{x}</p>)}
                </div>}
            </GnomeMainInformationContainer>
            {selectedGnome.professions &&
              <>
                <h4>Jobs</h4>
                <GnomeWorksWrapper>
                  {selectedGnome.professions.map((x, k) => <span key={k}>{x}</span>)}
                </GnomeWorksWrapper>
              </>}
          </>}
      </GnomeDetailContent>
    </GnomeDetailContainer>
  );
}

const mapStateToProps = (state) => ({
  gnomes: state.gnomes.data.Brastlewark,
});

export default connect(
  mapStateToProps,
  null
)(GnomeDetail)
