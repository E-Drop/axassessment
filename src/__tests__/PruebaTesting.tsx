
import { filteredGnomes } from '../reducers/filteredGnomeReducer';

describe('Testing Reducer', () => {
  it('should work', () => {
    const array = {
      Brastlewark: ['foo', 'bar'],
    };
    expect(filteredGnomes(undefined, { type: 'FILL_FILTERED_GNOME', data: array })).toEqual(
      {
        Brastlewark: ['foo', 'bar'],
      }
    )
  })
});
