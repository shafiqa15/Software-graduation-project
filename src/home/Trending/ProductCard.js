// import React from "react";
// import Trending from "./Trending";
// import { Container, Row } from "reactstrap";

// import bed2 from '/Users/shafiqaabdat/Downloads/client-main/src/images/bed2.jpeg';

// const ProductCard = () => {
//   return (
//     <Container fluid>
//       <Row xs="1" md="2" lg="3" className="justify-content-center">
//         <Trending />
//         <Trending img={bed2} productName="Product 2" category="Category 2" price="Price 2"/>       
//          <Trending />
//         <Trending />
//       </Row>
//     </Container>
//   );
// };

// export default ProductCard;
import React from "react";
import Trending from "/Users/shafiqaabdat/Downloads/client-main/src/home/Trending/Trending.js";
import { Row } from "reactstrap";
import bed1 from '/Users/shafiqaabdat/Downloads/client-main/src/images/bed1/firstbedimage.png';
import bed2 from '/Users/shafiqaabdat/Downloads/client-main/src/images/bed1/firstbedimage.png';
import bed3 from '/Users/shafiqaabdat/Downloads/client-main/src/images/bed1/firstbedimage.png';
import bed4 from '/Users/shafiqaabdat/Downloads/client-main/src/images/bed1/firstbedimage.png';

const ProductCard = () => {
  return (
    <Row>
      <Trending image={bed1} productName="Bedroom" category="Local factorization" price="1500₪"/>
      <Trending image={bed2} productName="Bedroom " category="imported factorization " price="2000₪"/>
      <Trending image={bed3} productName="Bedroom" category="Local factorization" price="2000₪"/>
      <Trending image={bed4} productName="Bedroom" category="imported factorization" price="1200₪"/>
    </Row>
  );
};

export default ProductCard;


