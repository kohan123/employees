import EmployeesListItem from "../employers-list-item/employers-list-item";
import './employers-list.css';

const EmployersList = ({data, onDelete, onToggleProp}) => {

const element = data.map((item) => { 

    const {id, ...listItem} = item;//вытаскиваем только id, а все остальные props записываем в listItem

    return (
     <EmployeesListItem 
     key = {id} {...listItem} //name = {item.name} salary= {item.salary}
     onDelete={() => onDelete(id)} 
     onToggleProp = {(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}/>  
    );
})

    return (
        <ul className="app-list list-group">
            {element}
        </ul>
    );
}

export default EmployersList;