import React from "react";
import { getStreams } from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.getStreams();
  }

  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          {this.renderAdmin(stream)}
          <i className="large middle align icon camera"/>
          <div className="content">
            <Link to={`/stream/${stream.id}`}>
              {stream.title}
              </Link>
            <div className="discription">{stream.discription}</div>
          </div>
      </div>
      );
    });
  }

  renderAdmin(stream) {
    if (this.props.isSignedIn) {
      return (
        <div className="right floated content">
          <Link to={`stream/edit/${stream.id}`} className="ui button primary">
            Edit
        </Link>
          <Link to={`stream/delete/${stream.id}`} className="ui button negative">
            Delete
        </Link>
        </div>
      );
    }
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }}>
          <Link to="/stream/new/" className="ui button primary">Create Stream</Link>
        </div>
      );
    }
  }
  render() {
    //console.log(this.props);
    return (
      <div>
        <h2>streams</h2>
        <div className="ui called list">{this.renderList()}</div>
        {this.renderCreate()}
        </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    isSignedIn: state.auth.isSignIn
  };//milestone mistake
};

export default connect(mapStateToProps,{getStreams})(StreamList);
