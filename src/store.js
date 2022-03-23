import axios from 'axios';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const GET_STUDENTS = 'GET_STUDENTS';
const CREATE_STUDENT = 'CREATE_STUDENT';
const EDIT_STUDENT = 'EDIT_STUDENT';
const DELETE_STUDENT = 'DELETE_STUDENT';
const GET_CAMPUSES = 'GET_CAMPUSES';
const CREATE_CAMPUS = 'CREATE_CAMPUS';
const EDIT_CAMPUS  = 'EDIT_CAMPUS';
const DELETE_CAMPUS = 'DELETE_CAMPUS';


const students = (state = [], action) => {
  switch (action.type) {
    case GET_STUDENTS:
      return action.students;
    case CREATE_STUDENT:
      return [...state, action.student];
    case EDIT_STUDENT:
      return state.map(student => student.id === +action.student.id ? action.student : student);
    case DELETE_STUDENT:
      return state.filter(student => student.id !== action.studentId);
    default:
      return state;
  }
};

const campuses = (state = [], action) => {
  switch (action.type) {
    case GET_CAMPUSES:
      return action.campuses;
    case CREATE_CAMPUS:
      return [...state, action.campus];
    case EDIT_CAMPUS:
      return state.map(campus => campus.id === +action.campus.id ? action.campus : campus);
    case DELETE_CAMPUS:
      return state.filter(campus => campus.id !== action.campusId);
    default:
      return state;
  }
};

const getCampuses = () => {
  return async dispatch => {
    const { data: campuses } = await axios.get('/api/campuses');
    dispatch({ type: GET_CAMPUSES, campuses });
  };
};

const createCampus = (inputs) => {
  return async dispatch => {
    const { data: campus } = await axios.post('/api/campuses', inputs);
    dispatch({ type: CREATE_CAMPUS, campus });
  };
};

const editCampus = (inputs, id) => {
  return async dispatch => {
    const { data: campus } = await axios.put(`/api/campus/${id}`, inputs);
    dispatch({ type: EDIT_CAMPUS, campus });
  };
};

const deleteCampus = (campusId) => {
  return async dispatch => {
    await axios.delete(`/api/campus/${campusId}`);
    dispatch({ type: DELETE_CAMPUS, campusId });
  };
};

const getStudents = () => {
  return async dispatch => {
    const { data: students } = await axios.get('/api/students');
    dispatch({ type: GET_STUDENTS, students });
  };
};

const createStudent = (inputs) => {
  return async dispatch => {
    const { data: student } = await axios.post('/api/students', inputs);
    dispatch({ type: CREATE_STUDENT, student });
  };
};

const editStudent = (inputs, id) => {
  return async dispatch => {
    const { data: student } = await axios.put(`/api/students/${id}`, {...inputs, id});
    dispatch({ type: EDIT_STUDENT, student });
  };
};

const deleteStudent = (studentId) => {
  return async dispatch => {
    await axios.delete(`/api/students/${studentId}`);
    dispatch({ type: DELETE_STUDENT, studentId });
  };
};

const reducer = combineReducers({
  students,
  campuses,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
export {
  getCampuses,
  getStudents,
  createStudent,
  editStudent,
  deleteStudent,
  createCampus,
  editCampus,
  deleteCampus,
}