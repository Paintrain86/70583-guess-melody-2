import React from 'react';
import renderer from 'react-test-renderer';
import GuessGenre from './guess-genre.jsx';

describe(`GuessGenre`, () => {
  it(`component is rendered correctly`, () => {
    const testQuestion = {
      type: `genre`,
      genre: `pop`,
      answers: [{
        src: `test/test.mp3`,
        genre: `rock`
      },
      {
        src: `test/test2.mp3`,
        genre: `pop`
      }
      ]
    };
    const testOnAnswer = () => {};

    const markup = renderer
      .create(<GuessGenre
        question = {testQuestion}
        onAnswer = {testOnAnswer}
      />)
      .toJSON();

    expect(markup).toMatchSnapshot();
  });
});
