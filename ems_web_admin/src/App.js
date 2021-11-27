import React, {useState} from 'react';
import Addplan from './Components/AddPlanes/Addplan';
import Dashboard from './Components/Dashboard/Dashboard';
import Datatable from './Components/DataTables/Datatable';
import Login from './Components/Login/Login';
import AllplanList from './Components/AddPlanes/AllplanList';
import AddplanList from './Components/AddPlanes/AddplanList';
import AllUserList from './Components/ListingData/AllUserList';
import AllTransactions from './Components/TransactionHistory/AllTransactions';
import PaymentMethode from './Components/TransactionHistory/PaymentMethode';
import { Route, Switch  } from 'react-router-dom';
import AboutUs from './Components/WebComponents/AboutUs/AboutUs';
import FAQ from './Components/WebComponents/FAQComponents/FAQ';
import TermsAndConditions from './Components/WebComponents/TermsComponents/TermsAndConditions';
import PrivacyPolicy from './Components/WebComponents//PrivacyComponents/PrivacyPolicy';
import AddAbout from './Components/WebComponents/AboutUs/AddAbout';
import AddFAQ from './Components/WebComponents/FAQComponents/AddFAQ';
import AddPrivacy from './Components/WebComponents/PrivacyComponents/AddPrivacy';
import AddTerms from './Components/WebComponents/TermsComponents/AddTerms';
import Features from './Components/AddPlanes/Features';
import AddUserData from './Components/ListingData/AddUserData';
import AboutPage from './Components/WebComponents/AboutUs/AboutPage';
import FAQPages from './Components/WebComponents/FAQComponents/FAQPages';
import PrivacyPages from './Components/WebComponents/PrivacyComponents/PrivacyPages';
import TermsPages from './Components/WebComponents/TermsComponents/TermsPages';
import NotificationList from './Components/Notification/NotificationList';
// import './http-commen';
// import useToken from './useToken';

function App() {
  const [token, setToken] = useState();
  // const { token, setToken } = useToken();


  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <>
    <Switch>
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/addplan" component={Addplan} />
    <Route path="/datatable" component={Datatable} />
    <Route exact path={["/","/login"]} component={Login} />

    <Route path="/allplan" component={AllplanList} />
    <Route path="/addplanlist" component={AddplanList} />
    <Route path="/alluserlist" component={AllUserList} />
    <Route path="/alltransactions" component={AllTransactions} />
    <Route path="/paymentmethode" component={PaymentMethode} />
    <Route path="/about" component={AboutUs} />
    <Route path="/addaboutdata" component={AddAbout} />
    <Route path="/faq" component={FAQ} />
    <Route path="/addfaq" component={AddFAQ} />
    <Route path="/termconditions" component={TermsAndConditions} />
    <Route path="/addterms" component={AddTerms} />
    <Route path="/privacypolicy" component={PrivacyPolicy} />
    <Route path="/addprivacy" component={AddPrivacy} />
    <Route path="/features" component={Features} />
    <Route path="/showuser" component={AddUserData} />
    <Route path="/aboutpage" component={AboutPage} />
    <Route path="/faqpage" component={FAQPages} />
    <Route path="/privacypage" component={PrivacyPages} />
    <Route path="/termspage" component={TermsPages} />
    <Route path="/notification_list" component={NotificationList} />
    </Switch>
    </>
  )
}

export default App;
