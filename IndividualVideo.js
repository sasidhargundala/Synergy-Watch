import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import ReactPlayer from "react-player";
import axios from "axios";

const IndividualVideo = () => {
  const [videoDetails, setVideoDetails] = useState({
    savedStatus: "Not saved",
  });
  const { id } = useParams();
  console.log(id);
  const fetchIindividualVideo = async (req, res) => {
    try {
      const response = await axios.get(
        `http://localhost:5555/individualvideo/${id}`
      );
      setVideoDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const toggleSavedStatus = async () => {
    // it checks videoDetails.savedStatus of respective video of if it is saved it changes to not saved, if it is npt saved it changes to saved
    const newStatus =
      videoDetails.savedStatus === "Saved" ? "Not Saved" : "Saved";
      
      setVideoDetails({ ...videoDetails, savedStatus: newStatus });

      try {
        const response = await axios.put(`http://localhost:5555/videos/${id}/save`, { savedStatus: newStatus });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      fetchIindividualVideo();
    }, []);
  
    console.log(videoDetails);
  
    return (
      <div>
        <section className="nav_bar_component">
          <Navbar />
        </section>
        <section className="container-fluid mt-4">
          <div className="row">
            <div className="col-md-3">
              <Sidebar />
            </div>
            <div className="col-md-9 container">
              <div className="col-12">
              <ReactPlayer
                url={videoDetails.video_url}
                width={"100%"}
                height={"400px"}
              />
            </div>
            <div className="col-12"> 
            <p className="mt-3">{videoDetails.title}</p>
            </div>
            <div className="col-12">
              <div className="d-flex justify-content-between">
              <p>{videoDetails.channel_subscribers}</p>
                <p>{videoDetails.video_published_date}</p>

                <div className="d-flex ">
                  <span className="mx-2">Like</span>
                  <span className="mx-2">Dislike</span>
                  <span className="mx-2">Save</span>
                  <span className="mx-2" onClick={toggleSavedStatus}>{videoDetails.savedStatus}</span>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="d-flex">
                <div>
                  <img src={videoDetails.channel_logo} />
                </div>
                <div>  
                <p className="m-0">{videoDetails.channel_name}</p>
                  <p className="m-0">56M subscribers</p>
                  <p className="m-0">{videoDetails.video_description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default IndividualVideo;
            