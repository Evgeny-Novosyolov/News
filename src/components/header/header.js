import React from 'react';
import {Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import './header.css';

const Header = ({...props}) => {

    const {location : {pathname}} = props
    return (
        <div className="header d-flex">
            <ul>
                <li className={pathname === '/' ? 'active' : null}>
                    <Link to='/'>
                        Главная
                    </Link>
                </li>
                <li className={pathname === '/favorites' ? 'active' : null}>
                    <Link to='/favorites'>
                         Избранное
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default withRouter(Header);