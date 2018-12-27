import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MessageSnackbarContainer from './component/message-snackbar/MessageSnackbarContainer';
import BpmAppBarContainer from './component/app-bar/BpmAppBarContainer';
import LoginPageContainer from './component/login-page/LoginPageContainer';
import PrivateRouteContainer from './component/login-ensurance/PrivateRouteContainer';
import MainPage from './component/main-page/MainPage';
import CreateTemplateDialogContainer from './component/time-template/create/CreateTemplateDialogContainer';

const App = () => (
  <div>
    <BpmAppBarContainer />

    <Router>
      <div>
        <Route path="/login" component={LoginPageContainer} />
        <PrivateRouteContainer path="/" component={MainPage} />
      </div>
    </Router>
    <MessageSnackbarContainer />
    <CreateTemplateDialogContainer/>
  </div>
);

export default App;
