import React from "react";
import { connect } from "react-redux";
import StreamForm from './StreamForm';
import {getStream,editStream} from '../../actions';
import { formValues } from "redux-form";
import _ from 'lodash';

class StreamEdit extends React.Component {

  //in React-Router every component is responsible for 
  //its own data loading.
  componentDidMount() {
    this.props.getStream(this.props.match.params.id);
  }
  
  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id,formValues);
  };

  render() {
    //console.log(this.props);
    if (!this.props.formValues) {
      return <div>Loading ..!!</div>;
    }
    
    return (
      <div>
        <h2>Edit Stream</h2>
        <StreamForm
          initialValues={_.pick(this.props.formValues, 'title', 'discription')}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  return { formValues: state.streams[ownProps.match.params.id] }
};

export default connect(mapStateToProps,
  {getStream,editStream}
)(StreamEdit);
