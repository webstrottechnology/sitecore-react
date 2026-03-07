import React from "react";
import {
  socialData,
  socialData2,
  socialData3,
  socialData4,
  socialData5,
  socialData6,
  socialData7,
  socialData8,
  socialData9,
  socialData10,
} from "./socialData";
import "./SocialIcons.scss";

/* ---------------- SOCIAL ICONS ONE ---------------- */

const SocialIcons = () => {
  return (
    <div className="social-wrapper">
      {socialData.map((item) => {
        const Icon = item.icon;

        return (
          <a
            key={item.id}
            href={item.link}
            className="social-icon"
            style={{
              "--brand-color": item.color,
            }}
          >
            <Icon className="icon" />
          </a>
        );
      })}
    </div>
  );
};

/* ---------------- SOCIAL ICONS TWO ---------------- */

const SocialIcons2 = () => {
  return (
    <div className="social2-wrapper">
      <ul className="social2-list">
        {socialData2.slice(0, 4).map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.id}>
              <a href={item.link}>
                <Icon />
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social2-list mt">
        {socialData2.slice(4, 8).map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.id}>
              <a href={item.link}>
                <Icon />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

/* ---------------- SOCIAL ICONS THREE ---------------- */

const SocialIcons3 = () => {
  return (
    <div className="social3-wrapper">
      {socialData3.map(({ id, icon: Icon, color }) => (
        <a
          key={id}
          href="#"
          className={`bg-ico ${color === "gradient" ? "instagram-ico" : ""}`}
          style={
            color === "gradient"
              ? {}
              : { "--brand-color": color, "--brand-color-light": color + "80" }
          }
        >
          <Icon
            className={`social ${color === "gradient" ? "instagram" : ""} fa-3x`}
          />
        </a>
      ))}
    </div>
  );
};

/* ---------------- SOCIAL ICONS FOUR ---------------- */

const SocialIcons4 = () => {
  return (
    <div className="social4-wrapper">
      {socialData4.map(({ id, icon: Icon, color }) => (
        <a
          key={id}
          href="#"
          className={`bg-ico ${color === "gradient" ? "instagram-ico" : ""}`}
          style={
            color === "gradient"
              ? {}
              : { "--brand-color": color, "--brand-color-light": color + "80" }
          }
        >
          <Icon
            className={`social ${color === "gradient" ? "instagram" : ""} fa-3x`}
          />
        </a>
      ))}
    </div>
  );
};

/* ---------------- SOCIAL ICONS FIVE ---------------- */

const SocialIcons5 = () => {
  return (
    <div className="social5-wrapper">
      <ul className="social5-list">
        {socialData5.map(
          ({ id, icon: Icon, color, sideColor, bottomColor, link }) => (
            <li key={id}>
              <a
                href={link}
                className={color === "gradient" ? "instagram" : ""}
                style={
                  color === "gradient"
                    ? {}
                    : {
                        "--main": color,
                        "--side": sideColor,
                        "--bottom": bottomColor,
                      }
                }
              >
                <Icon />
              </a>
            </li>
          ),
        )}
      </ul>
    </div>
  );
};

/* ---------------- SOCIAL ICONS SIX ---------------- */

const SocialIcons6 = () => {
  return (
    <div className="social6-container">
      <div className="social6-icons">
        {socialData6.map(({ id, icon: Icon, color, link }) => (
          <a
            key={id}
            href={link}
            style={{ "--brand": color }}
            className="social6-icon"
          >
            <Icon />
          </a>
        ))}
      </div>
    </div>
  );
};

/* ---------------- SOCIAL ICONS SEVEN ---------------- */

const SocialIcons7 = () => {
  return (
    <div className="social7-wrapper">
      {socialData7.map(({ id, icon: Icon, color, link }) => (
        <a
          key={id}
          href={link}
          className="social7-icon"
          style={{ "--brand-color": color }}
        >
          <span className="fill"></span>
          <Icon />
        </a>
      ))}
    </div>
  );
};

/* ---------------- SOCIAL ICONS EIGHT ---------------- */

const SocialIcons8 = () => {
  return (
    <div className="social_wrapper8 ">
      <div className="sticky-icon">
        {socialData8.map((item, index) => {
          const Icon = item.icon;

          return (
            <a
              key={index}
              href={item.url}
              className={item.className}
              target="_blank"
              rel="noreferrer"
            >
              <i>
                <Icon size={18} />
              </i>
              {item.name}
            </a>
          );
        })}
      </div>
    </div>
  );
};

/* ---------------- SOCIAL ICONS NINE ---------------- */

const SocialIcons9 = () => {
  return (
    <nav className="social_wrapper9">
      <ul>
        {socialData9.map((item) => {
          const Icon = item.icon;

          return (
            <li key={item.id} className={item.className}>
              <a href={item.link} target="_blank" rel="noreferrer">
                {item.name}
                <i>
                  <Icon />
                </i>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

/* ---------------- SOCIAL ICONS TEN ---------------- */

const SocialIcons10 = () => {
  return (
    <div className="social_wrapper10">
      <ul className="social-menu10">
        {socialData10.map((item) => {
          const Icon = item.icon;

          return (
            <li
              key={item.id}
              className={`social-btn10 ${item.className}`}
              data-tooltip={item.name}
            >
              <a href={item.link} target="_blank" rel="noreferrer">
                <Icon size={26} />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SocialIcons;
export {
  SocialIcons2,
  SocialIcons3,
  SocialIcons4,
  SocialIcons5,
  SocialIcons6,
  SocialIcons7,
  SocialIcons8,
  SocialIcons9,
  SocialIcons10,
};
