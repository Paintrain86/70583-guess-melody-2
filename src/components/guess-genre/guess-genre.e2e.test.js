import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GuessGenre from './guess-genre.jsx';

Enzyme.configure({adapter: new Adapter()});

describe(`GuessGenre`, () => {
  it(`Are u sure to pass correct answer?`, () => {
    const testProps = {
      question: {
        type: `genre`,
        genre: `pop`,
        answers: [
          {
            src: `test/test.mp3`,
            genre: `pop`
          },
          {
            src: `test/test.mp3`,
            genre: `rap`
          },
          {
            src: `test/test.mp3`,
            genre: `dubstep`
          },
          {
            src: `test/test.mp3`,
            genre: `pop`
          }
        ]
      },
      onAnswer: jest.fn()
    };

    const testAnswers = [`rap`, `dubstep`];
    const genre = shallow(<GuessGenre {...testProps} />);
    const form = genre.find(`.game__tracks`);
    const answerCheckboxes = testAnswers.map((it) => genre.find(`[value="${it}"]`));

    answerCheckboxes.forEach((it) => it.simulate(`change`));
    form.simulate(`submit`, {
      preventDefault: () => {}
    });
    expect(testProps.onAnswer).toHaveBeenCalledTimes(1);
    expect(testProps.onAnswer).toHaveBeenCalledWith(testAnswers);
  });
});
