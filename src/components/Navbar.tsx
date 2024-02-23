import { Link } from 'react-router-dom'

import './Navbar.css'

function Navbar() {
  return (
    <nav className='navbar'>
    <h2>
        <Link to={`/`}>Home</Link>
    </h2>
    <ul>
        <li>
        <Link to={`/new`} className="new-user"> New User</Link>
        </li>
        <li>
        <Link to={`/login`}>Login</Link>
        </li>
    </ul>
    </nav>
  )
}

export default Navbar