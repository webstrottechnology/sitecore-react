
import { FiEye } from "react-icons/fi";
import { MdOutlineDesktopWindows } from "react-icons/md";
import { PiBellLight } from "react-icons/pi";
import { VscGraphScatter } from "react-icons/vsc";
import alertVideo from "../../../assets/video/video_01.mp4";


/* ---------------- ACCORDION DATA ONE ---------------- */
export const data = [
  {
    title: "When and how it should be used?",
    content: (
      <>
        <h4>Show/Hide operation</h4>
        <p>
          An accordion always contains the category title, an expanded and a
          collapsed state, an icon indicating expansion, and spacing.
        </p>

        <h4>Tabbed interface</h4>
        <p>A list of items where exactly one item is expanded into a panel.</p>

        <a href="#" className="read-more-btn">Read more</a>
      </>
    ),
  },
  {
    title: "What’s an accordion?",
    content: (
      <>
        <p>
          An accordion is a UI component that allows users to expand and collapse
          sections of content.
        </p>
      </>
    ),
  },
  {
    title:
      "What if the user clicks on a collapsed card while another card is open?",
    content: (
      <>
        <p>
          The previously opened card collapses and the new one expands.
        </p>
      </>
    ),
  },
  {
    title: "How to choose an icon to indicate expansion?",
    content: (
      <>
        <p>
          Use clear icons like plus/minus or chevrons to indicate expand and
          collapse states.
        </p>
      </>
    ),
  },
];

/* ---------------- ACCORDION DATA TWO ---------------- */

export const dataTwo = [
  {
    id: 1,
    question: "What is ATS and why does it matter?",
    answer:
      "ATS stands for Applicant Tracking System — software used by companies to filter resumes."
  },
  {
    id: 2,
    question: "What happens after 7 days on the free plan?",
    answer:
      "After 7 days, you can upgrade to a paid plan to continue using all features."
  },
  {
    id: 3,
    question: "Can I use my own domain name?",
    answer: "Yes, you can connect and use your own custom domain."
  },
  {
    id: 4,
    question: "Is the payment one-time or monthly?",
    answer: "Payments are monthly with the flexibility to cancel anytime."
  },
  {
    id: 5,
    question: "Will I need to code or design anything?",
    answer: "No coding or design skills are required. Everything is ready to use."
  }
];

/* ---------------- ACCORDION DATA THREE ---------------- */

export const dataThree = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, debit cards, and selected online payment methods."
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately."
  },
  {
    question: "Is there a refund policy?",
    answer:
      "Yes, we offer a refund within a specific time period based on our policy."
  },
  {
    question: "Is it possible to modify my subscription later?",
    answer:
      "Absolutely! You can modify your subscription from your account dashboard."
  },
  {
    question: "What are the options for changing my IELTS test date?",
    answer:
      "You can reschedule your test date depending on availability and test center rules."
  }
];

/* ---------------- ACCORDION DATA FOUR ---------------- */
export const dataFour = [
  {
    title: "Social Media Management",
    description:
      "Manage and optimize your social media presence with tailored strategies that boost engagement and brand awareness.",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    link: "Book Consult",
  },
  {
    title: "Content Marketing & SEO",
    description:
      "Manage and optimize your social media presence with tailored strategies that boost engagement and brand awareness.",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    link: "Book Consult",
  },
  {
    title: "Email Marketing Campaigns",
    description:
      "Manage and optimize your social media presence with tailored strategies that boost engagement and brand awareness.",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    link: "Book Consult",
  },
  {
    title: "Paid Advertising Solutions",
    description:
      "Manage and optimize your social media presence with tailored strategies that boost engagement and brand awareness.",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    link: "Book Consult",
  },
  {
    title: "Analytics & Performance Review",
    description:
      "Manage and optimize your social media presence with tailored strategies that boost engagement and brand awareness.",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    link: "Book Consult",
  },
];


/* ---------------- ACCORDION DATA FIVE ---------------- */
export const dataFive = [
  {
    title: "Views",
    desc: "Save time by creating and saving filtered views",
    para: "Views allow you to organize, filter, and customize data to match your specific needs. By saving preferred configurations, you can quickly access relevant information, reduce repetitive tasks, improve productivity, and gain clearer insights into system activity, enabling faster analysis, better monitoring, and more informed decision-making.",
    icon: <FiEye />,
    video: alertVideo,
  },
  {
    title: "Alerts",
    desc: "Whether it’s system outage or increase in activity, stay informed using integrations like Slack, PagerDuty or APIs.",
    icon: <PiBellLight />,
    para: "Views allow you to organize, filter, and customize data to match your specific needs. By saving preferred configurations, you can quickly access relevant information, reduce repetitive tasks, improve productivity, and gain clearer insights into system activity, enabling faster analysis, better monitoring, and more informed decision-making.",
    video: alertVideo, // 👈 video added
  },
  {
    title: "Boards & Graphs",
    desc: "Identify trends in your system’s activity",
    icon: <VscGraphScatter />,
    para: "Boards and Graphs present system data in a clear, visual format that makes trends and patterns easy to understand. They help teams analyze performance, track metrics over time, compare results, and identify issues quickly, enabling smarter decisions, better planning, and improved overall system monitoring efficiency.",
    video: alertVideo,
  },
  {
    title: "Screen",
    desc: "Display daily log activity from all your systems",
    icon: <MdOutlineDesktopWindows />,
    para: "Screen provides a real-time display of daily log activity from all connected systems in one unified view. It helps teams monitor operations continuously, spot anomalies instantly, and maintain visibility across environments, improving response times, operational awareness, and overall control of system performance and reliability.",
    video: alertVideo,
  },
];


/* ---------------- ACCORDION DATA SIX ---------------- */

export const dataSix = [
  {
    question: "What exactly does this platform do?",
    answer:
      "Our platform helps you create ATS-optimized resumes and manage job applications efficiently."
  },
  {
    question: "What is ATS and why does it matter?",
    answer:
      "ATS stands for Applicant Tracking System. Companies use it to filter resumes. If your resume isn't optimized, recruiters may never see it."
  },
  {
    question: "Is it really free to start?",
    answer:
      "Yes, you can start with our free plan without any payment details."
  },
  {
    question: "Will I need to code or design anything?",
    answer:
      "No coding or design skills are required. Everything is drag and drop."
  },
  {
    question: "What happens after 7 days on the free plan?",
    answer:
      "You can upgrade or continue with limited features."
  },
];

export const dataSeven = [
  {
    title: "What industries can benefit from IoT?",
    desc: "IoT has applications across various industries, including healthcare, manufacturing, agriculture, transportation, energy, and smart cities. It can optimize processes, reduce waste, and improve decision-making in diverse sectors."
  },
  {
    title: "How can I contact customer support?",
    desc: "You can contact our support team via email, live chat, or our help center available 24/7."
  },
  {
    title: "What payment methods do you accept?",
    desc: "We accept credit cards, debit cards, UPI, and international payments."
  },
  {
    title: "What sets your IoT platform apart from others?",
    desc: "Our platform offers real-time analytics, scalability, enterprise-grade security, and seamless integrations."
  },
  {
    title: "Do I need technical expertise to use your IoT solutions?",
    desc: "No, our solutions are designed for both technical and non-technical users."
  }
];

export const dataEight = [
 {
    title: "Nuclear Accident Committee",
    content:
      "This committee handles analysis, reporting, and prevention strategies related to nuclear accidents."
  },
  {
    title: "Registry Committee",
    content:
      "Responsible for maintaining and managing official registries and related data."
  },
  {
    title: "Non-interventional Prospective Studies",
    content:
      "Focuses on observational studies without influencing treatment decisions."
  },
  {
    title: "CT2-EBMT Committee",
    content:
      "Coordinates activities related to clinical trials and EBMT programs."
  },
  {
    title: "Statistical Committee",
    content:
      "Provides statistical support, data analysis, and methodological guidance."
  },
  {
    title: "Global Committee",
    content:
      "Oversees international collaboration and global initiatives."
  }
]

export const dataNine = [
  {
    question: "What is your return policy?",
    answer:
      "We accept returns within 30 days of purchase. Items must be unused and in original packaging. Refunds will be issued once we receive and inspect the item."
  },
  {
    question: "How do I track my order?",
    answer:
      "After placing an order, you will receive a tracking link via email once the order is shipped."
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we ship internationally. Shipping charges and delivery times vary by location."
  },
  {
    question: "Can I change or cancel my order?",
    answer:
      "Orders can be changed or canceled within 24 hours of placing them."
  },
  {
    question: "How can I contact support?",
    answer:
      "You can contact our support team via email or live chat available on our website."
  }
];

export const dataTen = [
  {
    title: "Suspendisse a pellentesque dui",
    content: {
      heading: "Maecenas malesuada elit lectus felis",
      points: [
        "Pellentesque facilisis. Nulla imperdiet sit amet magna.",
        "Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi.",
        "Aliquam erat ac ipsum. Integer aliquam purus."
      ]
    }
  },
  {
    title: "Pellentesque facilisis",
    content: {
      heading: "Maecenas malesuada elit lectus felis",
      points: [
        "Pellentesque facilisis. Nulla imperdiet sit amet magna.",
        "Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi.",
        "Aliquam erat ac ipsum. Integer aliquam purus."
      ]
    }
  },
  {
    title: "Nulla imperdiet sit",
    content: {
      heading: "Maecenas malesuada elit lectus felis",
      points: [
        "Pellentesque facilisis. Nulla imperdiet sit amet magna.",
        "Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi.",
        "Aliquam erat ac ipsum. Integer aliquam purus."
      ]
    }
  },
  {
    title: "Vestibulum dapibus",
    content: {
      heading: "Maecenas malesuada elit lectus felis",
      points: [
        "Pellentesque facilisis. Nulla imperdiet sit amet magna.",
        "Vestibulum dapibus, mauris nec malesuada fames ac turpis velit, rhoncus eu, luctus et interdum adipiscing wisi.",
        "Aliquam erat ac ipsum. Integer aliquam purus."
      ]
    }
  }
];