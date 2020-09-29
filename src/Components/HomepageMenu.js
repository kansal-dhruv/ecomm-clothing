import React, {Component} from "react";
import './HomepageMenu.scss'
class HomepageMenu extends Component{
    constructor(props) {
        super();
        this.state={};
    }
    render(){
        return(
        <div className='Homepage'>
            <div className='menu'>
                <div className='menu-item'>
                    <div className='content'>
                        <h1>HATS</h1>
                        <span>SHOP NOW</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1>JACKETS</h1>
                        <span>SHOP NOW</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1>SNEAKERS</h1>
                        <span>SHOP NOW</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1>MEN</h1>
                        <span>SHOP NOW</span>
                    </div>
                </div>
                <div className='menu-item'>
                    <div className='content'>
                        <h1>WOMEN</h1>
                        <span>SHOP NOW</span>
                    </div>
                </div>

            </div>
        </div>)
    }
}
export default HomepageMenu;