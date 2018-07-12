import React from 'react';
import { connect } from 'react-redux';
import { toggleAdmin } from '../actions/config';
import { startAddProduct } from '../actions/products';
import '../styles/adminPage.css';

class AdminPage extends React.Component {
    state = {
        name: '',
        category: '',
        image: '',
        price: '',
        stock: {
            small: 0,
            medium: 0,
            large: 0,
            xLarge: 0
        }
    };
    
    componentDidMount() {
        this.props.dispatch(toggleAdmin(true));
    }

    componentWillUnmount() {
        this.props.dispatch(toggleAdmin(false));
    }

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
        this.props.dispatch(startAddProduct({
            ...this.state,
            price: Number(this.state.price) * 100
        }));
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
                        <select id="category" onChange={this.onChange}>
                            <option value="" defaultValue>Choose one</option>
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
                        <input type="file" onChange={this.onFileChange}/>
                    </div>
                    <button>Add Product</button>
                </form>
            </div>
        );
    }
}

export default connect()(AdminPage);