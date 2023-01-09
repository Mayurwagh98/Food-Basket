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
import "./Slider.css";

const AdvancedCarousel = () => {
  const { scrollRef, next, prev } = useSnapCarousel();
  let Item = [
    {
      url: "https://cdn.shopify.com/s/files/1/0192/0076/files/PDP-SIGNATURE_OMD-_HOVER.jpg?v=1666958067",
      p: "Signature Nutrition",
    },
    {
      url: "https://bigtreefarms.com/wp-content/uploads/2021/08/Butterfinger-Bites2-372x406.jpg",
      p: "Butterfinger Bites",
    },
    {
      url: "https://bigtreefarms.com/wp-content/uploads/2021/08/Vegan-Cheesy-Crunch-Tacos1-372x406.jpg",
      p: "Passionfruit Vanilla Pancakes",
    },
    {
      url: "https://bigtreefarms.com/wp-content/uploads/2021/08/Raw-Lasagna-Roll-Ups2-372x406.jpg",
      p: "Vegan Cheesy Crunch Tacos",
    },
    {
      url: "https://bigtreefarms.com/wp-content/uploads/2021/08/Chimichurri-Summer-Ramen3-372x406.jpg",
      p: "Raw Lasagna Roll-Ups",
    },
  ];
  return (
    <>
      <ul className="sliderUl" ref={scrollRef}>
        {Item.map((item, i) => (
          <li className="sliderLi">
            <div className="slider_div">
              <img src={item.url} alt="" width={"100%"} height={"70%"} />
              <h3 className="slider_heading">{item.p}</h3>
            </div>
          </li>
        ))}
      </ul>

      {/* <button onClick={() => prev()}>Prev</button>
      <button onClick={() => next()}>Next</button> */}
    </>
  );
};

export { AdvancedCarousel };
