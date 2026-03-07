import React, { useEffect, useRef, useState } from "react";
import {
  FaArrowUp,
  FaArrowRight,
  FaArrowDown,
  FaArrowLeft,

} from "react-icons/fa";
import "./Counter.scss";

import { counterDataFive, counterDataFour, counterDataOne, counterdataSix, counterDataThree, counterDataTwo, counterEightData, counterSevenData } from "./CounterData";



// ++++++++++++++counter one section Start ++++++++++++++++++ 
const CounterBox = ({ icon, title, value, color }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const step = Math.ceil(value / (duration / 20));

    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        start = value;
        clearInterval(timer);
      }
      setCount(start);
    }, 20);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="counter-item">
      <div className="icon" style={{ color }}>
        {icon}
      </div>
      <h4>{title}</h4>
      <h2>{count}</h2>
    </div>
  );
};

const CounterOne = () => {
  return (
    <div className="counterOne">
      <div className="container">
        <div className="title-box">
          <h2>Counters</h2>
        </div>
        <div className="counter-grid">
          {counterDataOne.map((item, i) => (
            <CounterBox key={i} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
// ++++++++++++++ counter one section End ++++++++++++++++++ 

// ++++++++++++++ counter Two section start ++++++++++++++++++ 
const CounterCard = ({ value, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1200;
    const step = Math.ceil(value / (duration / 20));

    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        start = value;
        clearInterval(timer);
      }
      setCount(start);
    }, 20);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="counterTwo-card">
      <h2>{count}</h2>
      <p>{label}</p>
    </div>
  );
};

const CounterTwo = () => {
  return (
    <div className="counterTwo">
      <div className="container">
        <div className="counterTwo-grid">
          {counterDataTwo.map((item, i) => (
            <CounterCard key={i} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
// ++++++++++++++ counter Two section end ++++++++++++++++++ 

// ++++++++++++++ counter Three section start ++++++++++++++++++ 
const CounterItem = ({ icon, value, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1400;
    const step = Math.ceil(value / (duration / 20));

    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        start = value;
        clearInterval(timer);
      }
      setCount(start);
    }, 20);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="counterThree-item">
      <div className="icon">{icon}</div>
      <h3>{count}</h3>
      <p>{label}</p>
    </div>
  );
};

const CounterThree = () => {
  return (
    <div className="counterThree">
      <div className="counterThree-heading">
        <h2>Projects statistics</h2>
      </div>

      <div className="counterThree-grid">
        {counterDataThree.map((item, i) => (
          <CounterItem key={i} {...item} />
        ))}
      </div>
    </div>
  );
};
// ++++++++++++++ counter Three section end ++++++++++++++++++ 

// ++++++++++++++ counter Four section start ++++++++++++++++++ 
const CounterItem2 = ({ icon, value, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1400;
    const step = Math.ceil(value / (duration / 20));

    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        start = value;
        clearInterval(timer);
      }
      setCount(start);
    }, 20);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="counterFour-item">
      <div className="icon">{icon}</div>
      <div className="content-box">
        <h3>{count}</h3>
        <p>{label}</p>
      </div>
    </div>
  );
};

const CounterFour = () => {
  return (
    <div className="counterFour">
      <div className="container counterFour-wrapper">
        {/* Left content */}
        <div className="counterFour-content">
          <h2>Consulting Successes</h2>
          <p>
            Sample text. Click to select the text box. Click again or double
            click to start editing the text. Sit amet porttitor eget dolor
            morbi non arcu risus quis.
          </p>
        </div>

        {/* Right counters */}
        <div className="counterFour-grid">
          {counterDataFour.map((item, i) => (
            <CounterItem2 key={i} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
// ++++++++++++++ counter Four section end ++++++++++++++++++ 

// ++++++++++++++ counter Five section start ++++++++++++++++++ 
const CounterItem3 = ({ value, label, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const speed = value / 60;

    const timer = setInterval(() => {
      start += speed;
      if (start >= value) {
        start = value;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 20);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="counterFive-card">
      <h3>
        {count}
        {suffix}
      </h3>
      <p>{label}</p>
    </div>
  );
};

const CounterFive = () => {
  return (
    <div className="counterFive">
      <h2 className="title">Modern Counter  </h2>
      <div className="counterFive-wrapper">
        {/* Left Content */}
        <div className="counterFive-content">
          <h3>
            Our Success Is Defined
            By The Impact We Create.
          </h3>
          <p>
            Ever wondered how some graphic designers always manage to produce
            beautiful looking designs for their brochures, website designs,
            logo designs? Talent…yes.
          </p>
        </div>

        {/* Right Counters */}
        <div className="counterFive-grid">
          {counterDataFive.map((item, i) => (
            <CounterItem3 key={i} {...item} />
          ))}

          {/* Center arrows */}
          <div className="center-arrows">
            <span className="tl"><FaArrowUp style={{ transform: "rotate(-45deg)" }} /></span>
            <span className="tr"><FaArrowRight style={{ transform: "rotate(-45deg)" }} /></span>
            <span className="bl"><FaArrowLeft style={{ transform: "rotate(-45deg)" }} /></span>
            <span className="br"><FaArrowDown style={{ transform: "rotate(-45deg)" }} /></span>
          </div>


        </div>
      </div>
    </div>
  );
};
// ++++++++++++++ counter Five section end ++++++++++++++++++ 

// ++++++++++++++ counter six section Start ++++++++++++++++++ 
const CounterSix = () => {
  return (
    <div className="counterSix">
      <div className="counterSix-wrapper">
        {counterdataSix.map((item, index) => (
          <CounterItem6 key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

/* ===== COUNTER ITEM ===== */
const CounterItem6 = ({ item }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const timer = setInterval(() => {
      start++;
      setCount(start);

      if (start === item.value) {
        clearInterval(timer);
      }
    }, 10);

    return () => clearInterval(timer);
  }, [item.value]);

  return (
    <div className="counterSix-item">
      <div className={`icon ${item.bg}`}>{item.icon}</div>
      <div className="content">
        <h3>{count}+</h3>
        <p>{item.label}</p>
      </div>
    </div>
  );
};
// ++++++++++++++ counter six section end ++++++++++++++++++ 

// ++++++++++++++ counter seven section start ++++++++++++++++++ 

const CounterItem7 = ({ number, label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          let start = 0;
          const duration = 1500;
          const increment = number / (duration / 16);

          const counter = setInterval(() => {
            start += increment;
            if (start >= number) {
              setCount(number);
              clearInterval(counter);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [number]);

  return (
    <div className="counter-box" ref={ref}>
      <h2>
        {count}
        <span>+</span>
      </h2>
      <p>{label}</p>
    </div>
  );
};

const CounterSeven = () => {
  return (
    <div className="counter-seven">
      <h3 className="counter-title">Counter Style 03</h3>

      <div className="counter-wrapper">
        {counterSevenData.map((item, index) => (
          <CounterItem7
            key={index}
            number={item.number}
            label={item.label}
          />
        ))}
      </div>
    </div>
  );
};

// ++++++++++++++ counter seven section end ++++++++++++++++++ 

// ++++++++++++++ counter Eight section start  ++++++++++++++++++ 
const CounterNumber = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const interval = setInterval(() => {
      start += Math.ceil(value / 40);
      if (start >= value) {
        start = value;
        clearInterval(interval);
      }
      setCount(start);
    }, 30);

    return () => clearInterval(interval);
  }, [value]);

  return <>{count}+</>;
};

const CounterEight = () => {
  return (
    <div className="counterEight">
      <div className="counterEight-wrapper">
        {counterEightData.map((item, index) => (
          <div className="counterEight-item" key={index}>
            <div className="icon">{item.icon}</div>
            <h3>
              <CounterNumber value={item.value} />
            </h3>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
// ++++++++++++++ counter Eight section end ++++++++++++++++++ 

export default CounterOne;
export { CounterTwo, CounterThree, CounterFour, CounterFive, CounterSix, CounterSeven, CounterEight }
