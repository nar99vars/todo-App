import React from 'react';

function Stats(props){
  let total = props.todos.length;
  let completed = props.todos.filter((todo) => todo.completed).length;
  let notComleted = total - completed;
  return (
    <table className="state">
      <tbody>
      <tr>
        <th>all task</th>
        <td>{total}</td>
      </tr>
      <tr>
        <th>completed</th>
        <td>{completed}</td>
      </tr>
      <tr>
        <th>Left</th>
        <td>{notComleted}</td>
      </tr>
      </tbody>
    </table>
  );
}

export default Stats;