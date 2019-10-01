import React from 'react'
import { Link } from 'react-router-dom';
import './assets/scss/nav.scss';

class Nav extends React.Component {
    constructor() {
        super()
        this.state = {
            dropdownOpen: false,
            isOpen: false,
            isSmall: Boolean
        }
    }
    componentDidMount() {
        this.handleWindowSize();
        document.addEventListener('click', this.handleDocumentClick, false);
        window.addEventListener('resize', this.handleWindowSize, false)
    }
    componentWillUnmount() {
        document.removeEventListener('click', this.handleDocumentClick, false)
        window.removeEventListener('resize', this.handleWindowSize, false)
    }
    handleWindowSize = () => {
        if(window.innerWidth <= 900 && !this.state.isSmall) {
            this.setState({ isSmall: true })
        } else if(window.innerWidth > 900 && this.state.isSmall) {
            this.setState({ isSmall: false })
        }
    }
    handleDocumentClick = e => {
        if( !this.refs.economic.contains(e.target) && this.state.dropdownOpen ) {
            this.setState({ dropdownOpen: false })
        }
        if( !this.refs.root.contains(e.target) && this.state.isOpen ) {
            this.setState({
                isOpen: false,
                dropdownOpen: false
            })
        }
    }
    menuToggle = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }
    handleClick = () => {
        this.setState({ dropdownOpen: !this.state.dropdownOpen })
    }
    handleMenuClick = () => {
        if(this.state.isSmall && this.state.isOpen) {
            this.setState({ isOpen: false, dropdownOpen: false })
        }
    }
    render() {
        return (
            <div className="navbar-container">
                <div className="nav-top-row">
                    <p className="nav-text"> <i className="fas fa-phone fa-xs"></i> (662) 417-2501  </p>
                    <p className="nav-text"> <i className="fas fa-envelope fa-xs"></i> donnie@northmsproperties.com </p>
                    <a href="tel:6624172501" className="nav-text-small"> 
                        <i className="fas fa-phone"></i> 
                    </a>
                    <a href="mailto:donnie@northmsproperties.com" className="nav-text-small">
                        <i className="fas fa-envelope"></i>
                    </a>
                </div>
                <div className="navbar" ref="root">
                <div className="nav-clicker" onClick={this.menuToggle}></div>
                <div id="ham-menu" className={ this.state.isOpen ? 'isopen' : '' }>
                    <span id="span1"></span>
                    <span id="span2"></span>
                    <span id="span3"></span>
                    <span id="span4"></span>
                </div>
                    <Link onClick={this.handleMenuClick} to="/" className="nav-header"> North Ms Properties </Link>
                    <ul className={this.state.isOpen ? "nav-link-container" : 'nav-link-closed'}>
                        <li className="nav-link-holder">
                            <Link onClick={this.handleMenuClick} to="/" className="nav-link"> Home </Link>
                        </li>
                        <li className="nav-link-holder">
                            <Link onClick={this.handleMenuClick} to="/cost-approach" className="nav-link"> Costs </Link>
                        </li>
                        <li className="nav-link-holder">
                            <Link onClick={this.handleMenuClick} to="/description-of-property" className="nav-link"> Description </Link>
                        </li>
                        <li ref="economic" className="nav-link-holder" onClick={this.handleClick}>
                            <p className="nav-link"> Economic Profiles </p>
                        </li>
                        <li className="nav-link-holder">
                            <Link onClick={this.handleMenuClick} to="/contact" className="nav-link"> Contact </Link>
                        </li>
                    </ul>
                    <div className={this.state.dropdownOpen ? "nav-dropdown" : "nav-dropdown-closed"}>
                        <li className="dropdown-link-holder"> 
                            <a onClick={this.handleMenuClick} className="dropdown-link" target="_blank" rel="noopener noreferrer" href="https://extension.msstate.edu/sites/default/files/pdf/economic-profile/carroll_county_economic.pdf"> 
                                Carroll County
                            </a>
                        </li>
                        <li className="dropdown-link-holder">
                            <a onClick={this.handleMenuClick} className="dropdown-link" target="_blank" rel="noopener noreferrer" href="https://extension.msstate.edu/sites/default/files/pdf/economic-profile/montgomery_county_economic.pdf"> 
                                Montgomery County
                            </a>
                        </li>
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav;