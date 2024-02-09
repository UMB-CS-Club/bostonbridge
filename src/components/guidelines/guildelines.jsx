import React, { useEffect } from "react";
import "./guidelines.css";

const guildelines = () => {
  useEffect(() => {
    document.title = "Guidelines";
  });
  return (
    <React.Fragment>
      <div className="parent-guidelines">
        <div className="guidelines-title">Guidelines</div>
        <div className="guidelines-container">
          <div className="guidelines-content">
            <div className="guidelines-1">
              1. All projects must be submitted by 7:00 PM on February 18th. ⏰🏁
              <br /><br />
              2. Submissions are to be made through our GitHub repository issues. For more information, visit <a href="https://github.com/UMB-CS-Club/bostonbridge" target="_blank">our repository</a>. 💻📥
              <br /><br />
              3. The maximum number of members per team is 4. There are two tracks: Undergraduate and Graduate. 👥🎓
              <br /><br />
              4. Plagiarism will result in immediate disqualification and a ban from future hackathons. 🚫🔍
              <br /><br />
              5. Each submission must include a 3-minute fast-forward presentation followed by a 2-minute FAQ session. Get more presentation tips on <a href="https://discord.gg/cvsMrXvssa" target="_blank">our Discord server</a>. 🎤🕒
              <br /><br />
              6. Teams are allowed to start working on their projects 24 hours prior to the submission deadline, starting on February 17th. ⏳🛠️
              <br /><br />
            </div>
            <div className="guidelines-2">
              7. All participants are expected to adhere to the event's code of conduct. Unprofessional behavior will not be tolerated. 🚫⚖️
              <br /><br />
              8. Ensure your project adheres to the hackathon theme and addresses the specified challenges. 💡
              <br /><br />
              9. Teams are responsible for their own technical needs, including laptops, software, and any other necessary equipment. :laptop:⚙️
              <br /><br />
              10. Networking and collaboration with other teams is encouraged, but the final project must be the work of your team only. 🤝👥
              <br /><br />
              11. The judging panel's decisions are final. Feedback will be provided after the event. 🧑‍⚖️📝
              <br /><br />
              12. Enjoy the process, learn new things, and make the most of this opportunity to connect with the community! 😃✨
              <br /><br />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default guildelines;
