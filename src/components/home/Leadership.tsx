import React, { useState, useEffect, Profiler } from "react";
import Carousel from "react-bootstrap/Carousel";
import { leadership } from "../../editable-stuff/config";
const Leadership = () => {
  return (
    <div
      id="leadership"
      className="jumbotron jumbotron-fluid m-0"
      style={{ backgroundColor: "white" }}
    >
      <div className="container container-fluid">
        <h2 className="display-4 pb-5 text-center">{leadership.heading}</h2>
        <div className="row">
          <div className="col-md-5">
            <p className="lead">{leadership.message}</p>
          </div>
          <div className="col-md-7">
            <Carousel>
              {leadership.images.map((value: any, index: number) => {
                return (
                  <Carousel.Item key={'leadership_'+index}>
                    <img
                      className="d-block w-100"
                      src={value.img}
                      alt="First slide"
                      width={leadership.imageSize.width}
                      height={leadership.imageSize.height}
                    />
                    <Carousel.Caption>
                      <h3>{value.label}</h3>
                      <p>
                        {value.paragraph}
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
