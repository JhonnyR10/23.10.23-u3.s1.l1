import { Component } from "react";

class ImageComponent extends Component{
    render() {
        return <img src={this.props.imageSrc} alt="ß" />;
    }
}

export default ImageComponent