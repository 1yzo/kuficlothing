import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import OrderCard from './OrderCard';
import OrderInfoPage from './OrderInfoPage';

class OrdersPage extends React.Component {
    state = {
        filterBy: 'unshipped',
        selectedOrderId: undefined
    }

    handleFilterClick = (e) => {
        const filterBy = e.currentTarget.attributes.value.value;
        this.setState(() => ({ filterBy }));
    }

    handleOrderCardSelect = (id) => {
        this.setState(() => ({ selectedOrderId: id }));
    }
    
    render() {
        if (this.state.selectedOrderId) {
            return <OrderInfoPage
                        id={this.state.selectedOrderId}
                        history={this.props.history}
                        setSelectedOrderId={this.handleOrderCardSelect}
                    />
        } else {
            return (
                <div className="page" style={{ paddingLeft: '20rem', paddingRight: '20rem' }}>
                    <div className="orders-page__header">
                        <div 
                            className={"dash-sort-button" + (this.state.filterBy === 'unshipped' ? ' dash-sort-button--active' : '')}
                            onClick={this.handleFilterClick}
                            value="unshipped"
                        >
                            Unshipped
                        </div>
                        <div
                            className={"dash-sort-button" + (this.state.filterBy === 'shipped' ? ' dash-sort-button--active' : '')}
                            onClick={this.handleFilterClick} 
                            value="shipped"
                        >
                            Shipped
                        </div>
                    </div>
                    <div className="orders-container">
                        {this.props.orders
                            .filter((order) => {
                                if (this.state.filterBy === 'unshipped' ) {
                                    return order.shipped ? false : true;
                                } else if (this.state.filterBy === 'shipped') {
                                    return order.shipped ? true : false;
                                }
                            })
                            .sort((a, b) => a.date > b.date ? -1 : 1)
                            .map((order, i) => <OrderCard key={i} {...order} onOrderClick={this.handleOrderCardSelect}/>)}
                    </div>
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => ({
    orders: state.orders
});

export default withRouter(connect(mapStateToProps)(OrdersPage));