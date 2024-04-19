import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import axios from "axios";
import { Link } from "react-router-dom";

const TrendingVideos = () => {
  const [gamingVideos, setTrendingVideos] = useState([]);

  const getTrendingVideos = async () => {
    try {
      const response = await axios.get("http://localhost:5555/trendingvideos");
      setTrendingVideos(response.data.trendingVideos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTrendingVideos();
  }, []);

  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <Sidebar />
            </div>

            <div className="col-md-9">
              <div className="container-fluid">
                <div className="row">
                  {gamingVideos.map((video) => (
                    <div className="col-md-4 my-3" key={video._id}>
                      <Link to={`/video/${video._id}`}>
                        <div className="thumbnail_image">
                          <img src={video.thumbnail_url} alt={video.title} />
                        </div>

                        <div className="home_thumbnail_title">
                          <h6 className="my-3">{video.title}</h6>
                        </div>

                        <div className="home_channel_description d-flex">
                          <div className="channel_logo">
                            <img src={video.channel_logo} alt={video.channel_name} className="w-75" />
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrendingVideos;
