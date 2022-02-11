import logo from './logo.svg';
import { Link, Outlet } from 'react-router-dom';
import './App.css';

function App () {
    return (
        <div className="App">
            <nav>
                <Link to="/invoice">Invoice</Link>
                <Link to="/expenses">Expenses</Link>
            </nav>
            <h1>Bookkeeper</h1>
            <Outlet />
        </div>
    );
}

export default App;
