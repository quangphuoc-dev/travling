import { Link } from 'react-router-dom';

function Menu(props){
    const {href,label}=props;
    return <Link 
                to={href}
                href={href}>{label}</Link>;
}
export default Menu;