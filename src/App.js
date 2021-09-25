import './App.css';
import Entry from './page/entry/entry.page';
import { DefaultLayout } from './components/Layout/DefaultLayout';
import Dashboard from './components/Layout/Dashboard';
import PageBreadcrumb from './components/Layout/Breadcrumb';
import AddNewTicket from './page/new-ticket/AddNewTicket.page';
import TicketListing from './page/ticket-listing/TicketListing.page';
import Ticket from './page/ticket/Ticket.page';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        
    <Route exact path="/"><Entry/></Route>
    <DefaultLayout>
      <Route path="/dashboard"><Dashboard /></Route>
      <Route path="/add-ticket"><AddNewTicket /></Route>
      <Route path="/ticket-list"><TicketListing /></Route>
       
      
        
        {/* <Ticket /> */}
    </DefaultLayout>
    </Switch>
    </Router>
    </div>
  );
}

export default App;
