import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from "react-icons/fa";
import { SiDailydotdev } from "react-icons/si";

export const links = [
  {
    platform: "GitHub",
    icon: <FaGithub className="text-2xl md:text-3xl" />,
    url: "https://github.com/PrabeshDangi",
    color: "hover:text-gray-800",
  },
  {
    platform: "LinkedIn",
    icon: <FaLinkedin className="text-2xl md:text-3xl" />,
    url: "https://www.linkedin.com/in/prabesh-dangi-912864267/",
    color: "hover:text-blue-600",
  },
  // {
  //   platform: "Twitter",
  //   icon: <FaTwitter className="text-2xl md:text-3xl" />,
  //   url: "https://twitter.com/yourhandle",
  //   color: "hover:text-sky-500",
  // },
  {
    platform: "Email",
    icon: <FaEnvelope className="text-2xl md:text-3xl" />,
    url: "mailto:contact@dangiprabesh.com.np",
    color: "hover:text-red-600",
  },
  {
    platform: "Daily dev",
    icon: <SiDailydotdev className="text-2xl md:text-3xl" />,
    url: "https://app.daily.dev/prabeshdangi",
    color: "hover:text-sky-500",
  },
  {
    platform: "Resume",
    icon: <FaFilePdf className="text-2xl md:text-3xl" />,
    url: "/resume",
    color: "hover:text-red-600",
  },
  // {
  //   platform: "Blog",
  //   icon: <SiHashnode className="text-2xl md:text-3xl" />,
  //   url: "https://yourblog.hashnode.dev",
  //   color: "hover:text-blue-500",
  // },
  // {
  //   platform: "Dev.to",
  //   icon: <SiDevdotto className="text-2xl md:text-3xl" />,
  //   url: "https://dev.to/yourusername",
  //   color: "hover:text-black",
  // },
];
