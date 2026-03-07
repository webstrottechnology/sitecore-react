import user1 from "../../../assets/images/user1.png";
import user2 from "../../../assets/images/user2.png";
import user3 from "../../../assets/images/user3.png";
import user4 from "../../../assets/images/user4.png";
import user5 from "../../../assets/images/user5.png";
import user6 from "../../../assets/images/user6.png";
import Slider from "react-slick";
import "./Testimonial.scss";
import testimonialIcon from "../../../assets/images/testimonial-icon.png";
import bg from "../../../assets/images/bg-testimonial-img.jpg";
import { FaQuoteRight } from "react-icons/fa";

/* ---------------- TESTIMONIAL DATA ONE ---------------- */

export const TestimonialData = [
  {
    id: "1",
    text: "Working with this team was an absolute pleasure. They understood our vision and delivered beyond expectations.",
    name: "Michael Anderson",
    companyName: "CEO, Technologies",
    img: user1,
    delay: 0.2,
  },
  {
    id: "2",
    text: "Heir professionalism and attention to detail truly stand out. The final product exceeded our quality standards.",
    name: "Emily Johnson",
    companyName: "Marketing Director",
    img: user2,
    delay: 0.2,
  },
  {
    id: "3",
    text: "From start to finish, the communication was seamless. The team delivered on time and within budget.",
    name: "Daniel Thompson",
    companyName: "CEO, Example Company",
    img: user3,
    delay: 0.2,
  },
  {
    id: "4",
    text: "Their creative approach and technical expertise helped us scale our business faster than we expected.",
    name: "Sophia Williams",
    companyName: "Co-Founder, Visionary Labs",
    img: user1,
    delay: 0.2,
  },
  {
    id: "5",
    text: "From start to finish, the communication was seamless. The team delivered on time and within budget.",
    name: "pooja dasrana",
    companyName: "CEO, Example Company",
    img: user3,
    delay: 0.2,
  },
];

/* ---------------- TESTIMONIAL DATA TWO ---------------- */

export const TestimonialData2 = [
  {
    id: 1,
    img: user4,
    text: "The training sessions are structured and engaging. I’ve improved my performance significantly in few months.",
    name: "Ethan Walker",
    designation: "Athlete",
  },
  {
    id: 2,
    img: user5,
    text: "As a parent, I’m very impressed with the discipline and personal attention given to each student.",
    name: "Olivia Martinez",
    designation: "Parent",
  },
  {
    id: 3,
    img: user6,
    text: "Excellent coaching staff and modern facilities. The academy truly focuses on overall development.",
    name: "James Carter",
    designation: "Team Captain",
  },
  {
    id: 4,
    img: user3,
    text: "A motivating environment with top-notch guidance. Highly recommended for serious learners.",
    name: "Sophia Anderson",
    designation: "Student",
  },
];

/* ---------------- TESTIMONIAL DATA THREE ---------------- */

export const TestimonialData3 = [
  {
    id: 1,
    img: user3,
    text: "The personalized workout plans are easy to follow and very effective. I’ve seen noticeable improvements in my strength and overall fitness.",
    name: "David Wilson - Fitness Enthusiast",
  },
  {
    id: 2,
    img: user1,
    text: "Great platform with well-structured programs. The guidance and support made my recovery journey much smoother.",
    name: "Christopher Adams - Entrepreneur",
  },
  {
    id: 3,
    img: user4,
    text: "Simple, practical, and result-oriented training sessions. I highly appreciate the professional approach.",
    name: "Natalie Roberts - Interior Designer",
  },
  {
    id: 4,
    img: user2,
    text: "The step-by-step progression system keeps me motivated. Definitely one of the best fitness solutions I’ve tried.",
    name: "Daniel Thompson - Software Engineer",
  },
];

/* ---------------- TESTIMONIAL DATA FOUR ---------------- */

export const testimonialData4 = [
  {
    id: 1,
    name: "Nathan Brooks",
    text: "Working with this team was a seamless experience. Their attention to detail and proactive communication ensured that the project ran smoothly from start to finish. The final outcome exceeded our expectations in every way.",
    img: user1,
    img2: testimonialIcon,
  },
  {
    id: 2,
    name: "Victoria Lane",
    text: "The team’s professionalism and expertise were evident throughout the project. They carefully understood our requirements and delivered a solution that perfectly aligned with our vision. Highly recommended for anyone seeking reliable results.",
    img: user2,
    img2: testimonialIcon,
  },
  {
    id: 3,
    name: "Christopher Adams",
    text: "Clear communication, innovative solutions, and consistent quality made this collaboration outstanding. The team delivered on time and ensured that every detail met our standards. We couldn’t be happier with the results.",
    img: user3,
    img2: testimonialIcon,
  },
  {
    id: 4,
    name: "Madeline Carter",
    text: "From planning to execution, their commitment to excellence was remarkable. They addressed every concern promptly and provided a solution that truly added value to our project. The final product was beyond our expectations.",
    img: user4,
    img2: testimonialIcon,
  },
  {
    id: 5,
    name: "Nathan Brooks",
    text: "Working with this team was a seamless experience. Their attention to detail and proactive communication ensured that the project ran smoothly from start to finish. The final outcome exceeded our expectations in every way.",
    img: user1,
    img2: testimonialIcon,
  },
  {
    id: 6,
    name: "Victoria Lane",
    text: "The team’s professionalism and expertise were evident throughout the project. They carefully understood our requirements and delivered a solution that perfectly aligned with our vision. Highly recommended for anyone seeking reliable results.",
    img: user2,
    img2: testimonialIcon,
  },
  {
    id: 7,
    name: "Christopher Adams",
    text: "Clear communication, innovative solutions, and consistent quality made this collaboration outstanding. The team delivered on time and ensured that every detail met our standards. We couldn’t be happier with the results.",
    img: user3,
    img2: testimonialIcon,
  },
  {
    id: 8,
    name: "Madeline Carter",
    text: "From planning to execution, their commitment to excellence was remarkable. They addressed every concern promptly and provided a solution that truly added value to our project. The final product was beyond our expectations.",
    img: user4,
    img2: testimonialIcon,
  },
];

/* ---------------- TESTIMONIAL DATA FIVE ---------------- */

export const TestimonialData5 = [
  {
    id: 1,
    name: "Ethan Miller",
    image: user1,
    message:
      "Joining this academy was one of the best decisions I’ve made. The structured training programs and constant feedback helped me improve my performance faster than I expected.",
  },
  {
    id: 2,
    name: "Olivia Carter",
    image: user2,
    message:
      "The coaches truly care about every individual’s progress. Their motivation and personalized guidance have boosted my confidence both on and off the field.",
  },
  {
    id: 3,
    name: "Liam Anderson",
    image: user3,
    message:
      "The training environment is energetic and inspiring. Modern facilities combined with experienced trainers make this academy stand out from the rest.",
  },
  {
    id: 4,
    name: "Sophia Martinez",
    image: user4,
    message:
      "I’ve seen tremendous growth in my skills since enrolling here. The discipline, teamwork, and professional approach make it an excellent place to train.",
  },
  {
    id: 5,
    name: "Naomi G. Welch",
    image: user2,
    message:
      "The coaches truly care about every individual’s progress. Their motivation and personalized guidance have boosted my confidence both on and off the field.",
  },
  {
    id: 6,
    name: "Diane",
    image: user3,
    message:
      "The training environment is energetic and inspiring. Modern facilities combined with experienced trainers make this academy stand out from the rest.",
  },
];

/* ---------------- TESTIMONIAL DATA SIX ---------------- */

export const testimonialData6 = [
  {
    id: 1,
    name: "Daniel Brooks",
    role: "Full Stack Developer",
    text: "Collaborating with this team was a seamless experience. Their technical expertise and clear communication ensured the project was delivered with exceptional quality.",
    img: user1,
  },
  {
    id: 2,
    name: "Emma Richardson",
    role: "Product Designer",
    text: "The attention to user experience and modern design standards truly impressed me. Every detail was thoughtfully executed.",
    img: user2,
  },
  {
    id: 3,
    name: "James Walker",
    role: "Technical Lead",
    text: "Professional, reliable, and highly skilled. The workflow was efficient, and the final output exceeded our expectations.",
    img: user3,
  },
];

/* ---------------- TESTIMONIAL DATA SEVEN ---------------- */

export const testimonialData7 = [
  {
    id: 1,
    name: "Alexander Reed",
    role: "Operations Manager",
    text: "The team demonstrated outstanding coordination and leadership throughout the project. Every milestone was achieved on time with impressive efficiency.",
    img: user1,
  },
  {
    id: 2,
    name: "Grace Mitchell",
    role: "Business Analyst",
    text: "Their strategic planning and execution skills made a significant impact on our workflow. The results were both measurable and sustainable.",
    img: user2,
  },
  {
    id: 3,
    name: "Benjamin Carter",
    role: "Product Owner",
    text: "A highly professional experience from start to finish. Communication was clear, and the deliverables exceeded expectations.",
    img: user3,
  },
  {
    id: 4,
    name: "Natalie Foster",
    role: "HR Director",
    text: "Their problem-solving approach and dedication to quality truly stand out. I would gladly collaborate with them again in the future.",
    img: user2,
  },
    {
    id: 5,
    name: "Alison Amanda",
    role: "Product Owner",
    text: "A highly professional experience from start to finish. Communication was clear, and the deliverables exceeded expectations.",
    img: user3,
  },
  
];

/* ---------------- TESTIMONIAL DATA EIGHT ---------------- */

export const testimonialData8 = [
  {
    id: 1,
    img: user1,
    name: "Lucas Bennett",
    role: "Frontend Engineer",
    rating: 5,
    text: "Exceptional service and clean development standards. The project was delivered ahead of schedule with outstanding attention to detail.",
  },
  {
    id: 2,
    img: user2,
    name: "Ava Thompson",
    role: "UI/UX Designer",
    rating: 4,
    text: "Very smooth collaboration and strong creative direction. The final design perfectly aligned with our brand identity.",
  },
  {
    id: 3,
    img: user3,
    name: "Noah Richardson",
    role: "Startup Founder",
    rating: 5,
    text: "Professional team with great technical expertise. They transformed our idea into a fully functional and scalable product.",
  },
  {
    id: 4,
    img: user2,
    name: "Mia Anderson",
    role: "Digital Marketing Manager",
    rating: 4,
    text: "Reliable, responsive, and easy to work with. Their strategic input added real value to our overall campaign performance.",
  },
];

/* ---------------- TESTIMONIAL DATA NINE ---------------- */

export const testimonialData9 = [
  {
    id: 1,
    img: user1,
    name: "Emily Johnson",
    role: "Frontend Developer",
    text: "Working with this team has been a game-changer. Their attention to detail and coding standards are exceptional, making every project seamless and efficient.",
    button: "Read More",
  },
  {
    id: 2,
    img: user2,
    name: "Daniel Carter",
    role: "UX Designer",
    text: "Creative, responsive, and highly professional. They understood our vision perfectly and delivered a design that exceeded expectations.",
    button: "Read More",
  },
  {
    id: 3,
    img: user3,
    name: "Sophia Williams",
    role: "Project Manager",
    text: "The communication and workflow were smooth from start to finish. Every milestone was achieved on time with excellent quality.",
    button: "Read More",
  },
];

/* ---------------- TESTIMONIAL DATA TEN ---------------- */

export const testimonialData10 = [
  {
    id: 1,
    img: user1,
    name: "Olivia Parker",
    role: "Student's Parent",
    rating: 5,
    text: "The academy has significantly improved my child's confidence and teamwork skills. Coaches are supportive and create a fun learning environment.",
  },
  {
    id: 2,
    img: user2,
    name: "Liam Bennett",
    role: "Student's Parent",
    rating: 5,
    text: "Every session is engaging and well-planned. My child enjoys learning new techniques while developing discipline and focus.",
  },
  {
    id: 3,
    img: user3,
    name: "Sophia Adams",
    role: "Student's Parent",
    rating: 4,
    text: "Excellent coaching and facilities. My child is motivated and eager to attend classes every day. Highly recommended!",
  },
];

/* ---------------- TESTIMONIAL DATA ELEVEN ---------------- */

export const testimonialData11 = [
  {
    id: 1,
    name: "Ethan Parker",
    role: "Operations Manager",
    rating: 4,
    image: user1,
    icon: <FaQuoteRight />,
    text: "Working with this team has been a fantastic experience. Their attention to detail and commitment to deadlines truly sets them apart.",
  },
  {
    id: 2,
    name: "Olivia Thompson",
    role: "Marketing Manager",
    rating: 5,
    image: user2,
    icon: <FaQuoteRight />,
    text: "The strategic insights and execution were outstanding. I was impressed by their professionalism and ability to deliver high-quality results.",
  },
  {
    id: 3,
    name: "Lucas Bennett",
    role: "Product Lead",
    rating: 4,
    image: user3,
    icon: <FaQuoteRight />,
    text: "A highly collaborative and supportive team. Every milestone was met on time, and the communication throughout was excellent.",
  },
  {
    id: 4,
    name: "Sophia Williams",
    role: "Creative Designer",
    rating: 5,
    image: user4,
    icon: <FaQuoteRight />,
    text: "Their creativity and technical expertise made a huge difference to our project. I highly recommend their services to any organization.",
  },
];
