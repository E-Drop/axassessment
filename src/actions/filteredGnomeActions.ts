export const filterGnomes = data => ({
  type: 'FILTER_GNOMES',
  data
});

export const fillFilteredGnome = data => ({
  type: 'FILL_FILTERED_GNOME',
  data
});

export const saveGnome = data => ({
  type: 'SET_SELECTED_GNOME',
  data
});
