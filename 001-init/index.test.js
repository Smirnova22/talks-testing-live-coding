const state = require('./index');

describe('getStatesAbbrList', () => {
  let statesAbbr;
  beforeEach(() => {
      statesAbbr = state.getStatesAbbrList();
  });

  it('should return list of abbreviations', () => {
    expect(statesAbbr).toBeDefined();
  });
});
