// import SimpleImageSlider from "react-simple-image-slider";

// const images = [
//   {
//     url: "https://media.istockphoto.com/id/1371124527/photo/healthy-eating-and-blood-pressure-control.jpg?b=1&s=170667a&w=0&k=20&c=aEzSBMEbIaHfpcT6WPsWK9wU742rSRgo4i6JWssq52Y=",
//   },
//   {
//     url: "https://media.istockphoto.com/id/1134430732/photo/vitamin-supplements.jpg?s=612x612&w=0&k=20&c=HH2l-NeU9hTGPFrrgAvnCTG7_UBra4QDK6xox7xqN48=",
//   },
//   {
//     url: "https://media.istockphoto.com/id/1371318211/photo/groceries-shopping-flat-lay-of-fruits-vegetables-greens-bread-and-oil-in-eco-friendly-bags.jpg?b=1&s=170667a&w=0&k=20&c=LwOTGwEKL2hSwCgIpWKoYWmFBxqwQCLJMtDVRu4I-ys=",
//   }
// ];

// const Slider = () => {
//   return (
//     <div className="slider_div">
//       <SimpleImageSlider
//         width={"100%"}
//         height={500}
//         images={images}
//         showBullets={true}
//         showNavs={true}
//         autoPlay={true}
//         autoPlayDelay={2}
//         style={{ margin: "auto" }}
//       />
//     </div>
//   );
// };

// export { Slider };

import React from "react";
import { useSnapCarousel } from "react-snap-carousel";
import { Card } from "antd";

const AdvancedCarousel = () => {
  const { scrollRef, next, prev } = useSnapCarousel();
  let Item = [
    "https://cdn.shopify.com/s/files/1/0192/0076/files/PDP-SIGNATURE_OMD-_HOVER.jpg?v=1666958067",
    "https://media.istockphoto.com/id/1371124527/photo/healthy-eating-and-blood-pressure-control.jpg?b=1&s=170667a&w=0&k=20&c=aEzSBMEbIaHfpcT6WPsWK9wU742rSRgo4i6JWssq52Y=",
    "https://media.istockphoto.com/id/1371124527/photo/healthy-eating-and-blood-pressure-control.jpg?b=1&s=170667a&w=0&k=20&c=aEzSBMEbIaHfpcT6WPsWK9wU742rSRgo4i6JWssq52Y=",
    "https://media.istockphoto.com/id/1371124527/photo/healthy-eating-and-blood-pressure-control.jpg?b=1&s=170667a&w=0&k=20&c=aEzSBMEbIaHfpcT6WPsWK9wU742rSRgo4i6JWssq52Y=",
    "https://media.istockphoto.com/id/1371124527/photo/healthy-eating-and-blood-pressure-control.jpg?b=1&s=170667a&w=0&k=20&c=aEzSBMEbIaHfpcT6WPsWK9wU742rSRgo4i6JWssq52Y=",
    "https://media.istockphoto.com/id/1371124527/photo/healthy-eating-and-blood-pressure-control.jpg?b=1&s=170667a&w=0&k=20&c=aEzSBMEbIaHfpcT6WPsWK9wU742rSRgo4i6JWssq52Y=",
    "https://media.istockphoto.com/id/1371124527/photo/healthy-eating-and-blood-pressure-control.jpg?b=1&s=170667a&w=0&k=20&c=aEzSBMEbIaHfpcT6WPsWK9wU742rSRgo4i6JWssq52Y=",
  ];
  return (
    <>
      <ul
        ref={scrollRef}
        style={{
          display: "flex",
          overflow: "auto",
          scrollSnapType: "x mandatory",
          width:"60%",
          margin:"auto"
        }}
      >
        {Item.map((item, i) => (
          <li
            style={{
              backgroundColor: "aqua",
              fontSize: "50px",
              width: "200px",
              height: "350px",
              flexShrink: 0,
              color: "#fff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin:"10px"
            }}
          >
            <div style={{border:"2px solid red", width:"100%", height:"100%"}}>
              <img src={item} alt="" width={"100%"} margin="0px" height={"70%"} />
              
            </div>
          </li>
        ))}
      </ul>

      <button onClick={() => prev()}>Prev</button>
      <button onClick={() => next()}>Next</button>
    </>
  );
};

export { AdvancedCarousel };
