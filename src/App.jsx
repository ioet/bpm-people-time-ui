import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MessageSnackbarContainer from './component/message-snackbar/MessageSnackbarContainer';
import TimeTemplateContainer from './component/time-template/TimeTemplateContainer';
import BpmAppBarContainer from './component/app-bar/BpmAppBarContainer';
import LoginPageContainer from './component/login-page/LoginPageContainer';
import PrivateRouteContainer from './component/login-ensurance/PrivateRouteContainer';

const App = () => (
  <div>
    <BpmAppBarContainer />

    <Router>
      <div>
        <Route path="/login" component={LoginPageContainer} />
        <PrivateRouteContainer path="/" component={TimeTemplateContainer} />
      </div>
    </Router>
    <MessageSnackbarContainer />
  </div>
);

export default App;
