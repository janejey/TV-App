import MenuItem from '../Menu-Item/MenuItem';
import './side-bar.scss'
import Search from '../../assets/icons/Search.png';
import Home from '../../assets/icons/Home.png';
import TV from '../../assets/icons/TV.png';
import Movies from '../../assets/icons/Movies.png';
import Genres from '../../assets/icons/Genres.png';
import Later from '../../assets/icons/Later.png';
import { useState } from 'react';

function SideBar() {
    const [hovered, setHovered] = useState(false)


    return (
        <div className={`bar-container ${hovered ? 'hovered' : 'not-hovered'} `} onMouseEnter={() => { setHovered(true) }} onMouseLeave={() => { setHovered(false) }}>
            <div className='user-info'>
                {hovered ?
                    (<>
                        <img className='user-img' src="https://www.seekpng.com/png/full/73-730482_existing-user-default-avatar.png" alt="User Image" />
                        <p>Daniel</p>
                    </>)
                    : ""}
            </div>
            <div className='icon-menu'>
                <MenuItem hovered={hovered} icon={Search} name={"Search"} />
                <MenuItem hovered={hovered} icon={Home} name="Home"/>
                <MenuItem hovered={hovered} icon={TV} name="TV Shows" />
                <MenuItem hovered={hovered} icon={Movies} name="Movies" />
                <MenuItem hovered={hovered} icon={Genres} name="Genres" />
                <MenuItem hovered={hovered} icon={Later} name="Watch Later" />
            </div>
            <div className='bar-texts'>
                {hovered ? (
                    <>
                        <p>LANGUAGE</p>
                        <p>GET HELP</p>
                        <p>EXIT</p>
                    </>)
                    : ""}
            </div>
        </div>
    )
}

export default SideBar;