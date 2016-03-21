require('./index.css');

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
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    componentDidUpdate(prevProps, prevState, prevContext) {

    },
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    displayName: 'HoverBox',

    render: function() {
        return (
            <div className={'__reacthoverbox__ ' + (this.state.hover ? 'hover' : 'not-hover')} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} onMouseOver={this.onMouseOver}>
                <div className='__reacthoverbox_dummy__'></div>
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
