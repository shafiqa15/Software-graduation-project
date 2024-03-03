// import React, { Component } from "react";
// import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";
// import '/Users/shafiqaabdat/Downloads/client-main/src/BedRoomsLarge/image_slider.css';

// class Imageslider extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       imageIndex: 0,
//     };
//   }

//   showNextImage = () => {
//     this.setState((prevState) => ({
//       imageIndex: prevState.imageIndex === this.props.images.length - 1 ? 0 : prevState.imageIndex + 1,
//     }));
//   };

//   showPrevImage = () => {
//     this.setState((prevState) => ({
//       imageIndex: prevState.imageIndex === 0 ? this.props.images.length - 1 : prevState.imageIndex - 1,
//     }));
//   };

//   render() {
//     const { images } = this.props;
//     const { imageIndex } = this.state;

//     return (
//       <section
//         aria-label="Image Slider"
//         style={{ width: "100%", height: "100%", position: "relative" }}
//       >
//         <a href="#after-image-slider-controls" className="skip-link">
//           Skip Image Slider Controls
//         </a>
//         <div
//           style={{
//             width: "100%",
//             height: "100%",
//             display: "flex",
//             overflow: "hidden",
//           }}
//         >
//           {images.map(({ url, alt }, index) => (
//             <img
//               key={url}
//               src={url}
//               alt={alt}
//               aria-hidden={imageIndex !== index}
//               className="img-slider-img"
//               style={{ translate: `${-100 * imageIndex}%` }}
//             />
//           ))}
//         </div>
//         <button
//           onClick={this.showPrevImage}
//           className="img-slider-btn"
//           style={{ left: 0 }}
//           aria-label="View Previous Image"
//         >
//           <ArrowBigLeft aria-hidden />
//         </button>
//         <button
//           onClick={this.showNextImage}
//           className="img-slider-btn"
//           style={{ right: 0 }}
//           aria-label="View Next Image"
//         >
//           <ArrowBigRight aria-hidden />
//         </button>
//         <div
//           style={{
//             position: "absolute",
//             bottom: ".5rem",
//             left: "50%",
//             translate: "-50%",
//             display: "flex",
//             gap: ".25rem",
//           }}
//         >
//           {images.map((_, index) => (
//             <button
//               key={index}
//               className="img-slider-dot-btn"
//               aria-label={`View Image ${index + 1}`}
//               onClick={() => this.setState({ imageIndex: index })}
//             >
//               {index === imageIndex ? (
//                 <CircleDot aria-hidden />
//               ) : (
//                 <Circle aria-hidden />
//               )}
//             </button>
//           ))}
//         </div>
//         <div id="after-image-slider-controls" />
//       </section>
//     );
//   }
// }

// export default Imageslider;
