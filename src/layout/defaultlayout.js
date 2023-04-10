import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from '../components/Sidebar'
import Realtime from '../pages/realtime'
import { Pembangkit, ReportsTwo } from '../pages/data_pengolahan'
import User_page from '../pages/user'
import UserInvalid_page from '../pages/user_invalid'
import Dataoperasi from '../pages/Dataoperasi'
import Dokumentation from '../pages/Dokumentation'
import Forum from '../pages/Forum'
import ForumComment from '../pages/ForumComments'
import Profile from '../pages/Profile'
import C_langgambebanharian from '../components/C_langgambebanharian'

const DefaultLayout = () => {
  return (
    <Router>
    <Sidebar/>
      <Switch>
        <Route exact path='/' component={Realtime} />
        <Route path='/realtime' component={Realtime} />
        <Route path='/Data_pengolahan/pembangkit' component={Pembangkit} />
        <Route path='/reports/reports2' component={ReportsTwo} />
        <Route path='/overview/users' component={User_page} />
        <Route path='/overview/usersinvalid' component={UserInvalid_page} />
        <Route path='/dataoperasi' component={Dataoperasi} />
        <Route path='/dokumentation' component={Dokumentation} />
        <Route path='/forum' component={Forum} />
        <Route path='/forumcomment' component={ForumComment} />
        <Route path='/profile' component={Profile} />
        <Route path='/dokumentation' component={Dokumentation} />
        <Route path='/dataoperasi' component={Dataoperasi} />
        <Route path='/C_langgambebanharian' component={C_langgambebanharian} />
      </Switch>
    </Router>
  )
}

export default DefaultLayout