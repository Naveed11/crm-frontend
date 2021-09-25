import './App.css';
import Entry from './page/entry/entry.page';
import { DefaultLayout } from './components/Layout/DefaultLayout';
import Dashboard from './components/Layout/Dashboard';
function App() {
  return (
    <div className="App">
    {/* <Entry /> */}
    <DefaultLayout>
        <Dashboard />
    </DefaultLayout>
    </div>
  );
}

export default App;
