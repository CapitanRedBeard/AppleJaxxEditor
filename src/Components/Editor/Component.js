import React from 'react';
import makeClass from 'classnames';
import { connect } from 'react-redux';

import './Component.css';
import { setActiveComponent } from '../../Actions';

class Component extends React.Component {
  onClick() {
    this.props.onClick(this.props.page, this.props.index, this.props.component);
  }
  render() {
    console.log(this.props)
    let component;

    if (this.props.component.type === 'text') {
      component = this.props.component.text.length ? this.props.component.text : 'default text';
    } else if (this.props.component.type === 'button') {
      component = (
        <button>
          {this.props.component.text.length ? this.props.component.text : 'button text'}
        </button>
      );
    } else if (this.props.component.type === 'thumbnail') {
      component = (
        <img
          className={makeClass({
            CircleImage: !this.props.component.attributes.square
          })}
          alt="user defined"
          style={{ width: this.props.component.attributes.source.size, height: this.props.component.attributes.size }}
          src={this.props.component.attributes.source.length ? this.props.component.attributes.source : 'https://cdn2.iconfinder.com/data/icons/thesquid-ink-40-free-flat-icon-pack/64/rubber-duck-512.png'}
        />
      );
    }

    return (
      <div onClick={this.onClick.bind(this)}>
        {component}
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
