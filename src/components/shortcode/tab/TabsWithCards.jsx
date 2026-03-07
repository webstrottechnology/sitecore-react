import { useState } from "react";
import Card from "./Card";
import cardData from "./cardData";
import "./tabs.css";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("home");

  // ⭐ safe data fallback
  const activeData = cardData?.[activeTab] || [];

  return (
    <div className="tabs-wrapper">
      {/* Tabs */}
      <div className="tabs">
        {["home", "profile", "contact"].map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? "active" : ""}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="cards">
        {activeData.length > 0 ? (
          activeData.map((item) => (
            <Card key={item.id} item={item} />
          ))
        ) : (
          <p className="empty-text">No content available</p>
        )}
      </div>
    </div>
  );
};

export default Tabs;
