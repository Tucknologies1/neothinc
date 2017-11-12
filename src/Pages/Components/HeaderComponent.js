import React, {Component} from "react";
import { NavLink, Link } from 'react-router-dom';
import { Header, Segment, Menu } from 'semantic-ui-react';

export default class HeaderComponent extends Component {
    state = {activeItem: 'home'};

    handleItemClick = (e, { name }) =>
        this.setState({ activeItem: name });

    render() {

        const { activeItem } = this.state;

        return(
            /*<div>
                <Header size="huge" className="headerContainer">
                    <div className="title">
                        Thinc Icon
                    </div>
                    <div className="links">
                        <div className="headerLinks">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/about-us">About Us</NavLink>
                            <NavLink to="/portfolio">Portfolio</NavLink>
                            <NavLink to="/FAQ">FAQ</NavLink>
                            <NavLink to="/services">Services</NavLink>
                            <NavLink to="/contact-us">Contact</NavLink>
                            <NavLink to="/careers">Careers</NavLink>
                        </div>
                    </div>
            </Header>
            </div>*/
            <div>
                <Segment inverted attached raised>
                    <Menu inverted pointing secondary>
                        THiNC
                        <Menu.Menu position='right'>
                            <Menu.Item as={Link} name='home' to='/' active={activeItem === 'home'} onClick={this.handleItemClick}/>
                            <Menu.Item as={Link} name='about us' to='/about-us' active={activeItem === 'about us'} onClick={this.handleItemClick}/>
                            <Menu.Item as={Link} name='portfolio' to='/portfolio' active={activeItem === 'portfolio'} onClick={this.handleItemClick} />
                            <Menu.Item as={Link} name='FAQ' to='/FAQ' active={activeItem === 'FAQ'} onClick={this.handleItemClick} />
                            <Menu.Item as={Link} name='services' to='/services' active={activeItem === 'services'} onClick={this.handleItemClick} />
                            <Menu.Item as={Link} name='contact' to='/contact-us' active={activeItem === 'contact'} onClick={this.handleItemClick} />
                            <Menu.Item as={Link} name='careers' to='/careers' active={activeItem === 'careers'} onClick={this.handleItemClick} />
                        </Menu.Menu>
                    </Menu>
                </Segment>
            </div>
        );
    }
}