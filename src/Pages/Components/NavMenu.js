import React, {Component} from "react";
import { NavLink, Link } from 'react-router-dom';
import { Header, Segment, Menu } from 'semantic-ui-react';
import './parts.css';

export default class NavMenu extends Component {
    state = {activeItem: ''};

    handleItemClick = (e, { name }) =>
        this.setState({ activeItem: name });

    render() {

        const { activeItem } = this.state;

        return(
            <div className='nav-bar'>
                <Segment className="menuNavBar" attached raised borderless>
                    <Menu className="menuNavBar" pointing secondary borderless>
                        <Menu.Menu position='right'>
                            <Menu.Item as={NavLink} name='home' exact to='/' active={activeItem === 'home'} onClick={this.handleItemClick}/>
                            <Menu.Item as={NavLink} name='about us' to='/about-us' active={activeItem === 'about us'} onClick={this.handleItemClick}/>
                            <Menu.Item as={NavLink} name='portfolio' to='/portfolio' active={activeItem === 'portfolio'} onClick={this.handleItemClick} />
                            <Menu.Item as={NavLink} name='FAQ' to='/FAQ' active={activeItem === 'FAQ'} onClick={this.handleItemClick} />
                            <Menu.Item as={NavLink} name='services' to='/services' active={activeItem === 'services'} onClick={this.handleItemClick} />
                            <Menu.Item as={NavLink} name='contact' to='/contact-us' active={activeItem === 'contact'} onClick={this.handleItemClick} />
                            <Menu.Item as={NavLink} name='careers' to='/careers' active={activeItem === 'careers'} onClick={this.handleItemClick} />
                        </Menu.Menu>
                    </Menu>
                </Segment>
            </div>
        );
    }
}
