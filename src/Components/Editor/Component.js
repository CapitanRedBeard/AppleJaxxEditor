import React from 'react';
import { connect } from 'react-redux';
import { setActiveComponent } from '../../Actions';

class Component extends React.Component {
  onClick() {
    this.props.onClick(this.props.page, this.props.index, this.props.component);
  }

  render() {
    return (
      <div onClick={this.onClick.bind(this)}>
        {this.props.component.text}
      </div>
    );
  }
}

Component.defaultProps = {

};

Component.propTypes = {
  page: React.PropTypes.string.isRequired,
  index: React.PropTypes.number.isRequired,
  component: React.PropTypes.object.isRequired,
  onClick: React.PropTypes.func.isRequired
};

const mapStateToProps = () => ({

});

const mapDispatchToProps = ({
  onClick: setActiveComponent
});

const ComponentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Component);

export default ComponentContainer;
