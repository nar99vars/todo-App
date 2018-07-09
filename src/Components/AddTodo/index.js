import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Buttom from '../Button';
class AddTodo extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: ""
    };
  }
  handleSubmit = (e)=>{
    e.preventDefault();
    let title = this.state.title;
    if(title){
      this.props.onAdd(title);
      this.setState({title: ''});
    }
  };
  handleChange = (e)=>{
    let title = e.target.value;
    this.setState({title})
  };
  render(){
    return (
      <form className = " todo-form " onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="What do we have to do"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <Buttom type={"submit"}>Add task </Buttom>
      </form>
    )
  }
}
AddTodo.propTypes = {
  onAdd: PropTypes.func.isRequired,
};
export default AddTodo;
