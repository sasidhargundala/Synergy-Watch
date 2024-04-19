import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import "./Home.css";
import axios from "axios";
import { Link } from "react-router-dom";
const Home = () => {
  const [videosArray, setVideoarray] = useState([]);

  const fetchDetails = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5555/get-video-details"
      );
      setVideoarray(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, []);

  // console.log(videosArray);

  return (
    <div>
      <section className="nav_bar_component">
        <Navbar />
      </section>
      <section className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9 container">
            <section className="banner_component text-center d-flex align-items-center  justify-content-center">
              <h3 className="text-white">Synergy Watch</h3>
            </section>

            <section className="input_group_search container my-5">
              <div class="input-group mb-3 py">
                <input
                  type="text"
                  class="form-control py-4 ml-5"
                  placeholder="Search ....."
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <div class="input-group-append mr-5">
                  <span class="input-group-text" id="basic-addon2">
                    Search
                  </span>
                </div>
              </div>
            </section>

            <section className="thumbnails_layout">
              <div className="container">
                <div className="row">
                  {videosArray.map((video) => (

                    <div className="col-md-4 my-3">
                        <Link to={`/video/${video._id}`}>
                      <div className="thumbnail_image">
                        <img src={video.thumbnail_url} />
                      </div>

                      <div className="home_thumbnail_title">
                        <h6 className="my-3">{video.title}</h6>
                      </div>

                      <div className="home_channel_description d-flex">
                        <div className="channel_logo">
                          <img src={video.channel_logo} className="w-75 " />
                        </div>

                        <div className="channel_description">
                          <p>{video.channel_name}</p>
                          <p>{video.channel_subscribers}</p>
                          <p>{video.video_published_date}</p>
                        </div>
                      </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;