/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Slider from "react-slick";
import firestore from "../services/firebase";
import PrevArrow, { NextArrow } from "./slidersArrow";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SuccessStories = () => {
  const [stories, setStories] = useState([]);
  const getdata = async () => {
    const snapshot = await firestore.collection("SuccessStories").get();
    const items = [];
    snapshot.forEach((item) => items.push(item.data()));
    setStories(items);
  };

  useEffect(() => {
    getdata();
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    className: "slider relative",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const passToModal = (slide) => {
    setModalOpen(true);
    setModalData(slide);
  };
  return (
    <div>
      <Slider {...settings}>
        {stories.map((slide) => (
          <div>
            <button
              type="button"
              onClick={() => passToModal(slide.imgURL)}
              className="imgContainer relative mr-0 w-full"
            >
              <div className="imgContainer relative mr-0 w-full">
                <img
                  className="sliderImg relative filter brightness-50 object-cover"
                  src={slide.imgURL}
                  alt="animals being in their forever home"
                />
                <div className="summary absolute z-10 text-center mx-auto my-0 w-full">
                  <p className="inline-block w-4/5">{slide.summary}</p>
                </div>
              </div>
            </button>
          </div>
        ))}
      </Slider>
      <Modal
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
        shouldCloseOnOverlayClick
        style={{
          overlay: {
            display: "flex",
            justifyContent: "center",
            position: "fixed",
            zIndex: "99999",
            backgroundColor: "rgba(5, 102, 118, 0.8)",
            overflow: "auto",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          },
          content: {
            display: "absolute",
            flexDirection: "column",
            position: "relative",
            top: 10,
            left: 10,
            right: 10,
            bottom: 10,
            width: 640,
            height: 640,
          },
        }}
      >
        <div className="w-21 h-96 flex flex-col items-center">
          <img
            className="w-full h-52 cover"
            src={modalData}
            alt="animals being in their forever home"
          />
          <div>
            <h1 className="text-lg font-medium my-4">Meet this Cutie!</h1>
            <p>
              everyone meet Cutie! Cutie was found when he was a little shy of a
              week two weeks old he fall down a roof and was abandoned by his
              mom but dont let that sad backstory distract you from the fact
              that Cutie grew to be a gentle giant he is about a meter tall and
              likes to play with EVERYTHING just grab something tall and wave it
              and thats it Yoda will run toward you for play, now lets hear some
              facts about yoda, numbrt onr yoda doesnt know to hiss the farthest
              he will go when he is mad is to open his mouth and do a sigh,
              number two everyday you have to hold and pet him while he pets you
              back by licking your arms. And thats it for out animal of the week
              hope you guys enjoyed getting to know Cutie
            </p>
          </div>

          <button
            type="button"
            onClick={() => setModalOpen(false)}
            className="mt-5 rounded-2xl w-28 h-20 active:text-primary active:bg-highlight bg-primary text-highlight font-medium"
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};
export default SuccessStories;
