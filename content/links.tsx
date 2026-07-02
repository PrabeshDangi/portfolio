import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from "react-icons/fa";
import { SiDailydotdev } from "react-icons/si";

export const links = [
  {
    platform: "GitHub",
    icon: <FaGithub className="text-xl" />,
    url: "https://github.com/PrabeshDangi",
    color: "hover:text-gray-800",
  },
  {
    platform: "LinkedIn",
    icon: <FaLinkedin className="text-xl" />,
    url: "https://www.linkedin.com/in/prabesh-dangi-912864267/",
    color: "hover:text-blue-600",
  },
  {
    platform: "Email",
    icon: <FaEnvelope className="text-xl" />,
    url: "mailto:contact@dangiprabesh.com.np",
    color: "hover:text-red-600",
  },
  {
    platform: "Daily dev",
    icon: <SiDailydotdev className="text-xl" />,
    url: "https://app.daily.dev/prabeshdangi",
    color: "hover:text-sky-500",
  },
  {
    platform: "Resume",
    icon: <FaFilePdf className="text-xl" />,
    url: "/resume",
    color: "hover:text-red-600",
  },
];
