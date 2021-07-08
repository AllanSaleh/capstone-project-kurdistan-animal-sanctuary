import React from "react";

const contactUsBody = () => (
  <div>
    <h1 className="text-center">Contact uS</h1>
    <p className="text-center">
      A House Without Animals is like a Garden Without Flowers
    </p>
    <p className="text-center ">Please Send us your notes here</p>
    <form action="#" className="flex flex-col items-center">
      <div className="flex justify-between w-full">
        <input className="border" type="text" placeholder="Full name" />
        <input className="border" type="text" placeholder="Email address" />
        <input className="border" type="text" placeholder="phone number" />
      </div>
      <textarea
        className="border"
        name="message"
        cols="120"
        rows="10"
        placeholder="Tell us how we can help you"
      />
      <button className="border" type="submit">
        Send
      </button>
    </form>
  </div>
);

export default contactUsBody;
