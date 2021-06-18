import React from 'react';
import { fetchAllTodo, pushAllTodo } from 'actions';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react'
function DatePick(props) {
  const { date, getNewData } = props;
  const [local, setLocal] = useState(date)
  useEffect(() => {
    console.log(props)
    getNewData(local)
  }, [local])


  return <input type="text" value={local}
    onBlur={(e) => e.target.type = "text"}
    onFocus={(e) => e.target.type = "date"}
    onChange={(e) => setLocal(e.target.value)}
  />


}

const mapStateToProps = state => {
  return { date: state.data.todoReducer.date, ...state.data.todoReducer };
};
const mapDispatchToProps = dispatch => {
  return { getNewData: (date) => dispatch(fetchAllTodo(date)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(DatePick);
