import React, { useEffect, useRef } from "react";
import EasyPieChart from "easy-pie-chart";
import "./Progress.scss";
import { dataEight, dataFive, dataFour, dataOne, dataSeven, dataSix, dataThree, dataTwo } from "./ProgressData";



// progress bar one start
const ProgressColumn = () => {
    const bars = useRef([]);

    useEffect(() => {
        bars.current.forEach((bar) => {
            if (bar) {
                bar.style.width = bar.dataset.value + "%";
            }
        });
    }, []);

    return (
        <div className="progress-wrapper">
            {dataOne.map((item, i) => (
                <div className="progress-item" key={i}>
                    <span className="progress-title">{item.title}</span>

                    <div className="progress-track">
                        <div
                            className="progress-fill"
                            data-value={item.value}
                            ref={(el) => (bars.current[i] = el)}
                        >
                            <span className="progress-percent">{item.value}%</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

const ProgressOne = () => {
    return (
        <div className="progressOne">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <ProgressColumn />
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <ProgressColumn />
                    </div>
                </div>
            </div>
        </div>
    );
};
// progress bar one end

// progress bar two start
const ProgressTwoColumn = () => {
    useEffect(() => {
        document.querySelectorAll(".progress-fill").forEach((bar) => {
            const value = bar.getAttribute("data-value");
            bar.style.width = value + "%";
        });
    }, []);

    return (
        <div className="progressTwo-section">
            {dataTwo.map((item, i) => (
                <div className="progress-item" key={i}>
                    <div className="progress-track">
                        <div
                            className="progress-fill"
                            data-value={item.value}
                        >
                            <span className="progress-label">{item.title}</span>
                            <span className="progress-percent">{item.value}%</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

const ProgressTwo = () => {
    return (
        <div className="progresTwo-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <ProgressTwoColumn />
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <ProgressTwoColumn />
                    </div>
                </div>
            </div>
        </div>
    );
};
// progress bar two end

// progress bar three start
const ProgressThreeColumn = () => {
    const barsRef = useRef([]);

    useEffect(() => {
        barsRef.current.forEach((bar) => {
            if (bar) {
                const value = bar.dataset.value;
                bar.style.width = value + "%";
            }
        });
    }, []);

    return (
        <div className="progressThree-section">
            {dataThree.map((item, i) => (
                <div className="progressThree-item" key={i}>
                    <div className="progressThree-head">
                        <span>{item.title}</span>
                        {/* <span className="percent">{item.value}%</span> */}
                    </div>

                    <div className="progressThree-bar">
                        <div
                            ref={(el) => (barsRef.current[i] = el)}
                            className={`progressThree-fill ${item.color}`}
                            data-value={item.value}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

const ProgressThree = () => {
    return (
        <div className="ProgressThree-wrapper">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <ProgressThreeColumn />
                    </div>
                    <div className="col-lg-6">
                        <ProgressThreeColumn />
                    </div>
                </div>
            </div>
        </div>
    );
};
// progress bar three end

// progress bar four start
const ProgressFourColumn = () => {
    useEffect(() => {
        const bars = document.querySelectorAll(".fill");
        bars.forEach(bar => {
            bar.style.width = bar.dataset.value + "%";
        });
    }, []);

    return (
        <div className="progressFour-section">
            {dataFour.map((item, index) => (
                <div className="progressFour-item" key={index}>
                    <div className="bar">
                        <div className="fill" data-value={item.value}>
                            <span className="label">
                                {item.icon}
                                {item.title}
                            </span>
                        </div>
                    </div>

                </div>
            ))}
        </div>
    );
};

const ProgressFour = () => {
    return (
        <div className="progressFour-wrapper">
            <div className="container">
                <div className="grid">
                    <ProgressFourColumn />
                    <ProgressFourColumn />
                </div>
            </div>
        </div>
    );
};
// progress bar four end

// progress bar five start
const ProgressFive = () => {
    const circleRefs = useRef([]);

    useEffect(() => {
        circleRefs.current.forEach((circle, i) => {
            const radius = 60;
            const circumference = 2 * Math.PI * radius;
            const offset =
                circumference - (dataFive[i].percent / 100) * circumference;
            circle.style.strokeDasharray = circumference;
            circle.style.strokeDashoffset = offset;
        });
    }, []);


    return (
        <div className="progressFive-wrapper">
            {dataFive.map((item, i) => (
                <div className="circle-card" key={i}>
                    <div className="circle-box">
                        <svg width="160" height="160">
                            <circle cx="80" cy="80" r="60" className="bg" />
                            <circle
                                cx="80"
                                cy="80"
                                r="60"
                                className="progress"
                                style={{ stroke: item.color }}
                                ref={(el) => (circleRefs.current[i] = el)}
                            />
                        </svg>

                        <div
                            className="center"
                            style={{ backgroundColor: item.color }}
                        >
                            {item.percent}%
                        </div>
                    </div>

                    <h4>{item.title}</h4>
                    <p>
                        Aliquet elit nulla sed massa. Ut cursus massa urnaaculis estieed.
                    </p>
                </div>
            ))}
        </div>
    );
};

// progress bar five end

// progress bar six start
const ProgressSix = () => {
    const circlesRef = useRef([]);

    useEffect(() => {
        circlesRef.current.forEach((circle, index) => {
            const percent = dataSix[index].percent;
            const radius = 55;
            const circumference = 2 * Math.PI * radius;

            const offset = circumference - (percent / 100) * circumference;
            circle.style.strokeDashoffset = offset;
        });
    }, []);

    return (
        <div className="progressSix-section">
            <div className="container">
                <div className="progressSix-cards">
                    {dataSix.map((item, i) => (
                        <div
                            className="card-box"
                            key={i}
                            style={{ backgroundColor: item.bg }}
                        >
                            <h3>{item.title}</h3>

                            <div className="circle-wrap">
                                <svg width="160" height="160">
                                    {/* background ring */}
                                    <circle
                                        cx="80"
                                        cy="80"
                                        r="55"
                                        className="circle-bg"
                                    />

                                    {/* progress ring */}
                                    <circle
                                        cx="80"
                                        cy="80"
                                        r="55"
                                        className="circle-progress"
                                        ref={(el) => (circlesRef.current[i] = el)}
                                    />
                                </svg>

                                <span className="percent">{item.percent}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
// progress bar six end

// progress bar seven start
const ProgressSeven = () => {
    const charts = useRef([]);

    useEffect(() => {
        charts.current.forEach((el) => {
            if (!el || el.dataset.init) return;

            el.dataset.init = "true";

            new EasyPieChart(el, {
                barColor: "#4285f4",
                trackColor: "#f2f2f2",
                scaleColor: false,
                lineWidth: 8,
                size: 150,
                lineCap: "round",
                animate: 2000
            });
        });
    }, []);

    return (
        <div className="progressSeven-section">
            <div className="container">
                <div className="row">
                    {dataSeven.map((item, i) => (
                        <div className="col-md-3 text-center" key={i}>
                            <div className="our-progress">
                                <div
                                    className="chart_one"
                                    data-percent={item.percent}
                                    ref={(el) => (charts.current[i] = el)}
                                >
                                    <span className="percent">{item.percent}%</span>
                                </div>

                                <h4>{item.title}</h4>
                                <p>
                                    Aliquet elit nulla sed massa. Ut cursus massa urnaaculis estieed.
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
// progress bar seven end

// progress bar eight start
const ProgressEight = () => {
  return (
    <div className="progressEight">
      <div className="container custom-container-lg">

        <h2 className="title">Areas of Expertise</h2>

        <div className="progress-grid">

          {dataEight.map((skill, index) => (

            <div className="progress-item" key={index}>

              <div className="progress-header">

                <h4>{skill.name}</h4>

                <span>{skill.percent}%</span>

              </div>

              <div className="progress-bar">

                <div
                  className="progress-fill"
                  style={{ width: `${skill.percent}%` }}
                ></div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </div>
  );
};
// progress bar eight end

export default ProgressOne;
export { ProgressTwo, ProgressThree, ProgressFour, ProgressFive, ProgressSix, ProgressSeven, ProgressEight };
