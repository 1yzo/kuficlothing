import React from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
// import "../../node_modules/slick-carousel/slick/slick.css"; 
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import '../styles/dashboard.css';
import '../styles/pages.css';
import ProductCard from './ProductCard';

class DashboardPage extends React.Component {
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
                breakpoint: 480,
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
                    <div className="subtitle">BEAUTY THROUGH SIMPLICITY</div>
                    <h1>KUFI CLOTHING</h1>
                </div>
                <div className="special-section">
                    <div className="special-section__title">NEW ARRIVALS</div>
                </div>
                <Slider className="main-slider"{...settings}>
                    {this.props.featuredItems.map((item, i) => (
                        <div className="slide-holder">
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