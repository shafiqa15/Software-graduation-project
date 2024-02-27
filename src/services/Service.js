


import React from "react";
import '/Users/shafiqaabdat/Downloads/client-main/src/services/service.css';
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";



const Services = () => {
  return (
    <section className="services">
      <Container fluid>
        <Row>
          <Col lg="3" md="4">
          <motion.div whileHover={{scale:'1.1'}} className="service__item">
         <span>
    <i className="ri-truck-line"></i>

              </span>
              <div>
                <h3>Free Shipping</h3>
                <p>For products above 1000₪</p>
              </div>
            </motion.div>
          </Col>
          <Col lg="3" md="4">
          <motion.div whileHover={{scale:'1.1'}} className="service__item">
              <span>
                <i className="ri-refresh-line"></i> {/* Change this icon accordingly */}
              </span>
              <div>
                <h3>Easy Returns</h3>
                <p>Hassle-free returns policy</p>
              </div>
              </motion.div>
          </Col>
          <Col lg="3" md="4">
          <motion.div whileHover={{scale:'1.1'}} className="service__item">
              <span>
                <i className="ri-shield-check-line"></i> {/* Change this icon accordingly */}
              </span>
              <div>
                <h3>Secure Payment</h3>
                <p>100% secure payment</p>
              </div>
              </motion.div>
          </Col>
          <Col lg="3" md="4">
          <motion.div whileHover={{scale:'1.1'}} className="service__item">
              <span>
                <i className="ri-money-dollar-circle-line"></i> {/* Change this icon accordingly */}
              </span>
              <div>
                <h3>Drsigning </h3>
                <p>Ability to design in an easy way</p>
              </div>
              </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};



export default Services;