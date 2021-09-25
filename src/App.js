import './App.css';
import Entry from './page/entry/entry.page';
import { DefaultLayout } from './components/Layout/DefaultLayout';
import Dashboard from './components/Layout/Dashboard';
import PageBreadcrumb from './components/Layout/Breadcrumb';
import AddNewTicket from './page/new-ticket/AddNewTicket.page';
function App() {
  return (
    <div className="App">
    {/* <Entry /> */}
    <DefaultLayout>
        {/* <Dashboard /> */}
        <AddNewTicket />
    </DefaultLayout>
    </div>
  );
}

export default App;
