import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../partials/Header";
import PageIllustration from "../partials/PageIllustration";
import Banner from "../partials/Banner";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";

const Hackathon = () => {
  const [email, setEmail] = useState("");
  const [teamName, setTeamName] = useState("");
  const [maxTeamSize, setMaxTeamSize] = useState("");
  const [currentTeamSize, setCurrentTeamSize] = useState("");
  const [registrationLink, setRegistrationLink] = useState("");
  const [venue, setVenue] = useState("");
  const [problemStatementDescription, setProblemStatementDescription] =
    useState("");
  const [hackathonDate, setHackathonDate] = useState(new Date());
  const [skillsRequired, setSkillsRequired] = useState([]);
  const [error, setError] = useState("");

  const skillOptions = [
    { value: "react", label: "React" },
    { value: "vue", label: "Vue" },
    { value: "angular", label: "Angular" },
    { value: "django", label: "Django" },
    { value: "flask", label: "Flask" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate email
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email");
      return;
    }

    // Validate team name
    if (teamName.trim() === "") {
      setError("Please enter a team name");
      return;
    }

    // Validate max team size
    // const maxTeamSizeRegex = /^\d+$/;
    // if (!maxTeamSizeRegex.test(maxTeamSize)) {
    //   setError("Please enter a valid maximum team size");
    //   return;
    // }

    // // Validate current team size
    // const currentTeamSizeRegex = /^\d+$/;
    // if (!currentTeamSizeRegex.test(currentTeamSize)) {
    //   setError("Please enter a valid current team size");
    //   return;
    // }

    // Validate registration link
    const urlRegex =
      /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w\.-]*)*\/?$/;
    if (!urlRegex.test(registrationLink)) {
      setError("Please enter a valid registration link");
      return;
    }

    // Validate venue
    if (venue.trim() === "") {
      setError("Please enter a venue");
      return;
    }

    // Validate problem statement description
    if (problemStatementDescription.trim() === "") {
      setError("Please enter a problem statement description");
      return;
    }

    // Validate hackathon date
    if (hackathonDate === null) {
      setError("Please select a hackathon date");
      return;
    }

    // Validate skills required
    if (skillsRequired.length === 0) {
      setError("Please select at least one skill required");
      return;
    }

    // If all validations passed, submit the form
    alert("Form submitted successfully!");
  };

  return (
    // <div className="flex flex-col min-h-screen overflow-hidden">
    //   {/*  Site header */}
    //   <Header />

    //   {/*  Page content */}
    //   <main className="grow">
    //     {/*  Page illustration */}
    //     <div
    //       className="relative max-w-6xl mx-auto h-0 pointer-events-none"
    //       aria-hidden="true"
    //     >
    //       <PageIllustration />
    //     </div>

    //     <section className="relative">
    //       <div className="max-w-6xl mx-auto px-4 sm:px-6">
    //         <div className="pt-32 pb-12 md:pt-40 md:pb-20">
    //           {/* Page header */}
    //           <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
    //             <h1 className="h1">
    //               Welcome. We exist to make entrepreneurship easier.
    //             </h1>
    //           </div>

    //           {/* Form */}
    //           <div className="max-w-sm mx-auto">
    //             <form>
    //               <div className="flex flex-wrap -mx-3">
    //                 <div className="w-full px-3">
    //                   <button className="btn px-0 text-white bg-red-600 hover:bg-red-700 w-full relative flex items-center">
    //                     <svg
    //                       className="w-4 h-4 fill-current text-white opacity-75 shrink-0 mx-4"
    //                       viewBox="0 0 16 16"
    //                       xmlns="http://www.w3.org/2000/svg"
    //                     >
    //                       <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" />
    //                     </svg>
    //                     <span
    //                       className="h-6 flex items-center border-r border-white border-opacity-25 mr-4"
    //                       aria-hidden="true"
    //                     ></span>
    //                     <span className="flex-auto pl-16 pr-8 -ml-16">
    //                       Sign up with Google
    //                     </span>
    //                   </button>
    //                 </div>
    //               </div>
    //             </form>
    //             <div className="flex items-center my-6">
    //               <div
    //                 className="border-t border-gray-700 border-dotted grow mr-3"
    //                 aria-hidden="true"
    //               ></div>
    //               <div className="text-gray-400">
    //                 Or, register with your email
    //               </div>
    //               <div
    //                 className="border-t border-gray-700 border-dotted grow ml-3"
    //                 aria-hidden="true"
    //               ></div>
    //             </div>
    //             <form>
    //               <div className="flex flex-wrap -mx-3 mb-4">
    //                 <div className="w-full px-3">
    //                   <label
    //                     className="block text-gray-300 text-sm font-medium mb-1"
    //                     htmlFor="full-name"
    //                   >
    //                     Full Name <span className="text-red-600">*</span>
    //                   </label>
    //                   <input
    //                     id="full-name"
    //                     type="text"
    //                     className="form-input w-full text-gray-300"
    //                     placeholder="First and last name"
    //                     required
    //                   />
    //                 </div>
    //               </div>
    //               <div className="flex flex-wrap -mx-3 mb-4">
    //                 <div className="w-full px-3">
    //                   <label
    //                     className="block text-gray-300 text-sm font-medium mb-1"
    //                     htmlFor="company-name"
    //                   >
    //                     Company Name <span className="text-red-600">*</span>
    //                   </label>
    //                   <input
    //                     id="company-name"
    //                     type="text"
    //                     className="form-input w-full text-gray-300"
    //                     placeholder="Your company or app name"
    //                     required
    //                   />
    //                 </div>
    //               </div>
    //               <div className="flex flex-wrap -mx-3 mb-4">
    //                 <div className="w-full px-3">
    //                   <label
    //                     className="block text-gray-300 text-sm font-medium mb-1"
    //                     htmlFor="email"
    //                   >
    //                     Work Email <span className="text-red-600">*</span>
    //                   </label>
    //                   <input
    //                     id="email"
    //                     type="email"
    //                     className="form-input w-full text-gray-300"
    //                     placeholder="you@yourcompany.com"
    //                     required
    //                   />
    //                 </div>
    //               </div>
    //               <div className="flex flex-wrap -mx-3 mb-4">
    //                 <div className="w-full px-3">
    //                   <label
    //                     className="block text-gray-300 text-sm font-medium mb-1"
    //                     htmlFor="password"
    //                   >
    //                     Password <span className="text-red-600">*</span>
    //                   </label>
    //                   <input
    //                     id="password"
    //                     type="password"
    //                     className="form-input w-full text-gray-300"
    //                     placeholder="Password (at least 10 characters)"
    //                     required
    //                   />
    //                 </div>
    //               </div>
    //               <div className="text-sm text-gray-500 text-center">
    //                 I agree to be contacted by Open PRO about this offer as per
    //                 the Open PRO{" "}
    //                 <Link
    //                   to="#"
    //                   className="underline text-gray-400 hover:text-gray-200 hover:no-underline transition duration-150 ease-in-out"
    //                 >
    //                   Privacy Policy
    //                 </Link>
    //                 .
    //               </div>
    //               <div className="flex flex-wrap -mx-3 mt-6">
    //                 <div className="w-full px-3">
    //                   <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">
    //                     Sign up
    //                   </button>
    //                 </div>
    //               </div>
    //             </form>
    //             <div className="text-gray-400 text-center mt-6">
    //               Already using Open PRO?{" "}
    //               <Link
    //                 to="signin"
    //                 className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out"
    //               >
    //                 Sign in
    //               </Link>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </section>
    //   </main>

    //   <Banner />
    // </div>
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="grow">
        <div
          className="relative max-w-6xl mx-auto h-0 pointer-events-none"
          aria-hidden="true"
        >
          <PageIllustration />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            {" "}
            {/*"max-w-6xl mx-auto px-4 sm:px-6">*/}
            <div className="pt-32 pb-8">
              <div className="lg:w-3/4 xl:w-2/3">
                <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                  <h2 className="h1">Hackathons</h2>
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-100 text-sm font-bold mb-1"
                    htmlFor="project-name"
                  >
                    Team Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="teamName"
                    type="text"
                    className="form-input w-full text-gray-300"
                    placeholder="Your project name"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-100 text-sm font-bold mb-1"
                    htmlFor="project-name"
                  >
                    Maximum Team Size<span className="text-red-600">*</span>
                  </label>
                  <input
                    id="maxTeamSize"
                    type="number"
                    className="form-input w-full text-gray-300"
                    placeholder="1"
                    value={maxTeamSize}
                    onChange={(e) => setMaxTeamSize(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-300 text-sm font-bold mb-1"
                    htmlFor="project-name"
                  >
                    Current Team Size<span className="text-red-600">*</span>
                  </label>
                  <input
                    id="currentTeamSize"
                    type="number"
                    className="form-input w-full text-gray-300"
                    placeholder="1"
                    value={currentTeamSize}
                    onChange={(e) => setCurrentTeamSize(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-100 font-bold mb-2"
                    htmlFor="problemStatementDescription"
                  >
                    Registration Link <span className="text-red-600"></span>
                  </label>
                  <input
                    id="project-url"
                    type="url"
                    className="form-input w-full text-gray-300"
                    placeholder="https://yourproject.com"
                    value={registrationLink}
                    onChange={(e) => setRegistrationLink(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-100 font-bold mb-2"
                    htmlFor="problemStatementDescription"
                  >
                    Problem Statement Description
                  </label>
                  <textarea
                    className="form-input w-full text-gray-300"
                    id="problemStatementDescription"
                    placeholder="Enter problem statement description"
                    value={problemStatementDescription}
                    onChange={(e) =>
                      setProblemStatementDescription(e.target.value)
                    }
                  ></textarea>
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-100 font-bold mb-2"
                    htmlFor="hackathonDate"
                  >
                    Hackathon Date
                  </label>
                  <DatePicker
                    selected={hackathonDate}
                    onChange={(date) => setHackathonDate(date)}
                    className="form-input w-full text-gray-300"
                    dateFormat="dd/MM/yyyy"
                    minDate={new Date()}
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-100 font-bold mb-2"
                    htmlFor="skillsRequired"
                  >
                    Skills Required
                  </label>
                  {/* <Select
                    className="form-input w-full text-black-900"
                    options={skillOptions}
                    isMulti
                    value={skillsRequired}
                    onChange={(selected) => setSkillsRequired(selected)}
                  /> */}
                  <Select
                    className="form-input w-full"
                    classNamePrefix="select"
                    options={skillOptions}
                    isMulti
                    value={skillsRequired}
                    onChange={(selected) => setSkillsRequired(selected)}
                    styles={{
                      menu: (provided) => ({
                        ...provided,
                        backgroundColor: "black",
                      }),
                      option: (provided, state) => ({
                        ...provided,
                        backgroundColor: state.isSelected ? "gray" : "black",
                        color: state.isSelected ? "black" : "white",
                      }),
                    }}
                  />
                </div>
                <div className="mb-4">
                  <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-400 focus:outline-none focus:shadow-outline"
                  >
                    Submit
                  </button>
                </div>
                {error && <div className="text-red-500">{error}</div>}
              </div>
            </div>
          </div>
        </form>
      </main>
      {/* <Banner /> */}
    </div>
  );
};

export default Hackathon;
