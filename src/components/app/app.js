import { Component } from 'react';

import './app.css';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployeesAddForm from '../employers-add-form/emloyers-add-form';


class App extends Component {
    constructor(props) {
    super(props)
    this.state = {
        data: [
            {name: 'John C.', salary: 800, increase: false, id: 1},
            {name: 'Alex M.', salary: 3000, increase: true, id: 2},
            {name: 'Carl D.', salary: 5000, increase: false, id: 3}
        ]
    }
}

deletItem = (id) => {
    this.setState(({data}) => {
        return {
            data: data.filter(item => item.id !== id)
        }
    })
}


    render() {
        return (
            <div className="app">
                <AppInfo/>
    
                <div className='search-panel'>
                    <SearchPanel />
                    <AppFilter/>
                </div>
                <EmployersList 
                data={this.state.data}
                onDelete={this.deletItem}/>
                <EmployeesAddForm/>
            </div>
        );
    }
};

export default App;