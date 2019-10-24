import React from 'react';
import renderer from 'react-test-renderer';
import Welcome from './welcome.jsx';

describe(`Welcome`, () => {
  it(`component is rendered correctly`, () => {
    const markup = renderer
      .create(<Welcome
        luckText="Удачи!"
        playTime={1}
        mistakes={1}
      />)
      .toJSON();

    expect(markup).toMatchSnapshot();
  });
});
