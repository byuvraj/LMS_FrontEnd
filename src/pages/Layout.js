import { Outlet, Link } from "react-router-dom";
const Layout = () => {
return (
<><nav>
    <ul className="header">
    <li><Link to="/">Home</Link> </li>
    <li><Link to="/dashboard">Dashboard</Link> </li>
    </ul>
</nav>
<Outlet />
</>
)
};
export default Layout;