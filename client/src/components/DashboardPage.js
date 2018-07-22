import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Slider from 'react-slick';
// import "../../node_modules/slick-carousel/slick/slick.css"; 
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import '../styles/dashboard.css';
import '../styles/pages.css';
import ProductCard from './ProductCard';

class DashboardPage extends React.Component {
    state = { isOverlap: false }
    
    handleScroll = () => {
        if (window.pageYOffset > this.titleRef.offsetTop - 150) {
            this.setState(() => ({ isOverlap: true }));
        } else {
            this.setState(() => ({ isOverlap: false }));
        }
    }
    
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    
    render() {
        const settings = {
            arrows: true,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 760,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 590,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };

        return (
            <div className="page--dashboard-page">
                <div className="main-media">
                    <div
                        className={'title-container' + (this.state.isOverlap ? ' title-container--overlap': ' title-container--show')}
                        ref={(el) => {this.titleRef = el}}
                    >
                        <div className="subtitle">BEAUTY THROUGH SIMPLICITY</div>
                        <h1>KUFI CLOTHING</h1>
                    </div>
                </div>
                <div className="special-section">
                    <div className="special-section__title">NEW ARRIVALS</div>
                </div>
                <Slider className="main-slider"{...settings}>
                    {this.props.featuredItems.map((item, i) => (
                        <div key={i} className="slide-holder">
                            {<img onClick={() => this.props.history.push(`/products/${item.name}`)}src={item.image} alt={item.name}/>}
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    featuredItems: state.products.filter((product) => product.subcategory.includes('featured'))
});

export default connect(mapStateToProps)(DashboardPage);