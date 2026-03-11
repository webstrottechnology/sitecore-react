import React, { useState } from "react";
import {
  FaEnvelope,
  FaEnvelopeOpenText,
  FaFacebookF,
  FaGithub,
  FaGooglePlusG,
  FaHeadset,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";
import "./Form.scss";
import userIcon from "../../../assets/images/person.png";
import emilIcon from "../../../assets/images/email.png";
import passwordIcon from "../../../assets/images/password.png";
import googleIcon from "../../../assets/images/search.png";
import githubIcon from "../../../assets/images/github.png";
import loginFiveImg from "../../../assets/images/user1.png";
import { FaMapMarkedAlt, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import {
  FiUser,
  FiPhone,
  FiMail,
  FiMapPin,
  FiEye,
  FiEyeOff,
} from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import Logo from "../../../assets/images/inner-pages/login-logo.png";

const FormOne = () => {
  const [active, setActive] = useState(false);

  return (
    <div className={`formOne-container-box ${active ? "active" : ""}`}>
      {/* SIGN UP */}
      <div className="form_container sign_up">
        <form>
          <h1>Sign Up</h1>

          <div className="social-icons">
            <a href="#">
              <FaGooglePlusG />
            </a>
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaGithub />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
          </div>

          <span>or use your email for registration</span>

          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <button type="button">Sign Up</button>
        </form>
      </div>

      {/* SIGN IN */}
      <div className="form_container sign_in">
        <form>
          <h1>Sign In</h1>

          <div className="social-icons">
            <a href="#">
              <FaGooglePlusG />
            </a>
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaGithub />
            </a>
            <a href="#">
              <FaLinkedinIn />
            </a>
          </div>

          <span>or use your email password</span>

          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />

          <a href="#">Forget Your Password?</a>

          <button type="button">Sign In</button>
        </form>
      </div>

      {/* TOGGLE PANEL */}
      <div className="toggle_container">
        <div className="toggle">
          <div className="toggle_pannel toggle_left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all of site features</p>
            <button className="hidden" onClick={() => setActive(false)}>
              Sign In
            </button>
          </div>

          <div className="toggle_pannel toggle_right">
            <h1>Hello, Friend!</h1>
            <p>
              Register with your personal details to use all of site features
            </p>
            <button className="hidden" onClick={() => setActive(true)}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const FormTwo = () => {
  const [islogin, setIsLogin] = useState(true);

  return (
    <div className="formTwo-wrapper">
      <div className="formTwo-container">
        <div className="formInfo-box">
          <div className="form-toggle">
            <button
              className={islogin ? "active" : ""}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button
              className={!islogin ? "active" : ""}
              onClick={() => setIsLogin(false)}
            >
              SignUp
            </button>
          </div>
          {islogin ? (
            <>
              <div className="formTwo-box">
                <h2>Login</h2>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <a href="#">Forgot Password?</a>
                <button type="button">Login</button>
                <p>
                  Not a Member?{" "}
                  <a href="#" onClick={() => setIsLogin(false)}>
                    signup now
                  </a>
                </p>
              </div>
            </>
          ) : (
            <>
              <div className="formTwo-box">
                <h2>SignUp</h2>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm Password" />
                <button type="button">SignUp</button>
                <p>
                  Already a Member?{" "}
                  <a href="#" onClick={() => setIsLogin(true)}>
                    login now
                  </a>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const FormThree = () => {
  const [action, setAction] = useState("Login");
  return (
    <div className="formThree-wrapper">
      <div className="header-wrapper">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs-box">
        {action === "Login" ? (
          <div></div>
        ) : (
          <div className="input">
            <img src={userIcon} alt="icon" />
            <input type="text" placeholder="Name" />
          </div>
        )}

        <div className="input">
          <img src={emilIcon} alt="icon" />
          <input type="email" placeholder="Email Id" />
        </div>

        <div className="input">
          <img src={passwordIcon} alt="icon" />
          <input type="password" placeholder="Password" />
        </div>
      </div>
      {action === "Sign Up" ? (
        <div></div>
      ) : (
        <div className="forgot-password">
          Lost Password? <a href="#">Click Here!</a>
        </div>
      )}
      <div className="submit-container">
        <div
          className={action === "Login" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          Sign Up
        </div>
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={() => {
            setAction("Login");
          }}
        >
          Login
        </div>
      </div>
    </div>
  );
};

const FormFour = () => {
  return (
    <div className="formFour-wrapper">
      <div className="formFour-container">
        <div className="login-header">
          <h2 className="brand-title">Welcome Back</h2>
          <p className="brand-subtitle">Sign in to continue to your account</p>
        </div>

        <form className="login-form">
          <div className="form-group">
            <label className="form-label">Email Address</label>

            <input
              type="email"
              className="form-input"
              placeholder="name@company.com"
            />
          </div>

          <div className="form-group">
            <div className="label-row">
              <label className="form-label">Password</label>
              <a href="#" className="forgot-link">
                Forgot password?
              </a>
            </div>

            <input
              type="password"
              className="form-input"
              placeholder="Enter your password"
            />
          </div>

          <div className="form-group checkbox-group">
            <label className="checkbox-label">
              <input type="checkbox" className="checkbox-input" />
              <span className="checkbox-text">Remember me for 30 days</span>
            </label>
          </div>

          <button type="button" className="submit-btn">
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="divider">
          <span className="divider-text">or continue with</span>
        </div>

        {/* Social */}
        <div className="social-buttons">
          <button className="social-btn">
            <img src={googleIcon} alt="" />
            Google
          </button>
          <button className="social-btn">
            <img src={githubIcon} alt="" />
            GitHub
          </button>
        </div>

        {/* Signup */}
        <p className="signup-text">
          Don't have an account?{" "}
          <a href="#" className="signup-link">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

const FormFive = () => {
  return (
    <div className="formFive-wrapper">
      <div className="formFive-login-card">
        <div className="login-left">
          <h2>Login</h2>
          <p>See your growth and get consulting support!</p>

          <button className="google-btn">
            <img src={googleIcon} alt="" />
            Sign in with Google
          </button>

          <div className="form-box">
            <label>Email*</label>
            <input type="email" placeholder="mail@website.com" />

            <label>Password*</label>
            <input type="password" placeholder="Min. 8 character" />

            <button className="login-btn">Login</button>
          </div>

          <span className="copyright">©2026 Erdem All rights reserved</span>
        </div>

        {/* RIGHT */}
        <div className="login-right">
          <img src={loginFiveImg} alt="login" />
        </div>
      </div>
    </div>
  );
};

const FormSeven = () => {
  return (
    <div className="formSeven-wrapper">
      <div className="form-seven__container">
        {/* Left Side */}
        <div className="form-seven__left">
          <h2>Contact Us</h2>

          <div className="form-seven__info">
            <div className="info-item">
              <FaPhoneAlt />
              <span>470-601-1911</span>
            </div>

            <div className="info-item">
              <FaEnvelope />
              <span>https://veilmail.io/irish-geoff</span>
            </div>

            <div className="info-item">
              <FaMapMarkerAlt />
              <span>654 Sycamore Avenue, Meadowville, WA 76543</span>
            </div>
          </div>
        </div>
        {/* Right Side */}
        <div className="form-seven__right">
          <h3>Send Us A Message</h3>

          <form className="form-seven__form">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Phone" />

            <div className="radio-group">
              <p>Preferred method of communication</p>

              <label>
                <input type="radio" name="contact" /> Email
              </label>

              <label>
                <input type="radio" name="contact" /> Phone
              </label>
            </div>

            <textarea placeholder="Message" rows="4"></textarea>

            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

const FormEight = () => {
  return (
    <div className="formEight-wrapper">
      <div className="formEight-info">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-description">
          Feel free to reach out to us anytime.
        </p>
      </div>

      <form className="form-group-container">
        <div className="form-group">
          <label className="form-label">Name</label>
          <input type="text" className="form-input" placeholder="Enter name" />
        </div>

        <div className="form-group">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-input"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Message</label>
          <textarea
            className="form-textarea"
            placeholder="Write message"
          ></textarea>
        </div>

        <button className="form-submit">Send</button>
      </form>
    </div>
  );
};

const FormNine = () => {
  return (
    <>
      <div className="FormNine-wrapper">
        <div className="contact-card">
          <div className="purple-bar"></div>
          {/* Left */}
          <div className="contact-left">
            <h2>Contact Us</h2>
            <p>
              Feel Free to contact us any time. We will get back to you as soon
              as we can!
            </p>

            <form>
              <div className="input-group">
                <input type="text" placeholder="Name" />
              </div>

              <div className="input-group">
                <input type="email" placeholder="Email" />
              </div>

              <div className="input-group">
                <textarea placeholder="Message"></textarea>
              </div>

              <button type="submit">Send</button>
            </form>
          </div>

          {/* Right */}
          <div className="contact-right">
            <div className="info-box">
              <h3>Contact Info</h3>

              <div className="info-item">
                <FaPhoneAlt />
                <span>+91 8009 054294</span>
              </div>

              <div className="info-item">
                <FaEnvelope />
                <span>info@flightmantra.com</span>
              </div>

              <div className="info-item">
                <FaMapMarkerAlt />
                <span>
                  1000+ Travel partners and 65+ Service city across India, USA,
                  Canada & UAE
                </span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="socials">
            <a href="#">
              <FaFacebookF />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

const FormTen = () => {
  return (
    <div className="formten-wrapper">
      <div className="formten__container">
        {/* Left Info */}
        <div className="formten__info">
          <h3>Information:</h3>

          <p className="desc">
            Brendan Fraser, renowned actor of the silver screen, has taken on a
            new role as a tour guide, leveraging his passion for adventure.
          </p>

          <ul>
            <li>
              <strong>Phone :</strong> <span>+123 9998 000</span>
            </li>
            <li>
              <strong>Website :</strong> <span>www.info.com</span>
            </li>
            <li>
              <strong>E-Mail :</strong> <span>info@gmail.com</span>
            </li>
            <li>
              <strong>Address :</strong> <span>1426 California, USA</span>
            </li>
          </ul>

          <div className="map">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.7636081349573!2d-73.98930832418902!3d40.74881717138864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18e5a2b1%3A0x7b0e4e0a5d2e5d9!2sEmpire%20State%20Building!5e0!3m2!1sen!2sin!4v1700000000000"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Right Form */}
        <div className="formten__form">
          <h2>Let's Connect And Get To Know Each Other</h2>

          <p>
            Brendan Fraser, Renowned Actor Of The Silver Screen, Has Taken On A
            New Role As A Tour Guide, Leveraging His Passion.
          </p>

          <form>
            <div className="flexBox">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="E-mail" />
            </div>

            <input type="text" placeholder="Website" />

            <textarea placeholder="Comments"></textarea>

            <label className="remember">
              <input type="checkbox" />
              <span>
                Save My Name, Email, And Website In This Browser For The Next
                Time I Comment.
              </span>
            </label>

            <button type="submit">SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </div>
  );
};

const FormEleven = () => {
  const [tab, setTab] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [forgot, setForgot] = useState(false);

  return (
    <div className="sitecore_lr_wrapper">
      <div className="auth_card">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <h3>Welcome!</h3>
        <p>Please Enter Your Detail</p>

        {/* FORGOT PASSWORD PAGE */}

        {forgot ? (
          <>
            <div className="input_group">
              <label>Email</label>
              <div className="input_box">
                <input placeholder="Enter Your Email" />
                <FiMail className="icon" />
              </div>
            </div>

            <button className="main_btn">Reset Password</button>

            <span className="link" onClick={() => setForgot(false)}>
              Back to Login
            </span>
          </>
        ) : (
          <>
            {/* Tabs */}

            <div className="tabs">
              <button
                className={tab === "login" ? "active" : ""}
                onClick={() => setTab("login")}
              >
                Log In
              </button>

              <button
                className={tab === "register" ? "active" : ""}
                onClick={() => setTab("register")}
              >
                Register
              </button>
            </div>

            {/* LOGIN */}

            {tab === "login" && (
              <>
                <div className="input_group">
                  <label>Email</label>
                  <div className="input_box">
                    <input placeholder="Enter Your Email" />
                    <FiMail className="icon" />
                  </div>
                </div>

                <div className="input_group">
                  <label>Password</label>
                  <div className="input_box">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter Password"
                    />

                    {showPassword ? (
                      <FiEyeOff
                        className="icon"
                        onClick={() => setShowPassword(false)}
                      />
                    ) : (
                      <FiEye
                        className="icon"
                        onClick={() => setShowPassword(true)}
                      />
                    )}
                  </div>
                </div>

                <div className="remember_row">
                  <label className="custom_checkbox">
                    <input
                      type="checkbox"
                      checked={remember}
                      onChange={() => setRemember(!remember)}
                    />
                    <span className="checkmark"></span>
                    Remember me
                  </label>
                  <span className="forgot" onClick={() => setForgot(true)}>
                    Forgot Password
                  </span>
                </div>

                <button className="main_btn">LOG IN</button>
              </>
            )}

            {/* REGISTER */}

            {tab === "register" && (
              <>
                <div className="input_group">
                  <label>Name</label>

                  <div className="input_box">
                    <input placeholder="Enter Your Name" />

                    <FiUser className="icon" />
                  </div>
                </div>

                <div className="input_group">
                  <label>Email</label>

                  <div className="input_box">
                    <input placeholder="Enter Your Email" />

                    <FiMail className="icon" />
                  </div>
                </div>

                <div className="input_group">
                  <label>Password</label>

                  <div className="input_box">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter Password"
                    />

                    {showPassword ? (
                      <FiEyeOff
                        className="icon"
                        onClick={() => setShowPassword(false)}
                      />
                    ) : (
                      <FiEye
                        className="icon"
                        onClick={() => setShowPassword(true)}
                      />
                    )}
                  </div>
                </div>

                <button className="main_btn">SIGN UP</button>
              </>
            )}

            <button className="google_btn">
              <FcGoogle />
              Continue With Google
            </button>
          </>
        )}
      </div>
    </div>
  );
};

const FormTwelve = () => {
  return (
    <div className="appointment_section">
      <div className="container">
        <div className="appointment_wrapper">
          {/* LEFT SIDE */}
          <div className="left">
            <span className="tag">Get In Touch</span>
            <h2>We Want To Share Our Location Find Us Easily</h2>
            <p>
              Majority have suffered alteration in some form, by injected
              humour, or randomised words.
            </p>

            {/* CONTACT CARD */}
            <div className="contact_card">
              <div className="item">
                <div className="icon">
                  <FiPhone />
                </div>
                <div className="text-box">
                  <h4>Our Phone</h4>
                  <span>+48 35461 35480</span>
                </div>
              </div>

              <div className="item">
                <div className="icon">
                  <FiMail />
                </div>
                <div className="text-box">
                  <h4>Our Email</h4>
                  <span>aprl132@example.com</span>
                </div>
              </div>

              <div className="item">
                <div className="icon">
                  <FiMapPin />
                </div>
                <div className="text-box">
                  <h4>Our Address</h4>
                  <span>2462 Williams Lane Wichita, KS 67202</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}

          <div className="right">
            <h3>Make An Appointment</h3>
            <form>
              <div className="grid">
                <div className="input">
                  <label>Full Name</label>
                  <input type="text" placeholder="Enter Your Full Name" />
                </div>

                <div className="input">
                  <label>Email Address</label>
                  <input type="email" placeholder="Enter Your Email Address" />
                </div>

                <div className="input">
                  <label>Phone Number</label>
                  <input type="text" placeholder="Enter Your Phone Number" />
                </div>

                <div className="input">
                  <label>Preferred Date</label>
                  <input type="date" />
                </div>
              </div>

              <div className="input">
                <label>Subject</label>
                <select>
                  <option>- Select -</option>
                  <option>Dental Care</option>
                  <option>Eye Check</option>
                  <option>Medical</option>
                </select>
              </div>

              <div className="input">
                <label>Your Message</label>
                <textarea rows="5"></textarea>
              </div>

              <button className="btn">SEND MESSAGE</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const FormThirteen = () => {
  return (
    <div className="contact-section">
      <div className="container">
        <div className="contact-wrapper">
          {/* LEFT */}
          <div className="contact-left">
            <h2>Get In Touch With Us</h2>
            <p className="paraBox">
              Curabitur gravida arcu ac tortor. Non consectetur a erat nam at.
              Facilisis magna etiam tempor orci eu lobortis elementum nibh
              tellus.
            </p>

            {/* LOCATION */}
            <div className="contact-card active">
              <div className="icon">
                <FaMapMarkerAlt />
              </div>

              <div className="info">
                <h3>Our Location</h3>
                <p>206, Industrial area England, 505551</p>
              </div>
            </div>

            {/* PHONE */}
            <div className="contact-card">
              <div className="icon">
                <FaPhoneAlt />
              </div>
              <div className="info">
                <h3>Phone</h3>
                <p>
                  <a href="tel:+015656234100">+01 56562 34100</a>
                </p>
                <p>
                  <a href="tel:+011234567890">+01 12345 67890</a>
                </p>
              </div>
            </div>

            {/* EMAIL */}
            <div className="contact-card">
              <div className="icon">
                <FaEnvelope />
              </div>
              <div className="info">
                <h3>Email</h3>
                <p>
                  <a href="mailto:sitecore@example.com">sitecore@example.com</a>
                </p>
                <p>
                  <a href="mailto:sale@example.com">sale@example.com</a>
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="contact-right">
            <h2>Contact Now</h2>
            <form>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <input type="text" placeholder="Phone" />
              <input type="text" placeholder="Address" />
              <textarea placeholder="Message"></textarea>
              <button type="submit">SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const FormFourteen = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    comment: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="FourteencommentBox">
      <div className="commentBoxInner">
        <div className="commentBoxHeading">
          <h4>Leave Comment</h4>
          <p>
            Your email address will not be published. Required fields are marked
            *
          </p>
        </div>

        <div className="commentBoxForm">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <div className="commentFormGroup">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="commentFormGroup">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="col-md-12">
                <div className="commentFormGroup">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="col-md-12">
                <div className="commentFormGroup">
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Write a Comment"
                    name="comment"
                    value={formData.comment}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
            </div>

            <button type="submit" className="btn medCommBtn Temp-read-more">
              <span>Send</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormOne;
export {
  FormTwo,
  FormThree,
  FormFour,
  FormFive,
  FormSeven,
  FormEight,
  FormNine,
  FormTen,
  FormEleven,
  FormTwelve,
  FormThirteen,
  FormFourteen,
};
