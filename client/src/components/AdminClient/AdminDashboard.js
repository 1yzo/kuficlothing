import React from 'react';
import { connect } from 'react-redux';
import DashboardProductCard from './DashboardProductCard';
import numeral from 'numeral';
import { setVisitorStats } from '../../actions/stats';

class AdminDashboard extends React.Component {
    state = { 
        sortBy: 'name',
        searchQuery: '' 
    };
    
    getPrepInfo = ({ id, name, image }) => ({
        id,
        name,
        image,
        views: this.props.visitorStats[id] ? this.props.visitorStats[id].count : 0,
        totalSales: this.props.productStats[id] ? 
                        Object.values(this.props.productStats[id]).reduce((acc, curr) => acc + curr.sales, 0) : 0,
        totalRevenue: this.props.productStats[id] ? 
                        Object.values(this.props.productStats[id]).reduce((acc, curr) => acc + curr.revenue, 0) : 0
    })
    
    setSort = (e) => {
        const sortBy = e.currentTarget.attributes.value.value;
        this.setState(() => ({ sortBy }));
    }
    
    onSearchChange = (e) => {
        const searchQuery = e.target.value;
        this.setState(() => ({ searchQuery }));
    }
    
    render() {
        return (
            <div className="page">
                <div className="dashboard-stats">
                    <div className="dashboard-stat__holder">
                        <div>Visitors</div>
                        <div>{this.props.mainVisitors}</div>
                    </div>
                    <div className="dashboard-stat__holder">
                        <div>Orders</div>
                        <div>{this.props.totalOrders}</div>
                    </div>
                    <div className="dashboard-stat__holder">
                        <div>Revenue</div>
                        <div>{numeral(this.props.totalRevenue / 100).format('$0, 0.00')}</div>
                    </div>
                </div>
                <div className="dash-product-display">
                    <div className="dash-product-card dash-product-card--header">
                        <div style={{ justifySelf: 'start', fontSize: '2rem' }}>Products</div>
                        <input 
                            type="text"
                            value={this.state.searchQuery}
                            onChange={this.onSearchChange}
                            placeholder="Search products"
                        />
                        <div 
                            className={"dash-sort-button" + (this.state.sortBy === 'views' ? ' dash-sort-button--active' : '')}
                            onClick={this.setSort}
                            value="views"
                        >
                            Views
                        </div>
                        <div
                            className={"dash-sort-button" + (this.state.sortBy === 'totalSales' ? ' dash-sort-button--active' : '')}
                            onClick={this.setSort} 
                            value="totalSales"
                        >
                            Sales
                        </div>
                        <div 
                            className={"dash-sort-button" + (this.state.sortBy === 'totalRevenue' ? ' dash-sort-button--active' : '')} 
                            onClick={this.setSort} 
                            value="totalRevenue"
                        >
                            Revenue
                        </div>
                    </div>
                    {this.props.products.map((product) => this.getPrepInfo(product))
                        .filter(({ name }) => name.toLowerCase().includes(this.state.searchQuery.toLowerCase()))
                        .sort((a, b) => a[this.state.sortBy] > b[this.state.sortBy] ? -1 : 1)
                        .map((cardInfo, i) => <DashboardProductCard key={i} {...cardInfo}/>)}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    visitorStats: state.stats.visitorStats,
    productStats: state.stats.productStats,
    mainVisitors: state.stats.visitorStats['main'].count,
    products: state.products,
    totalOrders: state.orders.length,
    totalRevenue: Object.values(state.stats.productStats)
                    .map((sizeStats) => Object.values(sizeStats)
                    .reduce((acc, curr) => acc + curr.revenue, 0))
                    .reduce((acc, curr) => !isNaN(curr) ? acc + curr : acc + 0, 0)
});

export default connect(mapStateToProps)(AdminDashboard);