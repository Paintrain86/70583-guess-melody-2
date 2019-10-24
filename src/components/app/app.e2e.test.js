import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './app.jsx';

Enzyme.configure({adapter: new Adapter()});

describe(`App`, () => {
  it(`it's clickable!`, () => {
    const clickStart = jest.fn();
    const app = mount(<App
      luckText="Погнали"
      playTime={1}
      mistakes={1}
      onClick={clickStart}
    />);

    const btn = app.find(`.welcome__button`);

    btn.simulate(`click`, {clickStart() {}});
    expect(clickStart).toHaveBeenCalledTimes(1);
  });
});
