import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

class DashboardProductCard extends React.Component {
    render() {
        const { id, image, name, views, totalSales, totalRevenue } = this.props;
        return (
            <div id={id} className="dash-product-card">
                <img className="image-preview" src={image} alt={name} />
                <div>{name}</div>
                <div>{views}</div>
                <div>{totalSales}</div>
                <div>{numeral(totalRevenue / 100).format('$0, 0.00')}</div>
                <i className="material-icons">expand_more</i>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    saleStatsBySize: state.stats.productStats[props.id] ? state.stats.productStats[props.id] : null
});

export default connect(mapStateToProps)(DashboardProductCard);