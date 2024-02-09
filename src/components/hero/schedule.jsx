import React, { useEffect } from "react";
import "./schedule.css";

const schedule = () => {
  useEffect(() => {
    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("timelineAnimation");
          document
            .querySelectorAll(".container, .container-mobile")
            .forEach((container) =>
              container.classList.add("timelineAnimationContainer")
            );
        }
      });
    };

    const options = {
      threshold: 0.2,
    };
    const observer = new IntersectionObserver(callback, options);
    const divs = document.querySelectorAll("#timeline");
    divs.forEach((div) => observer.observe(div));
  });
  return (
    <React.Fragment>
      <div className="mainSchedule" id="schedule">
        <div className="parent-schedule">
          <div className="schedule-title">
            <img src="/images/rrr.png" alt="arrow-logo" />
            Schedule
          </div>
          <div className="timeline" id="timeline">
            <div className="container" id="timeline-container">
              <h2 className="date">
                <div>
                  Feb
                  <div>
                    <div> 11</div> <div>th</div>
                  </div>
                </div>
              </h2>
              <h2 className="container-title">Pre-event</h2>
              <p className="container-description">
                Release of the hackathon theme so students can start brainstorming and forming groups.
              </p>
              <span className="circle"></span>
            </div>
            <div className="container ">
              <h2 className="container-title">Check-in/registration</h2>
              <h1 className="date">
                <div>
                  Feb
                  <div>
                    <div>18</div> <div>th</div>
                  </div>
                </div>
              </h1>
              <p className="container-description">
                8:00 - 9:00 AM: Participants check-in and register. Start the day with local research project demos.
              </p>
              <span className="circle"></span>
            </div>
            <div className="container ">
              <h1 className="date">
                <div>
                  Feb
                  <div>
                    <div>18</div> <div>th</div>
                  </div>
                </div>
              </h1>
              <h2 className="container-title">Hackathon Begins</h2>
              <p className="container-description">
                9:00 - 9:25 AM: Official start with a Keynote Speech, Welcome Address, Guidelines Overview, and Sponsor Presentation.
              </p>

              <span className="circle"></span>
            </div>
            <div className="container ">
              <h2 className="container-title">Project Setup</h2>
              <h1 className="date">
                <div>
                  Feb
                  <div>
                    <div>18</div> <div>th</div>
                  </div>
                </div>
              </h1>
              <p className="container-description">
                9:30 - 10:00 AM: Hackers begin working on their projects.
              </p>
              <span className="circle"></span>
            </div>

            <div className="container ">
              <h2 className="container-title">Mid-day Events</h2> <br />
              <h1 className="date">
                <div>
                  Feb
                  <div>
                    <div>18</div> <div>th</div>
                  </div>
                </div>
              </h1>
              <p className="container-description">
                12:00 - 6:00 PM: A series of events including guest speakers, lunch, a Geoguesser tournament, and networking with Boba Tea.
              </p>
              <span className="circle"></span>
            </div>
            <div className="container ">
              <h2 className="container-title">Project Submissions</h2>
              <h1 className="date">
                <div>
                  Feb
                  <div>
                    <div>18</div> <div>th</div>
                  </div>
                </div>
              </h1>
              <p className="container-description">
                6:00 - 7:00 PM: Workshop for project submission and scoring explanation. Submissions are made through GitHub Issues.
              </p>
              <span className="circle"></span>
            </div>
            <div className="container ">
              <h2 className="container-title">Final Parts</h2>
              <h1 className="date">
                <div>
                  Feb
                  <div>
                    <div>18</div> <div>th</div>
                  </div>
                </div>
              </h1>
              <p className="container-description">
                7:00 - 9:00 PM: Mini project presentations (3-5 min per team), followed by judging and announcement of winners and prizes.
              </p>
              <span className="circle"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="mainSchedule" id="schedule">
        <div className="parent-schedule-mobile">
          <div className="schedule-title-mobile">
            <img src="/images/rrr.png" alt="arrow-logo" />
            Schedule
          </div>
          <div className="timeline-mobile" id="timeline">
            <div className="container-mobile" id="timeline-container">
              <h2 className="container-title-mobile">Pre-event</h2>
              <h2 className="date-mobile">
                <div>
                  Feb
                  <div>
                    <div>11</div> <div>th</div>
                  </div>
                </div>
              </h2>
              <p className="container-description-mobile">
                Release of the hackathon theme so students can start brainstorming and forming groups.
              </p>
              <span className="circle-mobile"></span>
            </div>

            <div className="container-mobile" id="timeline-container">
              <h2 className="container-title-mobile">Check-in/Registration</h2>
              <h2 className="date-mobile">
                <div>
                  Feb
                  <div>
                    <div>18</div> <div>th</div>
                  </div>
                </div>
              </h2>
              <p className="container-description-mobile">
                8:00 - 9:00 AM: Participants check-in and register. Start the day with local research project demos.
              </p>
              <span className="circle-mobile"></span>
            </div>

            <div className="container-mobile">
              <h2 className="container-title-mobile">Hackathon Begins</h2>
              <h2 className="date-mobile">
                <div>
                  Feb
                  <div>
                    <div>18</div> <div>th</div>
                  </div>
                </div>
              </h2>
              <p className="container-description-mobile">
                9:00 - 9:25 AM: Official start with a Keynote Speech, Welcome Address, Guidelines Overview, and Sponsor Presentation.
              </p>
              <span className="circle-mobile"></span>
            </div>

            <div className="container-mobile">
              <h2 className="container-title-mobile">Project Setup</h2>
              <h2 className="date-mobile">
                <div>
                  Feb
                  <div>
                    <div>18</div> <div>th</div>
                  </div>
                </div>
              </h2>
              <p className="container-description-mobile">
                9:30 - 10:00 AM: Hackers begin working on their projects.
              </p>
              <span className="circle-mobile"></span>
            </div>

            <div className="container-mobile">
              <h2 className="container-title-mobile">Mid-day Events</h2>
              <h2 className="date-mobile">
                <div>
                  Feb
                  <div>
                    <div>18</div> <div>th</div>
                  </div>
                </div>
              </h2>
              <p className="container-description-mobile">
                12:00 - 6:00 PM: A series of events including guest speakers, lunch, a Geoguesser tournament, and networking with Boba Tea.
              </p>
              <span className="circle-mobile"></span>
            </div>

            <div className="container-mobile">
              <h2 className="container-title-mobile">Project Submissions</h2>
              <h2 className="date-mobile">
                <div>
                  Feb
                  <div>
                    <div>18</div> <div>th</div>
                  </div>
                </div>
              </h2>
              <p className="container-description-mobile">
                6:00 - 7:00 PM: Workshop for project submission and scoring explanation. Submissions are made through GitHub Issues.
              </p>
              <span className="circle-mobile"></span>
            </div>

            <div className="container-mobile">
              <h2 className="container-title-mobile">Final Parts</h2>
              <h2 className="date-mobile">
                <div>
                  Feb
                  <div>
                    <div>18</div> <div>th</div>
                  </div>
                </div>
              </h2>
              <p className="container-description-mobile">
                7:00 - 9:00 PM: Mini project presentations (3-5 min per team), followed by judging and announcement of winners and prizes.
              </p>
              <span className="circle-mobile"></span>
            </div>

          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default schedule;
