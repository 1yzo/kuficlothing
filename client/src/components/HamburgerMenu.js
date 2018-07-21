import React from 'react';
import '../styles/hamburger-menu.css';

class HamburgerMenu extends React.Component {
    state = {
        style: {}
    }
    
    componentWillMount() {
        const flexDirection = this.props.position === 'top' ? ( 
            'row' 
        ) : (
            'column'
        );

        this.setState(() => ({ style: {
            display: 'flex',
            flexDirection,
            background: this.props.color || '#eee'
        }}));
    }

    handleClick = (e) => {
        const targetClass = e.target.className || 'none';
        if (targetClass) {
            if (!targetClass.includes('hamburger-menu') && !targetClass.includes('hamburger-trigger')) {
                console.log(targetClass);
                this.props.close();
            }
        } 
    }
    
    componentDidMount() {
        window.addEventListener('click', this.handleClick);
    }

    render() {
        return (
            <div
                className={this.props.show ? 'hamburger-menu hamburger-menu--show' : 'hamburger-menu'}
                style={this.state.style}
            >
                {this.props.items.map((item, ix) => {
                    return(<div style={{ marginBottom: '2rem' }}key={ix}>{item}</div>);
                })}
            </div>
        );
    }
}

HamburgerMenu.defaultProps = {
    position: 'left',
    items: [],
};

export default HamburgerMenu;