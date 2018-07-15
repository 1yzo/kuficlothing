import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../actions/cart';
import '../styles/ProductInfoSide.css';

class ProductInfoSide extends React.Component {
    state = {
        size: '',
        isAdding: false
    }
    
    onAddToCartClick = () => {
        this.setState(() => ({ isAdding: true }));
        setTimeout(() => {
            this.setState(() => ({ isAdding: false, size: '' }));
        }, 1000);

        this.props.addToCart({
            ...this.props.product,
            size: this.state.size
        });
    }
    
    setSize = (e) => {
        const size = e.target.children[0].attributes.value.value;
        if (this.props.product.stock[size] > 0) {
            this.setState(() => ({ size }));
        }
    }
    
    render() {
        return (
            <div className="product-info-side">
                <h1>{this.props.product.name}</h1>
                <div className="price">${this.props.product.price / 100}</div>
                <div style={{ height: '2px', width: '100%', background: 'rgb(185, 185, 185)' }} />
                <div className="sizes-container">
                    <button className="button-wrapper"onClick={this.setSize} disabled={this.props.product.stock.small < 1}>
                        <div 
                            className={"size-button" + (this.props.product.stock.small < 1 ? "  size-button--disabled" : "")
                                + (this.state.size === 'small' ? " size-button--selected" : "")
                            }
                            onClick={this.setSize}
                            value="small"
                        >
                            S
                        </div>
                    </button>
                    <button className="button-wrapper"onClick={this.setSize} disabled={this.props.product.stock.medium < 1}>
                        <div
                            className={"size-button" + (this.props.product.stock.medium < 1 ? "  size-button--disabled" : "")
                                + (this.state.size === 'medium' ? " size-button--selected" : "")
                            }
                            onClick={this.setSize}
                            value="medium"
                        >
                            M
                        </div>
                    </button>
                    <button className="button-wrapper"onClick={this.setSize} disabled={this.props.product.stock.large < 1}>
                        <div 
                            className={"size-button" + (this.props.product.stock.large < 1 ? "  size-button--disabled" : "")
                                + (this.state.size === 'large' ? " size-button--selected" : "")
                            }
                            onClick={this.setSize}
                            value="large"
                        >
                            L
                        </div>
                    </button>
                    <button className="button-wrapper"onClick={this.setSize} disabled={this.props.product.stock.xLarge < 1}>
                        <div 
                            className={"size-button" + (this.props.product.stock.xLarge < 1 ? "  size-button--disabled" : "")
                                + (this.state.size === 'xLarge' ? " size-button--selected" : "")
                            }
                            onClick={this.setSize}
                            value="xLarge"
                        >
                            XL
                        </div>
                    </button>
                </div>
                <div style={{ height: '2px', width: '100%', background: 'rgb(185, 185, 185)' }} />
                <button 
                    className={"add-button" + (this.state.isAdding ? " add-button--loading" : "")} 
                    onClick={this.onAddToCartClick}
                    disabled={!this.state.size}
                >
                    {!this.state.isAdding && 'Add To Cart'}
                    {this.state.isAdding && <div className="spinner" />}
                </button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    addToCart: (item) => dispatch(addItem(item))
});


export default connect(undefined, mapDispatchToProps)(ProductInfoSide);