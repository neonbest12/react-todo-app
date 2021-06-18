import React from 'react';
import { connect } from 'react-redux';
import { removeTodo, setDescriptionAction, setIsEditing, setIsCompleted } from 'actions';
import { bindActionCreators } from 'redux';

function Card(props) {
  const { removeTodo, todo, setIsEditing, setDescriptionAction, setIsCompleted } = props;
  const { id, description, isEditing, isCompleted } = todo;

  const removeHandle = () => {
    removeTodo(id);
  };

  const edit = () => {
    if (isEditing) {
      const val = document.getElementById(id + 'input').value;
      if (val) setDescriptionAction(id, val);
    }
    setIsEditing(id);
  };

  const setCompleted = () => setIsCompleted(id);

  // console.log(isEditing)
  return (
    <div id={id + 'card'} className="card border-info m-2  " style={{ maxWidth: '18rem', width: '33%' }}>
      <div className="card-header text-center " style={{ fontSize: '40px', fontWeight: 'bold' }}>
        {id + 1}
      </div>
      <div className="card-body">
        {/* <h5 className="card-title">Info card title</h5> */}
        {isEditing && <input className="w-100" id={id + 'input'} type="text" />}
        {/* {isEditing && <button type="button" onClick={setDescription} className="btn btn-outline-success">Save</button>} */}
        {isEditing || <p className="card-text text-center">{description}</p>}
      </div>
      <div className="card-footer d-flex justify-content-between">
        <button
          type="button"
          className={isCompleted ? 'btn btn-success' : 'btn btn-outline-success'}
          onClick={setCompleted}
        >
          {isCompleted ? 'Completed' : 'Pending'}
        </button>
        <button type="button" id={id + 'btn'} onClick={removeHandle} className="btn btn-outline-danger">
          Remove
        </button>
        <button type="button" className="btn btn-outline-dark" onClick={edit}>
          {isEditing ? 'Save' : 'Edit'}
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return { ...state };
};
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ removeTodo, setDescriptionAction, setIsEditing, setIsCompleted }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
