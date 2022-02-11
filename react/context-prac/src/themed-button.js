import React from 'react';
import { ThemeContext } from './theme-context';

class ThemedButton extends React.Component {
    render () {
        let props = this.props;
        let theme = this.context;
        return (
            <div>
                <button {...props} style={{ background: theme.background, color: theme.foreground }} />
            </div>
        );
    }
}
ThemedButton.contextType = ThemeContext;
export default ThemedButton;
