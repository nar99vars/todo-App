import React from 'react';
import PropTypes from 'prop-types';
import Stats from '../Stats';
function Header (props) {
    return (
      <header className="App-header">
        <Stats todos = {props.todos}/>
        <h1 className="App-title">{props.title}</h1>
      </header>
    )
}
Header.propTypes={
  title: PropTypes.string,
  todos: PropTypes.array.isRequired,
};
Header.defaultProps ={
  title:"React Todo App",

};
export  default Header ;

