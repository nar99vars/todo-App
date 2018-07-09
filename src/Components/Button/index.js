import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  render() {
    return (
      <button className={this.props.className} onClick={this.props.onClick} {...this.props}>
        {
          this.props.icon ?
            <i className="material-icons">
              {this.props.icon}
            </i>
            : this.props.children
        }
      </button>
    )
  }
}
Button.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node
};