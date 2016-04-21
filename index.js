module.exports = React.createClass({
    propTypes: {
        render: React.PropTypes.func,
    },
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    getInitialState: function() {
        return {
            hover: false,
        };
    },
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return !_.isEqual(nextProps, this.props) || !_.isEqual(nextState, this.state) || !_.isEqual(nextContext, this.context);
    },

    componentDidMount: function() {
        var This = this;
        setTimeout(function() {
            if (This.isMounted()) {
                This.setState({ hover: !!(ReactDOM.findDOMNode() && $(ReactDOM.findDOMNode()).is(':hover')) });
            }
        }, 1);
    },

    componentDidUpdate: function(prevProps, prevState, prevContext) {
        var This = this;
        setTimeout(function() {
            if (This.isMounted()) {
                This.setState({ hover: !!(ReactDOM.findDOMNode() && $(ReactDOM.findDOMNode()).is(':hover')) });
            }
        }, 1);
    },
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    displayName: 'HoverBox',

    render: function() {
        return (
            <div className={this.state.hover ? 'hover' : 'not-hover'} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} onMouseOver={this.onMouseOver}>
                {this.props.render(this.state.hover)}
            </div>
        );
    },
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    onMouseEnter: function() {
        if (this.state.hover == false) {
            this.setState({hover: true});
        }
    },
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    onMouseOver: function() {
        if (this.state.hover == false) {
            this.setState({hover: true});
        }
    },
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    onMouseLeave: function() {
        if (this.state.hover == true) {
            this.setState({hover: false});
        }
    },
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
});
