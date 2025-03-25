// src/components/portfolio/Menu.jsx
import Work1 from "../../assets/mbLogo.png";
import Work2 from "../../assets/dh.png";
import Work3 from "../../assets/work-3.svg";
import Work4 from "../../assets/work-4.svg";
import Work5 from "../../assets/me yt.png";
import Work6 from "../../assets/ytthumb.png";

const Menu = [
  {
    id: 1,
    image: Work1,
    title: "MentorBridge",
    category: "Programming",
    link: "https://github.com/ChinmayJoshi98/mentorBridge", // Example link
    liveLink: "https://lambent-tapioca-ca3525.netlify.app/", // Live site link hosted on Netlify
  },
  {
    id: 2,
    image: Work2,
    title: "Demand Hub",
    category: "Programming",
    link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3565517", // Example link
  },
  {
    id: 3,
    image: Work5,
    title: "YouTube Channel lol😁",
    category: "Design",
    link: "https://www.youtube.com/@Dopaminous", // Example link
  },
  {
    id: 4,
    image: Work6,
    title: "My Digital Art Collection",
    category: "Design",
    link: "#", // Example link
  },
];

export default Menu;