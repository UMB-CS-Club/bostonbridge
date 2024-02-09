import React, { useEffect } from "react";
import ReactGA from "react-ga";
import "./projects.css";

const set1 = () => {
  useEffect(() => {
    document.title = "Project Statements";
  });
  const handleSoftwareView = (Element) => {
    ReactGA.event({
      category: "Button",
      action: "click",
      label: "Projects",
    });
    const ElementVisibility = Element.currentTarget.querySelector(
      ".software-content-description"
    );
    ElementVisibility.classList.toggle("projects-close");
    ElementVisibility.classList.toggle("projects-view");
  };
  return (
    <React.Fragment>
      <div className="parent-software">
        <h1 className="parent-software-title">Projects Statements</h1>
        <p className="projects-disclaimer">
          OWN/UNIQUE PROBLEM STATEMENTS ARE ALSO WELCOMED - Kindly intimate when
          speaking with registration team
        </p>
        <div className="software-container">
          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Urban Commuter Solutions</h1>
            <p className="software-content-description projects-close">
              Create an app that offers real-time public transit schedules, bike-sharing availability, and pedestrian-friendly routes to help students navigate the city efficiently.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">City Navigation and Transportation Apps</h1>
            <p className="software-content-description projects-close">
              Develop a platform that integrates real-time traffic updates, public transportation options, and safest routes recommendations, specifically designed for students commuting to and from campus.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Local Community Engagement Platforms</h1>
            <p className="software-content-description projects-close">
              Design a platform that connects UMass students with local community events, volunteer opportunities, and social groups to foster a sense of belonging and community involvement.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">
              Student Housing and Accommodation Services
            </h1>
            <p className="software-content-description projects-close">
              Build an application that helps students find affordable housing options, roommate matching, and short-term leases near campus, tailored to the needs of commuters and new city residents.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">
              Part-Time Job and Internship Finders
            </h1>
            <p className="software-content-description projects-close">
              Create a service that aggregates part-time job and internship opportunities that are flexible around student schedules, including remote options and positions within the student's field of study.
            </p>
          </div>
          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Social Event and Activity Planning Tools</h1>
            <p className="software-content-description projects-close">
              Develop a tool that helps students discover and plan social activities, meetups, and cultural events around Boston, encouraging exploration and social integration.
            </p>
          </div>
          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Campus-to-City Transition Guides</h1>
            <p className="software-content-description projects-close">
              Design a comprehensive guide for new students that includes tips on navigating the city, understanding local culture, and making the most of urban living while studying.
            </p>
          </div>
          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Student Discount and Offers Aggregators</h1>
            <p className="software-content-description projects-close">
              Build an app that collects and shares student discounts and special offers available in Boston, ranging from restaurants and entertainment to transportation and retail.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Public Safety and Emergency Response Apps</h1>
            <p className="software-content-description projects-close">
              Create an application focused on student safety, offering quick access to emergency services, safety alerts, and public safety tips for living in an urban environment.
            </p>
          </div>

          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">
              Local Business Support and Networking
            </h1>
            <p className="software-content-description projects-close">
              Develop a platform that connects students with local businesses for internships, project collaborations, and networking opportunities, strengthening the link between the university and the local economy.
            </p>
          </div>
          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">
              Cultural Exchange and Inclusivity Platforms
            </h1>
            <p className="software-content-description projects-close">
              Design a platform that promotes cultural exchange and inclusivity, offering language exchange, cultural events, and forums for students from diverse backgrounds to share their experiences.
            </p>
          </div>
          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Health and Wellness Resources for Students</h1>
            <p className="software-content-description projects-close">
              Create an app that provides health and wellness resources, including mental health support, fitness classes, and nutritional information, tailored to the needs of busy students.
            </p>
          </div>
          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">Sustainable Living and Green Campus Initiatives</h1>
            <p className="software-content-description projects-close">
              Build a platform that encourages sustainable living among students, featuring information on green initiatives, sustainability projects on campus and in the city, and tips for eco-friendly living.
            </p>
          </div>
          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title ">
              Educational Partnerships and Local Learning Opportunities
            </h1>
            <p className="software-content-description projects-close">
              Design a system that facilitates partnerships between the university and local institutions for workshops, guest lectures, and educational events that enhance the student learning experience.
            </p>
          </div>
          <div className="software-content" onClick={handleSoftwareView}>
            <h1 className="software-content-title">
              City Exploration and Adventure Games.
            </h1>
            <p className="software-content-description projects-close">
              Create an interactive game that encourages students to explore Boston, complete challenges, and learn about the city's history, landmarks, and hidden gems, promoting engagement with the urban environment.{" "}
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default set1;
