import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Headers from './Components/Headers';
import Todo from './Components/Todo';
import AddTodo from './Components/AddTodo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: this.props.initialDate,
    }
  }
  nextId = ()=>{
    this._nextId = this._nextId || 6;
    return this._nextId++;

  };
  handleAdd = (title) => {
    const todo={
      id:this.nextId(),
      title,
      completed:false
    };
    let todos =[...this.state.todos,todo];
    this.setState({todos});
  };
  habdleStatusChange = (id) => {
    let todos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({todos})
  };
  handleDelete = (id) => {
    let todos= this.state.todos.filter((todo)=> todo.id !== id);
    this.setState({todos});
  };
  hadleEdit = (id,title) =>{
    const todos= this.state.todos.map((todo)=>{
      if(todo.id === id){
        todo.title = title;
      }
      return todo;
    });
    this.setState({todos})
  };
  render() {
    return (
      <main className="App">

        <Headers title={this.props.title}  todos={this.state.todos}/>
        <AddTodo onAdd={this.handleAdd}/>
        <section className="todo-list">
          {this.state.todos.map((item) =>
            <Todo
              key={item.id}
              id={item.id}
              title={item.title}
              completed={item.completed}
              onStatusChange={this.habdleStatusChange}
              onDelete={this.handleDelete}
              onEdit={this.hadleEdit}
            />
          )}
        </section>
      </main>
    );
  }
}

App.defaultProps = {
  title: 'Rect Todo App'
};
App.propTypes = {
  title: PropTypes.string,
  initialDate: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.isRequired,
    title: PropTypes.isRequired,
    completed: PropTypes.bool.isRequired
  })).isRequired
};
export default App;
