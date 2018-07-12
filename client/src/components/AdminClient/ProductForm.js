import React from 'react';
import { connect } from 'react-redux';
import { startAddProduct } from '../../actions/products';

class ProductForm extends React.Component {
    state = {
        name: this.props.product ? this.props.product.name : '',
        category: this.props.product ? this.props.product.category : '',
        image: this.props.product ? this.props.product.image : '',
        price: this.props.product ? this.props.product.price.toString() : '',
        stock: {
            small: this.props.product ? this.props.product.stock.small : 0,
            medium: this.props.product ? this.props.product.stock.medium : 0,
            large: this.props.product ? this.props.product.stock.large : 0,
            xLarge: this.props.product ? this.props.product.stock.xLarge : 0
        }
    };
    
    onChange = (e) => {
        const value = e.target.value;
        const field = e.target.id;
        const temp = {};
        temp[field] = value;
        this.setState(() => temp);
    }

    onPriceChange = (e) => {
        const price = e.target.value;
        if (!price || price.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ price }));
        }
    }

    onStockChange = (e) => {
        const amount = e.target.value;
        const size = e.target.id;
        const temp = {
            ...this.state.stock,
        }
        temp[size] = amount;
        this.setState(() => ({ stock: temp }));
    }

    onFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            this.setState(() => ({ image: reader.result }));
        }
        reader.readAsDataURL(file);
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        if (this.props.product) {
            this.props.onSubmit(this.props.product.id, {
                ...this.state,
                price: Number(this.state.price) * 100
            });
        } else {
            this.props.onSubmit({
                ...this.state,
                price: Number(this.state.price) * 100
            })
        }
        this.props.closeForm();
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" onChange={this.onChange} id="name" value={this.state.name} />
                    </div>
                    <div>
                        <label htmlFor="category">Category:</label>
                        <select id="category" onChange={this.onChange} value={this.state.category}>
                            <option value="">Choose one</option>
                            <option value="tops">Tops</option>
                            <option value="bottoms">Bottoms</option>
                            <option value="outerwear">Outerwear</option>
                            <option value="accessories">Accessories</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="price">Price:</label>
                        <input type="text" onChange={this.onPriceChange} value={this.state.price} />
                    </div>
                    <div>
                        <label>Stock:</label>

                        <label htmlFor="small">S</label>
                        <input type="number" id="small" value={this.state.stock.small} onChange={this.onStockChange}/>

                        <label htmlFor="medium">M</label>
                        <input type="number" id="medium" value={this.state.stock.medium} onChange={this.onStockChange}/> 

                        <label htmlFor="large">L</label>
                        <input type="number" id="large" value={this.state.stock.large} onChange={this.onStockChange}/> 
                        
                        <label htmlFor="xLarge">XL</label>
                        <input type="number" id="xLarge" value={this.state.stock.xLarge} onChange={this.onStockChange}/> 
                    </div>
                    <div>
                        <label>Main Pic:</label>
                        <input type="file" onChange={this.onFileChange} />
                    </div>
                    <button 
                        onClick={this.handleSubmit} 
                        disabled={!(this.state.name && this.state.category && this.state.image && this.state.price)}
                    >
                        Accept
                    </button>
                    <button onClick={this.props.closeForm}>Cancel</button>
                </form>
            </div>
        );
    }
}

export default connect()(ProductForm);