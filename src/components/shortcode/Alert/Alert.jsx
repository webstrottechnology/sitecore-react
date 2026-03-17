// Alert.jsx
import React from "react";
import "./Alert.scss";
import { useState } from "react";
import { alertDataOne } from "./AlertData";
import { alertDataTwo } from "./AlertData";
import { alertDataThree } from "./AlertData";
import { alertDataFour } from "./AlertData";
import { alertDataFive } from "./AlertData";
import { alertDataSix } from "./AlertData";
import { alertDataEight } from "./AlertData";
import { IoClose } from "react-icons/io5";

// React Icons
import { FiCheckCircle, FiAlertTriangle, FiXCircle } from "react-icons/fi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Alert from "react-bootstrap/Alert";
import { AboutBannerBreadCrumb } from "../breadcrumb/Breadcrumb";
import sitecoreBg from "../../../assets/images/sitecoreBreadCrumb_bg_img.png";

const AlertOne = () => {
  const [alerts, setAlerts] = useState(alertDataOne);

  const handleClose = (id) => {
    setAlerts((prev) => prev.filter((alert) => alert.id !== id));
  };

  return (
    <>
      <AboutBannerBreadCrumb title="Alert" bgImage={sitecoreBg} />
      <div className="alert-wrapper-one">
        {alerts.map((item) => (
          <div key={item.id} className={`alert alert--${item.type}`}>
            <span className="alert_icon">
              {item.type === "success" && "✔"}
              {item.type === "error" && "✖"}
              {item.type === "warning" && "⚠"}
              {item.type === "info" && "ℹ"}
            </span>

            <div className="alert_content">
              <h4>{item.title}</h4>
              <p>{item.message}</p>
            </div>

            {/* Cancel Button */}
            <button
              className="alert_close"
              onClick={() => handleClose(item.id)}
              aria-label="Close alert"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

const AlertTwo = () => {
  const [alerts, setAlerts] = useState(alertDataTwo);

  const closeAlert = (id) => {
    setAlerts(alerts.filter((item) => item.id !== id));
  };

  return (
    <section className="alert-wrapper-two">
      {alerts.map((item) => (
        <article key={item.id} className={`g-alert g-alert--${item.type}`}>
          <div className="g-alert_body">
            <h5>{item.title}</h5>
            <p>{item.desc}</p>
          </div>

          <button
            className="g-alert_close"
            onClick={() => closeAlert(item.id)}
            aria-label="Close"
          >
            ✕
          </button>
        </article>
      ))}
    </section>
  );
};

const AlertThree = () => {
  const [alerts, setAlerts] = useState(alertDataThree);

  const removeAlert = (id) => {
    setAlerts((prev) => prev.filter((a) => a.id !== id));
  };

  return (
    <div className="alert-wrapper-three">
      {alerts.map((item) => (
        <div key={item.id} className={`smart-alert ${item.type}`}>
          <div className="smart-alert_icon">
            {item.type === "success" && "✓"}
            {item.type === "error" && "✕"}
            {item.type === "warning" && "!"}
          </div>

          <div className="smart-alert_content">
            <h4>{item.title}</h4>
            <p>{item.message}</p>

            <button className="smart-alert_action">{item.action}</button>
          </div>

          <button
            className="smart-alert_close"
            onClick={() => removeAlert(item.id)}
          >
            ✖
          </button>
        </div>
      ))}
    </div>
  );
};

const AlertFour = () => {
  const [alerts, setAlerts] = useState(alertDataFour);

  const handleClose = (id) => {
    setAlerts(alerts.filter((alert) => alert.id !== id));
  };

  return (
    <div className="alert-wrapper-Four">
      {alerts.map((alert) => (
        <div
          key={alert.id}
          className={`alert alert-${alert.type} elegant-alert`}
          role="alert"
        >
          <div className="alert-content">
            <span className="alert-icon">{alert.icon}</span>

            <div className="alert-text">
              <h6>{alert.title}</h6>
              <p>{alert.message}</p>
            </div>
          </div>

          <button
            type="button"
            className="close-btn"
            onClick={() => handleClose(alert.id)}
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
};

const AlertFive = () => {
  const [alerts, setAlerts] = useState(alertDataFive);

  const closeAlert = (id) => {
    setAlerts(alerts.filter((item) => item.id !== id));
  };

  return (
    <div className="alert-wrapper-Five">
      {alerts.map((item) => (
        <div key={item.id} className={`alert-box ${item.type}`}>
          <div className="icon">{item.icon}</div>

          <div className="content">
            <h4>{item.title}</h4>
            <p>{item.message}</p>
          </div>

          <button className="close" onClick={() => closeAlert(item.id)}>
            ✕
          </button>
        </div>
      ))}
    </div>
  );
};

const iconMap = {
  success: <FiCheckCircle />,
  pending: <AiOutlineLoading3Quarters />,
  warning: <FiAlertTriangle />,
  error: <FiXCircle />,
};

const AlertSix = () => {
  const [alerts, setAlerts] = useState(alertDataSix);

  const closeAlert = (id) => {
    setAlerts((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="alert-wrapper-Six">
      {alerts.map((item) => (
        <div key={item.id} className={`status-alert ${item.type}`}>
          <div className="left-border" />

          <div className="icon">{iconMap[item.type]}</div>

          <div className="content">
            <h4>{item.title}</h4>
            <p>{item.message}</p>

            <div className="meta">
              <span>{item.time}</span>

              {item.linkText && <a href={item.linkUrl}>{item.linkText}</a>}
            </div>
          </div>

          <button className="close-btn" onClick={() => closeAlert(item.id)}>
            ×
          </button>
        </div>
      ))}
    </div>
  );
};

const AlertSeven = () => {
  return (
    <div className="alert-wrapper-Seven">
      <div className="container">
        <div className="inner_main_box">
          <div
            className="alert alert-info alert-dismissible fade show"
            role="alert"
          >
            Information is saved.
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
          <div
            className="alert alert-danger alert-dismissible fade show"
            role="alert"
          >
            Data is not saved.
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
          <div
            className="alert alert-warning alert-dismissible fade show"
            role="alert"
          >
            Your Session will expire in 5 minutes.
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
          <div
            className="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            All changes are saved successfully.
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};

const AlertEight = () => {
  const [alerts, setAlerts] = useState(alertDataEight);

  const removeAlert = (id) => {
    setAlerts(alerts.filter((alert) => alert.id !== id));
  };

  return (
    <div className="alert-wrapper-Eight">
      {alerts.map((alert) => {
        const Icon = alert.icon;

        return (
          <div key={alert.id} className={`alert-card ${alert.type}`}>
            <div className="alert-icon">
              <Icon />
            </div>

            <div className="alert-content">
              <h4>{alert.title}</h4>
              <p>{alert.message}</p>
            </div>

            <button
              className="alert-close"
              onClick={() => removeAlert(alert.id)}
            >
              <IoClose />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default AlertOne;
export {
  AlertTwo,
  AlertThree,
  AlertFour,
  AlertFive,
  AlertSix,
  AlertSeven,
  AlertEight,
};
