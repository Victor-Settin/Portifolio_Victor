import React from 'react';
import { Card, Col, Row, Container } from 'reactstrap';
import { GithubUserType } from '../types';
import SocialLinks from './SocialLinks';

const GithubProfileCard = ({ avatar_url, bio, location }: GithubUserType) => {
  return (
    <Card className="section-sm bg-gradient-info shadow-lg border-0">
      <Container className="">
        <div className="p-2">
          <Row className="">
            <Col className="order-lg-2" lg="4">
              <img
                src={avatar_url}
                style={{ width: '200px' }}
                alt=""
                className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-4"
              />
            </Col>
            <Col lg="8" className="order-lg-1">
              <h2 className="text-white">vamos juntos!</h2>
              <p className="lead text-white mt-3">
                Discutir um projeto pode se tornar um grande negócio de sucesso!<br>
                </br>
              </p>
              <p className="text-white mt-3">{bio}</p>
              <div className="my-3 icon-shape bg-gradient-white shadow rounded text-info">
                <i className="ni ni-pin-3 text-info mr-2" />
                South San Francisco - CA
              </div>
              <SocialLinks />
            </Col>
          </Row>
        </div>
      </Container>
    </Card>
  );
};

export default GithubProfileCard;
