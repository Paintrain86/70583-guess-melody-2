import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Welcome from './welcome.jsx';

Enzyme.configure({adapter: new Adapter()});

describe(`Welcome`, () => {
  it(`it's clickable!`, () => {
    const clickStart = jest.fn();
    const app = shallow(<Welcome
      luckText="Погнали"
      playTime={1}
      mistakes={1}
      onBtnClick={clickStart}
    />);

    const btn = app.find(`.welcome__button`);

    btn.simulate(`click`);
    expect(clickStart).toHaveBeenCalledTimes(1);
  });
});
