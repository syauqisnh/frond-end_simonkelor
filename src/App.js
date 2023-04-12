// import './App.css';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import User_page from './pages/user';
// import UserInvalid_page from './pages/user_invalid';
// import Forum from './pages/Forum';
// import ForumComment from './pages/ForumComments';
// import Signin from './pages/Signin';
// import Signup from './pages/Signup';
// import Profile from './pages/Profile';
// import Realtime from './pages/realtime';
// import Dokumentation from './pages/Dokumentation';
// import Dataoperasi from './pages/Dataoperasi';
// import C_langgambebanharian from './components/C_langgambebanharian';
// import { Pembangkit, ReportsTwo } from './pages/data_pengolahan';

// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route path='/' exact component={Realtime} />
//         <Route path='/realtime' exact component={Realtime} />
//         <Route path='/Data_pengolahan/pembangkit' exact component={Pembangkit} />
//         <Route path='/reports/reports2' exact component={ReportsTwo} />
//         <Route path='/overview/users' exact component={User_page} />
//         <Route path='/overview/usersinvalid' exact component={UserInvalid_page} />
//         <Route path='/dataoperasi' exact component={Dataoperasi} />
//         <Route path='/dokumentation' exact component={Dokumentation} />
//         <Route path='/forum' exact component={Forum} />
//         <Route path='/forumcomment' exact component={ForumComment} />
//         <Route path='/signin' exact component={Signin} />
//         <Route path='/signup' exact component={Signup} />
//         <Route path='/profile' exact component={Profile} />
//         <Route path='/dokumentation' exact component={Dokumentation} />
//         <Route path='/dataoperasi' exact component={Dataoperasi} />
//         <Route path='/C_langgambebanharian' exact component={C_langgambebanharian} />
//       </Switch>
//     </Router>
//   );
// }

// export default App;

import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DefaultLayout from './layout/defaultlayout';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import ForumComment from './pages/ForumComments';

function App() {
  return (
    <Router>
      <Switch>
            <Route exact path="/" name="Home" component={DefaultLayout} />
            <Route path="/signin" name="Login Page" component={Signin} />
            <Route path="/signup" name="Register Page" component={Signup} />
            <Route path='/forumcomment' component={ForumComment} />
      
      </Switch>
    </Router>
  );
}

export default App;
