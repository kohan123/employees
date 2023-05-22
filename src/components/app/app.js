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
            {name: 'John C.', salary: 800, increase: false, like: true, id: 1},
            {name: 'Alex M.', salary: 3000, increase: true, like: false, id: 2},
            {name: 'Carl D.', salary: 5000, increase: false, like: false, id: 3}
        ],
        term: ''
    
    }
    this.maxId = 4;
}

deletItem = (id) => {
    this.setState(({data}) => {
        return {
            data: data.filter(item => item.id !== id)
        }
    })
}

addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false,
            like: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem]
            return {
                data: newArr
            }
        })
}

onToggleProp = (id, prop) => {
    this.setState(({data}) => ({
        data: data.map(item => {
           if(item.id === id) {
            return {...item, [prop]: !item[prop]}
           }
           return item;
        })
    }))
}

searchEnp = (items, term) => {
    if(items.length === 0) {
        return items;
    }

    return items.filter(item => {
        return item.name.indexOf(term) > -1
    })
}

onUpdateSearch = (term) => {
    this.setState({term});
}





    render() {
        const {data, term} = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length
        const visibleData = this.searchEnp(data, term);

        return (
            <div className="app">
                <AppInfo
                employees={employees}
                increased={increased}/>
    
                <div className='search-panel'>
                    <SearchPanel onUpdateSearch={this.onUpdateSearch} />
                    <AppFilter/>
                </div>
                <EmployersList 
                data={visibleData}
                onDelete={this.deletItem}
                onToggleProp={this.onToggleProp}/>
                <EmployeesAddForm onAddNewItem={this.addItem}/>
            </div>
        )
    }
};

export default App;