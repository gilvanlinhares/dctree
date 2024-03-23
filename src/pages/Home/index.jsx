import { Link } from "react-router-dom";

export default function Dashboard(){
    return (
        <ul>
            <li>
                <Link to="/lista-links">Listar links</Link>
            </li>
            <li>
                <Link to="/admin/dashboard">Dashboard</Link>
            </li>
        </ul>
    );
}