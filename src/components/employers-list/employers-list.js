import EmployeesListItem from "../employers-list-item/employers-list-item";
import './employers-list.css';

const EmployersList = ({data}) => {

const element = data.map((item) => { 

    const {id, ...listItem} = item;//вытаскиваем только id, а все остальные props записываем в listItem

    return (
     <EmployeesListItem key = {id} {...listItem}/>  //name = {item.name} salary= {item.salary}
    );
})

    return (
        <ul className="app-list list-group">
            {element}
        </ul>
    );
}

export default EmployersList;