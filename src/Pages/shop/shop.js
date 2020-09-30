import desc from "./details";
import React, {Component} from "react";
import CollectionShop from "../../Components/CollectionShop";
import MenuItem from "../../Components/MenuItem";
import './shop.scss'
import Header from "../../Components/Header";
class Shop extends Component{
    constructor() {
        super();
        this.state={
            items: desc,
        }
    }
    render() {
        let temp=[];
        for(let i=0;i<this.state.items.length;i++)
        {
            temp.push(<CollectionShop key={this.state.items[i].id} it={this.state.items[i]} />)
        }
        return(
            <div className='shop'>
                <Header />
                {temp.map((item)=>item)}
            </div>
        )
    }
}
export default Shop;