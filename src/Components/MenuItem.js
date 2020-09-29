import React,{Component} from "react";
class MenuItem extends Component {
    constructor() {
        super();
    }

    render() {
        console.log(this.props.it);
        return (
            <div className={`menu-item ${this.props.it.size}`}>
            <div className={`bg-image`} style={{backgroundImage: `url(${this.props.it.imageUrl})`,}}></div>
                <div className='content'>
                    <h1>{this.props.it.title}</h1>
                    <span>SHOP NOW</span>
                </div>
            </div>
        )
    }
}


// backgroundSize: 'cover', backgroundPosition:'center'
export default MenuItem;