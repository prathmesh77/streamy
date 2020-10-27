import {
  SIGN_IN, SIGN_OUT,
  STREAM_CREATE,
  STREAM_DELETE,
  STREAM_EDIT,
  FETCH_STREAM,
  FETCH_STREAMS
} from "./types";
import stream from '../apis/stream';
import history from '../history';

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createStream = formValues => async (dispatch,getState) => {
  const { userId } = getState().auth;
  const response = await stream.post('/streams', { ...formValues,userId });

  dispatch({ type: STREAM_CREATE, payload: response.data });
  history.push('/');
};

export const getStream = id => async dispatch => {
  const respose = await stream.get(`/streams/${id}`);

  dispatch({ type: FETCH_STREAM, payload: respose.data });
};

export const getStreams = () => async dispatch=>{
  const respose = await stream.get('/streams');

  dispatch({ type: FETCH_STREAMS, payload: respose.data });
};

export const editStream = (id, formValues) =>async dispatch=> {
  const response = await stream.put(`/streams/${id}`, formValues);
  
  dispatch({ type: STREAM_EDIT, payload: response.data });
  history.push('/');
};

export const deleteStream = id => async dispatch=>{
  await stream.delete(`/streams/${id}`);

  dispatch({ type: STREAM_DELETE, payload: id });
  history.push("/");
};


