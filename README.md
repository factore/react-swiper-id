react-swiper-id is a simple React component that wraps the excellent [Swiper](http://idangero.us/swiper/) tool from [iDangero.us](http://idangero.us)

# Installation #

`yarn add react-swiper-id` or `npm install react-swiper-id --save`

# Usage #


    import ReactSwiper from 'react-swiper-id'

    function MyComponent = () => (
      <div>
        <ReactSwiper loop next='.my-next-button'>
          <div>My First Slide</div>
          <div>My Second Slide</div>
          <div>My Third Slide</div>
        </ReactSwiper>

        <button className="my-next-button">Next</button>
      </div>
    )

### Props ###

`<ReactSwiper />` takes every single configuration option from the [Swiper API](http://idangero.us/swiper/api) as an optional prop.  Additionally, you can pass `containerClass` if you want to override the default container class name of `swiper-container`

### Accessing the Swiper instance ###

Use a ref and then access the `swiper` property of the component.

    import ReactSwiper from 'react-swiper-id'

    class MySwiper extends React.Component {
      componentWillReceiveProps(nextProps) {
        if (nextProps.destroySwiper) {
          this.mySwiper.swiper.destroy();
        }
      }

      render() {
        return (
          <ReactSwiper
            containerClass="something-else"
            ref={(s) => { this.mySwiper = s; }}
          >
            <div>My First Slide</div>
            <div>My Second Slide</div>
            <div>My Third Slide</div>
         </ReactSwiper>
      );
    )

