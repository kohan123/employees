import EmployeesListItem from "../employers-list-item/employers-list-item";
import './employers-list.css';

const EmployersList = ({data}) => {

const element = data.map((item) => { 
    return (
     <EmployeesListItem {...item}/>  //name = {item.name} salary= {item.salary}
    );
})

    return (
        <ul className="app-list list-group">
            {element}
        </ul>
    );
}

export default EmployersList;