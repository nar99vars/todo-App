import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Checked from './Checked';
import Button from './Button';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false
    };
  }

  handleEdit = () => {
    this.setState({
      edit: true
    })
  };
  handleSubmit = (e) => {
    e.preventDefault();
    let title = this.refs.title.value;
    this.props.onEdit(this.props.id, title);
    this.setState({
      edit: false
    })

  };

  renderDisplay() {
    return (
      <div className={`todo ${(this.props.completed) ? 'completed' : '' }`}>
        <Checked
          checked={this.props.completed}
          onChange={() => this.props.onStatusChange(this.props.id)}/>
        <span className="todo-title"> {this.props.title} </span>
        <Button className="edit-icon" icon="edit" onClick={this.handleEdit}/>
        <Button
          className="delete icon"
          icon="delete"
          onClick={() => this.props.onDelete(this.props.id)}/>
      </div>
    )

  }

  renderEdit() {
    return (
      <form className="todo-edit-form" onSubmit={this.handleSubmit}>
        <input type="text" ref="title" defaultValue={this.props.title}/>
        <Button className="save icon" icon="save" type="submit"/>
      </form>
    )
  }

  render() {
    return !this.state.edit ? this.renderDisplay() : this.renderEdit();
  }
}

Todo.propTypes = {
  onStatusChange: PropTypes.func.isRequired,
  icon: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default Todo;

