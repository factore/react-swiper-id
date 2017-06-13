import React from 'react';
import PropTypes from 'prop-types';
import Swiper from 'swiper';
import pickBy from 'lodash.pickby';
import swiperPropTypes from './swiperPropTypes';

const defaultSwiperProps = new Swiper().params;

class ReactSwiper extends React.Component {
  static propTypes = {
    ...swiperPropTypes,
    children: PropTypes.any.isRequired,
  };

  static defaultProps = {
    ...defaultSwiperProps,
    containerClass: 'swiper-container',
  };

  componentDidMount() {
    this.drawSwiper();
  }

  componentDidUpdate() {
    this.drawSwiper();
  }

  drawSwiper() {
    if (this.swiper) {
      this.swiper.destroy(true, true);
    }

    const options = pickBy(this.props, val => val !== undefined);
    this.swiper = new Swiper(this.swiperContainer, options);
  }

  render() {
    return (
      <div
        className={this.props.containerClass}
        ref={(el) => { this.swiperContainer = el; }}
      >
        <div className={this.props.wrapperClass}>
          {this.props.children.map((child, idx) => (
            <div key={child.key || idx} className={this.props.slideClass}>
              {child}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ReactSwiper;
