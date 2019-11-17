import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

describe(`App`, () => {
  it(`component is rendered correctly`, () => {
    const testSettings = {
      playTime: 1,
      mistakes: 1,
      luckText: `Аля-улю`,
      questions: [
        {
          type: `genre`,
          genre: `pop`,
          answers: [
            {
              src: `test/test.mp3`,
              genre: `pop`
            },
            {
              src: `test/test2.mp3`,
              genre: `rap`
            }
          ]
        },
        {
          type: `artist`,
          song: {
            src: `test/test.mp3`,
            artist: `testArtist`
          },
          answers: [
            {
              picture: `test/test.jpg`,
              artist: `testArtist`
            },
            {
              picture: `test/test2.jpg`,
              artist: `testArtist2`
            }
          ]
        }
      ]
    };
    const markup = renderer
      .create(<App
        settings={testSettings}
      />)
      .toJSON();

    expect(markup).toMatchSnapshot();
  });
});
