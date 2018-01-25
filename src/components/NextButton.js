import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import {updateGstReturn} from '../actions/gstReturnActions';
 
class NextButton extends Component {
 
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
 
    handleSubmit(event) {
        event.preventDefault();
        this.props.dispatch(updateGstReturn(this.refs.searchTerm.value));
    }
 
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    ref="searchTerm"
                    type="text"
                    name="searchTerm"
                    placeholder="Language Search..."
                    />
                <button
                    className="wide-button"
                    type="submit"
                    >
                    Next
                </button>
            </form>
            
        );
    }
}
NextButton.propTypes = {
    dispatch: PropTypes.func.isRequired
};
 
export default connect()(NextButton);