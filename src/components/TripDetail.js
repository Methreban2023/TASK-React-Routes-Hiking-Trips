import React from "react";
import tripsData from "../tripsData";
import TripItem from "./TripItem";
import { useParams, useNavigate, Navigate, Link } from "react-router-dom";
function TripDetail() {
  // const trip = tripsData[0];
  const { tripId } = useParams();
  // const navigate = useNavigate();
  const getTrips = tripsData.find((trip) => tripId == trip.id);
  if (!getTrips) {
    return <Navigate to="/" replace={true}></Navigate>;
  }
  return (
    <div className="modal-dialog modal-xl">
      <div className="modal-content">
        <div className="modal-body text-center pb-5">
          <div className="container">
            <div className="row justify-content-center">
              {/* <Link to={`/tripDetail/${getTrips.id}`}> */}
              {/* <TripItem tripId={trip.id} /> */}
              <div className="col-lg-8">
                <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                  {getTrips.name}
                </h2>
                <div className="divider-custom">
                  <div className="divider-custom-line"></div>
                  <div className="divider-custom-icon">
                    <i className="fas fa-star"></i>
                  </div>
                  <div className="divider-custom-line"></div>
                </div>
                <img
                  className="img-fluid rounded mb-5"
                  src={getTrips.img}
                  alt="..."
                />
                <p className="mb-4">
                  City : {getTrips.city}
                  <br />
                  Length : {getTrips.length1}Km
                  <br />
                  Rating : {getTrips.rating}
                  <br />
                  Difficulty : {getTrips.difficulty}
                  <br />
                  Details : {getTrips.details}
                </p>
              </div>
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TripDetail;
