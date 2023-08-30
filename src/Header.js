// import React from 'react'
import React from 'react'
// import Movies from './Movies'
// import Eventslider from './Eventslider';
// import Premiere from './Premiere';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>

            <nav className='navbar'>
                <div className='right'>
                    <Link to='/'>
                        <img src="https://in.bmscdn.com/webin/common/icons/logo.svg" alt="" />
                    </Link>

                    <input type="text" name="" id="" placeholder='Search for movies here' />
                </div>
                <div className='left'>
                    <select name="" id="">
                        <option value="Kochi">Kochi</option>

                    </select>
                    <button>Sign in</button>
                </div>
            </nav>

            <div className="menu">
                <div className="rightmenu">
                    <a href="">movies</a>
                    <Link to="/Stream">Stream</Link>

                    <Link to="/Event">Events</Link>
                   
                    <a href="">Plays</a>
                    <Link to="Sport">Sports</Link>
                    
                    <Link to="/Activity">Activities</Link>
                    <Link to="/Buzz">Buzz</Link>
                    <Link to="Icc"> <img src="https://assets-in.bmscdn.com/static/2023/08/cwc23.png" alt="" width={"250px"} /></Link>
                </div>

                <div className="menuleft">
                    <Link to="List">ListYourShow</Link>
                    <Link to="Corporate">Corporates</Link>
                    
                    <Link to="Offer">Offers</Link>
                 <Link to='Gift'>Gift Cards</Link>
                    

                </div>
            </div>
        </div>
    )
}

export default Header