import React from 'react';
import { connect } from 'react-redux';
import { setText } from '../actions/filters';

class SearchBar extends React.Component {
    onSearchTextChange = (e) => {
        const text = e.target.value;
        this.props.dispatch(setText(text));
    }
    
    render() {
        return (
            <input
                className="search-bar"
                type="text"
                placeholder={`Search...`}
                value={this.props.searchText}
                onChange={this.onSearchTextChange}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    searchText: state.filters.text
});

export default connect(mapStateToProps)(SearchBar);