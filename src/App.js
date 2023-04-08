import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Overview from './pages/Overview';
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports';
import User_page from './pages/user';
import Forum from './pages/Forum';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Realtime from './pages/realtime';
import Dokumentation from './pages/Dokumentation';
import Dataoperasi from './pages/Dataoperasi';
import C_langgambebanharian from './components/C_langgambebanharian';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Realtime} />
        <Route path='/realtime' exact component={Realtime} />
        <Route path='/reports' exact component={Reports} />
        <Route path='/reports/reports1' exact component={ReportsOne} />
        <Route path='/reports/reports2' exact component={ReportsTwo} />
        <Route path='/reports/reports3' exact component={ReportsThree} />
        <Route path='/overview/users' exact component={User_page} />
        <Route path='/dataoperasi' exact component={Dataoperasi} />
        <Route path='/dokumentation' exact component={Dokumentation} />
        <Route path='/forum' exact component={Forum} />
        <Route path='/signin' exact component={Signin} />
        <Route path='/signup' exact component={Signup} />
        <Route path='/profile' exact component={Profile} />
        <Route path='/dokumentation' exact component={Dokumentation} />
        <Route path='/dataoperasi' exact component={Dataoperasi} />
        <Route path='/C_langgambebanharian' exact component={C_langgambebanharian} />
      </Switch>
    </Router>
  );
}

export default App;
