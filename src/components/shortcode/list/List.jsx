import React, { useState } from "react";
import "./List.scss";
import {
  listData,
  listData2,
  listData3,
  listData4,
  listData5,
  contactTypes,
  listData6,
  listData7,
  listData8,
  listData9,
  listData10,
} from "./listData";
import { AboutBannerBreadCrumb } from "../breadcrumb/Breadcrumb";
import sitecoreBg from "../../../assets/images/sitecoreBreadCrumb_bg_img.png";
/* ---------------- LIST ONE ---------------- */

const List = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleLinkClick = (e) => {
    e.stopPropagation();
    setActiveIndex(null);
  };

  return (
    <>
      <AboutBannerBreadCrumb title="List" bgImage={sitecoreBg} />
      <div className="bg-wrapper">
        <div className="list_wrapper">
          <div className="container">
            <h2 className="list_title">THE WHITE STRIPES</h2>
            <ul>
              {listData.map((item, index) => (
                <li
                  key={index}
                  className={activeIndex === index ? "active" : ""}
                  onClick={() => handleItemClick(index)}
                >
                  {item}
                  {activeIndex === index && (
                    <a href="#" onClick={handleLinkClick}>
                      Link
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

/* ---------------- LIST TWO ---------------- */

const List2 = () => {
  return (
    <div className="list-wrapper2">
      <div className="container">
        <h2 className="list_title">A day in my 'sleepy' life 😴</h2>

        <div className="timeline">
          {listData2.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="dot"></div>
              <div className="content">
                <span className="time">{item.time}</span>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ---------------- LIST THREE ---------------- */

const List3 = () => {
  return (
    <div className="list_wrapper3">
      <div className="container">
        <div className="wrapper3_content">
          <div className="list_title3">
            <h2 className="list_title">TOP 100 MÚSICAS</h2>
            <p className="subtitle">Pelo critério do meu gosto musical</p>
          </div>

          <ul className="music-list">
            {listData3.map((item) => (
              <li key={item.rank} className="music-item">
                <span className="rank">{item.rank}</span>

                <div className="info">
                  <h3>{item.title}</h3>
                  <span>{item.artist}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

/* ---------------- LIST FOUR ---------------- */

const List4 = () => {
  return (
    <div className="list_wrapper4">
      <div className="container">
        <div className="skills-container">
          <div className="header list_title">
            <h2>Learn new skills</h2>
            <a href="#">View all</a>
          </div>

          <ul className="skills-list">
            {listData4.map((item, index) => (
              <li className="skill-card" key={index}>
                <span
                  className="color-bar"
                  style={{ backgroundColor: item.color }}
                ></span>

                <div className="content">
                  <h3>{item.title}</h3>
                  <p>{item.courses}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

/* ---------------- LIST FIVE ---------------- */

const List5 = () => {
  const [contacts, setContacts] = useState(listData5);
  const [selectedContact, setSelectedContact] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleSelect = (contact) => {
    setSelectedContact({ ...contact });
    setShowForm(true);
  };

  const handleNewContact = () => {
    setSelectedContact({
      name: "",
      email: "",
      phone: "",
      notes: "",
      type: contactTypes[0],
    });
    setShowForm(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedContact((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    if (selectedContact.id) {
      setContacts((prev) =>
        prev.map((c) => (c.id === selectedContact.id ? selectedContact : c)),
      );
    } else {
      setContacts((prev) => [
        ...prev,
        { ...selectedContact, id: prev.length + 1 },
      ]);
    }

    setSelectedContact(null);
    setShowForm(false);
  };

  return (
    <div className="list_wrapper5">
      <div className="container">
        <div className="board">
          {/* LEFT */}
          <div className="contact-list">
            <div className="header">
              <h2 className="">Contact List</h2>
              <button onClick={handleNewContact}>+ New Contact</button>
            </div>

            {contacts.map((item) => (
              <div
                key={item.id}
                className={`contact-item ${
                  selectedContact?.id === item.id ? "active" : ""
                }`}
                onClick={() => handleSelect(item)}
              >
                {item.name}
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div className="contact-details">
            <h2>Contact Details</h2>

            {showForm ? (
              <div className="form">
                <label>Name</label>
                <input
                  name="name"
                  value={selectedContact.name}
                  onChange={handleChange}
                />

                <label>Email</label>
                <input
                  name="email"
                  value={selectedContact.email}
                  onChange={handleChange}
                />

                <label>Phone</label>
                <input
                  name="phone"
                  value={selectedContact.phone}
                  onChange={handleChange}
                />

                <label>Notes</label>
                <textarea
                  name="notes"
                  value={selectedContact.notes}
                  onChange={handleChange}
                />

                <label>Type</label>
                <select
                  name="type"
                  value={selectedContact.type}
                  onChange={handleChange}
                >
                  {contactTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                <div className="save-button">
                  <a href="#" className="save-btn" onClick={handleSave}>
                    Save Contact
                  </a>
                </div>
              </div>
            ) : (
              <p>Select a contact to view details</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------------- LIST SIX ---------------- */

const List6 = () => {
  return (
    <div className="list_wrapper6">
      <div className="container">
        <div className="career-header list_title">
          <h2 className="list_title">Career Opportunities</h2>
          <p>Discover your next role with leading companies</p>
        </div>

        <div className="career-grid">
          {listData6.map((company, index) => (
            <div className="career-card" key={index}>
              <div className="card-header">
                <span className="icon">{company.icon}</span>
                <h3>{company.company}</h3>
              </div>

              <ul className="role-list">
                {company.roles.map((role, i) => (
                  <li key={i}>
                    <span>{role.title}</span>
                    <span className="count">{role.count}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ---------------- LIST SEVEN ---------------- */

const List7 = () => {
  return (
    <div className="list_wrapper7">
      <div className="container">
        <h2 className="list_title">Designed for You</h2>

        <ul className="list7">
          {listData7.map((item, index) => (
            <li className="list7_item" key={index}>
              <span className="icon">✓</span>
              <span className="text">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

/* ---------------- LIST EIGHT ---------------- */

const List8 = () => {
  return (
    <div className="list_wrapper8">
      <div className="container">
        <h2 className="list_title">List style 08</h2>

        <ul className="menu-list">
          {listData8.map((item, index) => (
            <li className="menu-item" key={index}>
              <div className="left">
                <h4>
                  {item.title}
                  {item.tag && <span className="tag">{item.tag}</span>}
                </h4>
                <p>{item.desc}</p>
              </div>

              <div className="price">{item.price}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

/* ---------------- LIST NINE ---------------- */

const List9 = () => {
  return (
    <div className="list_wrapper9">
      <div className="container">
        <div className="ux-card">
          <div className="top-bar"></div>

          <div className="content">
            <h3 className="title">UX DESIGN</h3>
            <span className="underline"></span>

            <ul className="ux-list">
              {listData9.map((item, index) => (
                <li
                  key={index}
                  className={`ux-item ${index === 0 ? "active" : ""}`}
                >
                  <span className="text">{item}</span>
                  <span className="arrow">›</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------------- LIST TEN ---------------- */

const List10 = () => {
  return (
    <div className="list_wrapper10">
      <div className="container">
        <div className="leaderboard-card">
          <div className="leaderboard-header">
            <span className="icon">🏆</span>
            <h3>FORBES</h3>
            <p>LEADERBOARD</p>
          </div>

          <ul className="leaderboard-list">
            {listData10.map((item, index) => (
              <li className="leader-item" key={index}>
                <div className="profile">
                  <img src={item.img} alt={item.name} />
                  <span className="name">{item.name}</span>
                </div>

                <span className="amount">{item.amount}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default List;
export { List2, List3, List4, List5, List6, List7, List8, List9, List10 };
