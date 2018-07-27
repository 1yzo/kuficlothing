import React from 'react';
import { connect } from 'react-redux';
import { startAddProduct, startEditProduct, startRemoveProduct } from '../../actions/products';

class ProductFormPage extends React.Component {
    state = {
        name: this.props.product ? this.props.product.name : '',
        category: this.props.product ? this.props.product.category : '',
        subcategory: this.props.product ? this.props.product.subcategory : ['none'],
        image: this.props.product ? this.props.product.image : '',
        extraPics: this.props.product ? this.props.product.extraPics : ['none'],
        price: this.props.product ? (this.props.product.price / 100).toString() : '',
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

    onMainPicChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            this.setState(() => ({ image: reader.result }));
        }
        reader.readAsDataURL(file);
    }

    onExtraPicsChange = (e) => {
        const files = e.target.files;
        for (let i of files) {
            const reader = new FileReader();
            reader.onloadend = () => {
                this.setState((prevState) => ({ extraPics: prevState.extraPics.concat(reader.result) }));
            }
            reader.readAsDataURL(i);
        }
    }

    onSubcategoryChange = (e) => {
        const category = e.target.value;
        if (this.state.subcategory.includes(category)) {
            this.setState((prevState) => ({ subcategory: prevState.subcategory.filter((i) => i !== category) }));
        } else {
            this.setState((prevState) => ({ subcategory: prevState.subcategory.concat(category) }));
        }
    }

    removePic = (e) => {
        const src = e.target.attributes.src.value;
        this.setState((prevState) => ({ extraPics: prevState.extraPics.filter((pic) => pic !== src) }));
    }
    
    handleSubmit = (e) => {
        e.preventDefault();

        if (this.props.product) {
            this.props.dispatch(startEditProduct(this.props.product.id, {
                ...this.state,
                price: Number(this.state.price) * 100
            })).then(() => this.props.history.push('/admin/products'));
        } else {
            this.props.dispatch(startAddProduct({
                ...this.state,
                price: Number(this.state.price) * 100
            })).then(() => this.props.history.push('/admin/products'));
        }
    }

    deleteProduct = (e) => {
        e.preventDefault();
        this.props.dispatch(startRemoveProduct(this.props.product.id)).then(() => this.props.history.push('/admin/products'));
    }
    
    render() {
        return (
            <div className="page" style={{ paddingLeft: '20rem', paddingRight: '20rem' }}>
                <form className="product-form" onSubmit={this.handleSubmit}>
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
                        <label>Subcategory:</label>
                        <input 
                            type="checkbox" 
                            id="ft" 
                            value="featured" 
                            checked={this.state.subcategory.includes('featured')}
                            onChange={this.onSubcategoryChange}
                        />
                        <label htmlFor="ft">Featured</label>
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
                        <input type="file" onChange={this.onMainPicChange} />
                    </div>
                    {this.state.image && <img className="image-preview" src={this.state.image} alt="pic" />}
                    <div>
                        <label>Extra Pics:</label>
                        <input type="file" onChange={this.onExtraPicsChange} multiple/>
                    </div>
                    <div>
                    {this.state.extraPics.length > 1 &&
                        <div>
                            <div style={{ marginLeft: '1rem', color: 'red'}}>Click a pic to remove it</div>
                            {this.state.extraPics.slice(1).map((pic, i) => (
                                <img 
                                    key={i} 
                                    onClick={this.removePic} 
                                    className="image-preview" 
                                    src={pic} 
                                    alt="pic"
                                    index={i}
                                />)
                            )}
                        </div>
                    }
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            <button 
                                onClick={this.handleSubmit} 
                                disabled={!(this.state.name && this.state.category && this.state.image && this.state.price)}
                            >
                                Accept
                            </button>
                            <button onClick={() => this.props.history.push('/admin/products')}>Cancel</button>
                        </div>
                        {this.props.product && 
                            <button className="delete-product-button" onClick={this.deleteProduct}>Delete</button>}
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    product: state.products.find(({ id }) => id === props.match.params.productId),
});

export default connect(mapStateToProps)(ProductFormPage);