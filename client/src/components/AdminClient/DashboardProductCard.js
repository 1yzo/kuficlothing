import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

class DashboardProductCard extends React.Component {
    state= {
        isExpanded: false,
    };
    
    handleExpand = () => {
        this.setState((prevState) => ({ isExpanded: !prevState.isExpanded }));
    }

    getCardExpansion = () => {
        const { saleStatsBySize } = this.props;
        const sizeDivs = [];
        let indexForKey = 0;
        for (let key in saleStatsBySize) {
            if (saleStatsBySize.hasOwnProperty(key)) {
                sizeDivs.push(
                    <div key={indexForKey} className="expanded-card">
                        <div></div>
                        <div>{key.slice(0,1).toUpperCase() + key.slice(1)}</div>
                        <div style={{ border: '0.5px solid black', width: '2rem' }}></div>
                        <div>{saleStatsBySize[key].sales}</div>
                        <div>{numeral(saleStatsBySize[key].revenue / 100).format('$0, 0.00')}</div>
                        <div></div>
                    </div>
                );
            }
            indexForKey++;
        }
        return sizeDivs;
    }
    
    componentDidMount() {
        const cardExpansion = this.getCardExpansion();
        this.setState(() => ({ cardExpansion }));
    }
    
    render() {
        const { image, name, views, totalSales, totalRevenue } = this.props;
        return (
            <div className="dash-product-card">
                <img className="image-preview" src={image} alt={name} />
                <div>{name}</div>
                <div>{views}</div>
                <div>{totalSales}</div>
                <div>{numeral(totalRevenue / 100).format('$0, 0.00')}</div>
                {totalSales > 0 && 
                    <i 
                        className={"material-icons expander" + (this.state.isExpanded ? ' expander--expanded' : '')}
                        onClick={this.handleExpand}
                    >
                        expand_more
                    </i>}
                {this.state.isExpanded && this.getCardExpansion()}
            </div>
        );
    }
}

const mapStateToProps = (state, props) => ({
    saleStatsBySize: state.stats.productStats[props.id] ? state.stats.productStats[props.id] : null
});

export default connect(mapStateToProps)(DashboardProductCard);