import React, {Component} from "react";
class ItemPreview extends Component{

    render(){
         // console.log(this.props.item);
        return (
            <div key={this.props.item.id} className='item'>
                <div className='item-content'>
                    <div className='item-name'>{this.props.item.name}</div>
                    <div className='item-bg' style={{backgroundImage: `url(${this.props.item.imageUrl})`,}}></div>
                    <div>Price: ${this.props.item.price}</div>

                </div>
            </div>
        )
    }

}
export default ItemPreview;