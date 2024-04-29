import React, { useState } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //  Add logic to submit form data (e.g., send email, API call)
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="contact-container bg-[#231E3D] pt-14 lg:px-28 px-10 pb-10" id="contact">
      <div className="w-10 h-1 from-[#7361F2] to-[#BD4FF1] bg-gradient-to-r"></div>
      <div className="xl:flex xl:flex-row">
        <div className="text-section flex-1 align-center">
        <h1 className="text-gray-400 text-5xl xl:text-6xl  xl:pt-10 xl:pr-5 pt-8 pb-10">
            Accelerate your growth trajectory:  {/* Emphasize "Accelerate" and "Growth Trajectory" */}
            <br />
            reach out to our  {/* Emphasize "Reach Out" */}
            <span class="text-[#3B82F6]">SEO</span> and  {/* Change color for SEO */}
            <span class="text-[#9333EA]">Landing Page</span> Experts  {/* Change color for Landing Page */}
            </h1>
        </div>
        <div className="form-section flex-1">
          <form onSubmit={handleSubmit} className="pt-6">
            <div className="mb-4">
              <label
                className="block text-[#696984] text-lg font-semibold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-[#696984] text-lg font-semibold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-[#696984] text-lg font-semibold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
                required
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-[#7361F2] hover:bg-[#674CF2] text-white font-bold text-xl py-3 px-6 rounded focus:outline-none focus:shadow-outline"
              >
                Let's talk
              </button>
            </div>
          </form>
        </div>
      </div>
    </div> 
  );
}

export default ContactUs;
