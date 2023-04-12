import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Realtime from "../pages/realtime";
import { Pembangkit, ReportsTwo } from "../pages/data_pengolahan";
import User_page from "../pages/user";
import UserInvalid_page from "../pages/user_invalid";
import Dataoperasi from "../pages/Dataoperasi";
import Dokumentation from "../pages/Dokumentation";
import Forum from "../pages/Forum";
import ForumComment from "../pages/ForumComments";
import Profile from "../pages/Profile";
import C_langgambebanharian from "../components/C_langgambebanharian";
import Energi from "../components/Energi";
import S_pembangkit from "../components/S_pembangkit";
import Energi_Pembangkit from "../components/Energi_Pembangkit";
import BPP from "../components/BPP";
import Perencanaan from "../components/Perencanaan";
import Evaluasi from "../components/Evaluasi";
import Kelistrikkan from "../components/Kelistrikkan";
import SOP from "../components/SOP";
import LineDiagram from "../components/LineDiagram";


const DefaultLayout = () => {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route exact path="/" component={Realtime} />
        <Route path="/realtime" component={Realtime} />
        <Route path="/Data_pengolahan/pembangkit" component={Pembangkit} />
        <Route path="/reports/reports2" component={ReportsTwo} />
        <Route path="/overview/users" component={User_page} />
        <Route path="/overview/usersinvalid" component={UserInvalid_page} />
        <Route path="/dataoperasi" component={Dataoperasi} />
        <Route path="/dokumentation" component={Dokumentation} />
        <Route path="/forum" component={Forum} />
        <Route path="/forumcomment" component={ForumComment} />
        <Route path="/profile" component={Profile} />
        <Route path="/dokumentation" component={Dokumentation} />
        <Route path="/dataoperasi" component={Dataoperasi} />
        <Route path="/C_langgambebanharian" component={C_langgambebanharian} />
        <Route path="/Energi" component={Energi} />
        <Route path="/S_pembangkit" component={S_pembangkit} />
        <Route path="/Energi_Pembangkit" component={Energi_Pembangkit} />
        <Route path="/Perencanaan" component={Perencanaan} />
        <Route path="/BPP" component={BPP} />
        <Route path="/Evaluasi" component={Evaluasi} />
        <Route path="/Kelistrikkan" component={Kelistrikkan} />
        <Route path="/SOP" component={SOP} />
        <Route path="/LineDiagram" component={LineDiagram} />
        <Route
          path="/C_langgambebanharian/:pilihan_id"
          exact
          component={C_langgambebanharian}
        />
        <Route path="/C_Energi/:pilihan_id" exact component={Energi} />
        <Route path="/S_pembangkit/:pilihan_id" exact component={S_pembangkit} />
        <Route path="/Energi_Pembangkit/:pilihan_id" exact component={Energi_Pembangkit} />
        <Route path="/BPP/:pilihan_id" exact component={BPP} />
        <Route path="/Perencanaan/:pilihan_id" exact component={Perencanaan} />
        <Route path="/Evaluasi/:pilihan_id" exact component={Evaluasi} />
        <Route path="/Kelistrikkan/:pilihan_id" exact component={Kelistrikkan} />
        <Route path="/SOP/:pilihan_id" exact component={SOP} />
        <Route path="/LineDiagram/:pilihan_id" exact component={LineDiagram} />
      </Switch>
    </Router>
  );
};

export default DefaultLayout;
