import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from '../history';
import Header from "./Header";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamForm from "./streams/StreamForm";
import StreamShow from "./streams/StreamShow";
import StreamList from "./streams/StreamList";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/stream/new/" exact component={StreamCreate} />
            <Route path="/stream/delete/:id" exact component={StreamDelete} />
            <Route path="/stream/edit/:id" exact component={StreamEdit} />
            <Route path="/stream/form" exact component={StreamForm} />
            <Route path="/stream/:id" exact component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;