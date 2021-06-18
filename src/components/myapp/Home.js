import React from 'react';
import Navbar from './Navbar';
import Card from './Card';
import { connect } from 'react-redux';
import { addNewTodo, fetchAllTodo, pushAllTodo } from 'actions';

import { useEffect } from 'react';

function Home(props) {
  const { todoList, addNew, pushTodo, user } = props;
  const uploadChanges = () => {
    pushTodo(props.state);
  }
  // useEffect(() => { defaultState() })
  return (
    <div>
      <Navbar />
      <div className="container d-flex flex-wrap">
        {todoList &&
          todoList.map((todo, i) => {
            return <Card key={i} localID={i} todo={todo} />;
          })}
        {!todoList.length && <div className="alert alert-primary m-2">No Todos on this day</div>}
        <button className="btn btn-primary m-2" onClick={addNew}>
          Add New TODO
        </button>
        <button className="btn btn-success m-2" onClick={uploadChanges}>
          SAVE
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return { ...state.data.todoReducer, state: state.data.todoReducer, user: state.data.auth.user };
};

const mapDispatchToProps = dispatch => {
  return {
    addNew: () => dispatch(addNewTodo()),
    fetchTodo: (date) => dispatch(fetchAllTodo(date)),
    pushTodo: state => dispatch(pushAllTodo(state)),

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
