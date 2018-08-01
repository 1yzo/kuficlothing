import React from 'react';
import '../styles/lazyImage.css';

class LazyImage extends React.Component {
    constructor(props) {
        super(props);
        this.lazyImageHd = null;
    }

    componentDidMount() {
        const hdLoaderImg = new Image();
        hdLoaderImg.src = this.props.src;

        hdLoaderImg.onload = () => {
            this.lazyImageHd.setAttribute('src', this.props.src);
        };
    }
    
    render() {
        return (
            <div className="lazy-image-container">
                <img
                    className="lazy-image-loaded"
                    ref={el => this.lazyImageHd = el}
                    alt={this.props.alt}
                />
                <img
                    className="lazy-image-preload"
                    alt="placeholder"
                    src="/images/logo.PNG"
                />
            </div>
        );
    }
}

export default LazyImage;