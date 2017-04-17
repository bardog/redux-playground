import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../state/actions';
import { getStyle } from '../utils';

import Button from '../components/Button';

class App extends Component {

  constructor(props) {
    super(props);
    this.props.toggleQuote();
    this.props.toggleColors();

  }

  getStyle(invert) {
    return({
      backgroundColor: !invert
        ? this.props.textColor
        : this.props.bgColor,
      color: !invert
        ? this.props.bgColor
        : this.props.textColor,
    });
  }

  render() {
    return (
      <div
        style={getStyle( this.props.colors, this.props.invert )}
      >
        <p>
          <span>{this.props.quote.text}</span>
          {this.props.quote.author}
        </p>
        <Button
          onClick={this.props.toggleQuote.bind(this)}
          {...this.props}
        >
          Toggle Quote
        </Button>
        <Button
          onClick={this.props.toggleColors.bind(this)}
          {...this.props}
        >
          Toggle Colors
        </Button>
        <Button
          onClick={this.props.toggleInvert.bind(this)}
          {...this.props}
        >
          Toggle Invert
        </Button>

      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.node,
};

const mapStateToProps = (state={}) => {
  return state;
};

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);