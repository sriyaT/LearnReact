import React from "react";

const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">Contact US!!</h1>
      <form>
        <input
          type="text"
          className=" border border-black p-4 m-4 rounded"
          placeholder="name"
        />
        <input
          type="text"
          className="border border-black p-4 m-4 rounded"
          placeholder="message"
        />
        <button className="border border-black p-4 m-4 bg-gray-200 rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
