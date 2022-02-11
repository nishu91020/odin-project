import React from 'react';
import { ThemeContext, themes } from './theme-context';
import ThemedButton from './themed-button';

function Toolbar (props) {
    return <ThemedButton onClick={props.changeTheme}>Change Theme</ThemedButton>;
}
export default class App extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            theme: themes.light
        };
        this.toggleTheme = this.toggleTheme.bind(this);
    }
    toggleTheme () {
        this.setState({ theme: this.state.theme === themes.dark ? themes.light : themes.dark });
    }
    render () {
        return (
            <div className="App">
                <ThemeContext.Provider value={this.state.theme}>
                    <Toolbar changeTheme={this.toggleTheme} />
                </ThemeContext.Provider>
                <ThemedButton>Hello</ThemedButton>
            </div>
        );
    }
}
