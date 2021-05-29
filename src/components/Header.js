import React from 'react';
import '../css/style.scss'

const Header = (props) => (
    <div className='header'>
        <div className='grid'>
            <div className='start'>
                <a href='/'>Home</a>
            </div>
            <div>
                {props.nickname ? (<span className='nickname'>
                    <i class="fas fa-users"></i>
                    {props.nickname}
                </span>) : (<React.Fragment>
                    <a href='/'>Login</a>
                    <a href='/'>Register</a>
                </React.Fragment>)}
            </div>
        </div>
    </div>
)
export default Header;