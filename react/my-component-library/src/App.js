import Sidebar from './Sidebar';
import Header from './Header';
import styled from 'styled-components';
function App () {
    const AppContainer = styled.div`overflow-y: hidden;`;
    return (
        <AppContainer>
            <Header />
            <Sidebar visible="false" />
        </AppContainer>
    );
}

export default App;
