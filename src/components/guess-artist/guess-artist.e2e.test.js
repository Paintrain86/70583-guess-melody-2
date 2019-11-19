import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GuessArtist from './guess-artist.jsx';

Enzyme.configure({adapter: new Adapter()});

describe(`GuessArtist`, () => {
  it(`Are u sure to pass correct answer?`, () => {
    const testProps = {
      question: {
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
      },
      onAnswer: jest.fn()
    };

    const testAnswer = `testArtist`;
    const artist = shallow(<GuessArtist {...testProps} />);
    const form = artist.find(`.game__artist-form`);
    const answerRadio = artist.find(`[value="${testAnswer}"]`);

    answerRadio.simulate(`change`, {
      target: {
        value: testAnswer
      }
    });
    form.simulate(`submit`, {
      preventDefault: () => {}
    });
    expect(testProps.onAnswer).toHaveBeenCalledTimes(1);
    expect(testProps.onAnswer).toHaveBeenCalledWith(testAnswer);
  });
});
