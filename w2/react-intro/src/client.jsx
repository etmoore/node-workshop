import React, { PropTypes } from 'react'; // import react and PropTypes
import ReactDom from 'react-dom'; // provides DOM methods
import Cat from './cats';

const catMeow = new Cat('Browser Cat').meow();

const App = props => (
  <div>
    The cat says: {props.message}
  </div>
);

App.propTypes = {
  message: PropTypes.string.isRequired,
};

ReactDom.render(<App message={catMeow} />, document.querySelector('.app'));
