import React, {Component} from "react";
import MenuItem from "./MenuItem";
import ItemPreview from "./ItemPreview";
class CollectionShop extends Component{

    render() {
        // console.log(this.props.it);
        let temp = [];
        for (let i = 0; i < 4; i++)
        {
            temp.push(<ItemPreview item={this.props.it.items[i]} />);
        }

        return(
            <div key={this.props.it.id} className='collection'>
                <h1 className='title'>{this.props.it.title}</h1>
                <div className='collection-preview'>
                    {temp.map((item)=>item)}
                    {/*{console.log(temp)}*/}
                </div>
            </div>
        )
    }
}
export default CollectionShop;