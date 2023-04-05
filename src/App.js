import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Overview from './pages/Overview';
import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports';
import Team from './pages/Team';
import Forum from './pages/Forum';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import Realtime from './pages/realtime';

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
        <Route path='/overview/users' exact component={Overview} />
        <Route path='/forum' exact component={Forum} />
        <Route path='/signin' exact component={Signin} />
        <Route path='/signup' exact component={Signup} />
        <Route path='/profile' exact component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
