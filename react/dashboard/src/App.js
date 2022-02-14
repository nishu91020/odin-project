import Sidebar from './Sidebar';
import styled from 'styled-components';
import Header from './Header';
import Maincontainer from './Maincontainer';
function App () {
    const App = styled.div`
        display: grid;
        grid-template-columns: 0.75fr 4fr;
        grid-template-rows: 2fr;
    `;
    const MainApp = styled.div`
        display: grid;
        grid-template-row: 0.2fr 6fr;
    `;
    return (
        <App>
            <Sidebar />
            <MainApp>
                <Header />
                <Maincontainer />
            </MainApp>
        </App>
    );
}

export default App;
