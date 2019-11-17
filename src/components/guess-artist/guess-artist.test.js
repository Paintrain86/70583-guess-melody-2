import React from 'react';
import renderer from 'react-test-renderer';
import GuessArtist from './guess-artist.jsx';

describe(`GuessArtist`, () => {
  it(`component is rendered correctly`, () => {
    const testQuestion = {
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
    };
    const testOnAnswer = () => {};

    const markup = renderer
      .create(<GuessArtist
        question = {testQuestion}
        onAnswer = {testOnAnswer}
      />)
      .toJSON();

    expect(markup).toMatchSnapshot();
  });
});
