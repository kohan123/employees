import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployeesAddForm from '../employers-add-form/emloyers-add-form';


function App () {
    return (
        <div className="app">
            <AppInfo/>

            <div className='search-panel'>
                <SearchPanel />
                <AppFilter/>
            </div>
            <EmployersList/>
            <EmployeesAddForm/>
        </div>
    );
};

export default App;