import React, {Component} from "react";
import './HomepageMenu.scss'
import MenuItem from "../../Components/MenuItem";
class HomepageMenu extends Component{
    constructor(props) {
        super();
        this.state={
            sections: [
                {
                    title: 'Hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1
                },
                {
                    title: 'Jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2
                },
                {
                    title: 'Sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3
                },
                {
                    title: 'Womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4
                },
                {
                    title: 'Mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    id: 5
                }
            ]};
    }
    render(){
        let temp=[];
        for(let i=0;i<this.state.sections.length;i++)
        {
            temp.push(<MenuItem key={this.state.sections[i].id} it={this.state.sections[i]} />)
        }

        return(
        <div className='Homepage'>
            <div className='menu'>
                {temp.map((item)=>item)}
            </div>
        </div>)
    }
}
export default HomepageMenu;