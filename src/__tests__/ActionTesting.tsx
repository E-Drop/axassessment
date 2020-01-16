
import * as actions from '../actions/filteredGnomeActions'
import { mapStateToProps } from '../containers/GnomeListContainer';

describe('Testing Action', () => {
  it('should dispatch an action to Change filteredGnomes with the given array', () => {
    const data = ['0', '1'];
    const expectedAction = {
      type: 'FILL_FILTERED_GNOME',
      data
    }
    expect(actions.fillFilteredGnome(data)).toEqual(expectedAction)
  })
})

describe('mapStateToProps', () => {
  it('should map the state to props correctly', () => {
    const state = {
      filteredGnomes: undefined,
      gnomes: {
        data: {
          "a": "a",
        },
      },
      pagination: {
        currentPage: 2,
      },
    }
    const a = {
      current: 2,
      filteredGnomes: undefined,
      gnomes: {
        a: 'a',
      },
    }
    const componentState = mapStateToProps(state);
    expect(componentState).toEqual(a);
  })
})
