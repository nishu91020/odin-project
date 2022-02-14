import Sidebar from './Sidebar';
import styled from 'styled-components';
import Header from './Header';
import Maincontainer from './Maincontainer';
function App () {
    const App = styled.div`
        height: 722px;
        display: grid;
    `;

    return (
        <App>
            <Sidebar />
            <Header />
            <Maincontainer />
        </App>
    );
}

export default App;
