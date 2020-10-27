import React from "react";
import {getStream} from '../../actions';
import {connect} from 'react-redux';

class StreamShow extends React.Component {
  
  componentDidMount() {
    this.props.getStream(this.props.match.params.id);
  }

  render() {
    console.log(this.props);
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    const { title, discription } = this.props.stream;

    return (
      <div>
        <h1>{this.props.stream.title}</h1>
        <h5>{this.props.stream.discription}</h5>
      </div>
    );
  };
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps,{getStream}) (StreamShow);
