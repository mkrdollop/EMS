import React from 'react';
import Addplan from './Components/AddPlanes/Addplan';
import Dashboard from './Components/Dashboard/Dashboard';
import Datatable from './Components/DataTables/Datatable';
import Login from './Components/Login/Login';

import { Route  } from 'react-router-dom';

function App() {
  return (
    <>
   
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/addplan" component={Addplan} />
    <Route path="/datatable" component={Datatable} />
    <Route path="/login" component={Login} />

    {/* <Redirect from="/" to="/login" /> */}

    </>
  )
}

export default App;
