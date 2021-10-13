import React, { Component, useState, useEffect } from "react";
import Carousel from "react-grid-carousel";
import { Item } from "react-grid-carousel";

const CustomCarousel = (imageIndex, setImageIndex) => {
  // const [imageIndex, setImageIndex] = useState(0);

  return (
    <div>
      <img
        width="100%"
        src={`https://picsum.photos/800/600?random=${imageIndex}`}
      />
    </div>
  );
};

export default CustomCarousel;

// export class CustomCarousel extends Component {
//   // render() {
//     return (
//       <div>

//           <Item>
//             <img width="100%" src={`https://picsum.photos/800/600?random=${imageIdex}`} />
//           </Item>

//         {/* <Carousel cols={3} rows={1} gap={5} loop={true} autoplay={1000}>
//           <Item>
//             <img width="100%" src="https://picsum.photos/800/600?random=1" />
//           </Item>
//           <Item>
//             <img width="100%" src="https://picsum.photos/800/600?random=2" />
//           </Item>
//           <Item>
//             <img width="100%" src="https://picsum.photos/800/600?random=3" />
//           </Item>
//           <Item>
//             <img width="100%" src="https://picsum.photos/800/600?random=1" />
//           </Item>
//           <Item>
//             <img width="100%" src="https://picsum.photos/800/600?random=2" />
//           </Item>
//           <Item>
//             <img width="100%" src="https://picsum.photos/800/600?random=3" />
//           </Item>
//         </Carousel> */}
//       </div>
//     );
//   // }
// }

// export default CustomCarousel;
