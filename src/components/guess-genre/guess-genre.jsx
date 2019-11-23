import React from "react";
import PropTypes from 'prop-types';

class GuessGenre extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      checkboxes: props.question.answers.map((it, index) => ({
        id: index,
        genre: it.genre,
        isSelected: false
      }))
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(index) {
    this.setState((prevState) => ({
      checkboxes: prevState.checkboxes.map((it, i) => {
        return {
          id: i,
          genre: it.genre,
          isSelected: (i === index) ? !it.isSelected : it.isSelected
        };
      })
    }));
  }

  submitHandler(evt) {
    evt.preventDefault();
    const answers = this.state.checkboxes
      .filter((it) => it.isSelected)
      .map((it) => it.genre);

    return (answers.length === 0) ? this.showErrorMessage() : this.props.onAnswer(answers);
  }

  showErrorMessage() {
    // console.log(`Выберите хотя бы один трек.`);
  }

  render() {
    const {
      question,
      question: {answers}
    } = this.props;

    return (
      <>
        <section className="game game--genre">
          <header className="game__header">
            <a className="game__back" href="#">
              <span className="visually-hidden">Сыграть ещё раз</span>
              <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
            </a>

            <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
              <circle className="timer__line" cx="390" cy="390" r="370" style={{filter: `url(#blur)`, transform: `rotate(-90deg) scaleY(-1)`, transformOrigin: `center`}} />
            </svg>

            <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
              <span className="timer__mins">05</span>
              <span className="timer__dots">:</span>
              <span className="timer__secs">00</span>
            </div>

            <div className="game__mistakes">
              <div className="wrong"></div>
              <div className="wrong"></div>
              <div className="wrong"></div>
            </div>
          </header>

          <section className="game__screen">
            <h2 className="game__title">Выберите треки в стиле &laquo;{question.genre.toUpperCase()}&raquo;</h2>
            <form className="game__tracks" onSubmit={this.submitHandler}>
              {answers.map((it, i) => {
                return (
                  <div className="track" key={`answer-${i}`}>
                    <button className="track__button track__button--play" type="button"></button>
                    <div className="track__status">
                      <audio></audio>
                    </div>
                    <div className="game__answer">
                      <input className="game__input visually-hidden" type="checkbox" name="answer"
                        value={it.genre}
                        id={`answer-${i}`}
                        checked={it.isSelected}
                        onChange={() => this.changeHandler(i)}
                      />
                      <label className="game__check" htmlFor={`answer-${i}`}>Отметить</label>
                    </div>
                  </div>
                );
              })}

              <button className="game__submit button" type="submit">Ответить</button>
            </form>
          </section>
        </section>
      </>
    );
  }
}

GuessGenre.propTypes = {
  question: PropTypes.shape({
    type: PropTypes.string,
    genre: PropTypes.string,
    answers: PropTypes.arrayOf(PropTypes.exact({
      src: PropTypes.string,
      genre: PropTypes.string
    }))
  }),
  onAnswer: PropTypes.func
};

export default GuessGenre;
