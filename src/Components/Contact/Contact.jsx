import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            I'm currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" /> <p>greatstackdev@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={call_icon} alt="" /> <p>+8801723-517651</p>
            </div>
            <div className="contact-detail">
              <img src={location_icon} alt="" /> <p>rshihab31@gmail.com</p>
            </div>
          </div>
        </div>
        <form className="contact-right">
          <label>Your Name</label>
          <input type="text" placeholder="Your Name" />
          <label>Your Email</label>
          <input type="email" placeholder="Enter Your Mail" />
          <label>Write Your Message Here</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter Your Message"
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
