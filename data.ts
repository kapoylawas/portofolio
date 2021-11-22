import { IProject, Service, Skill } from "./type";
import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { BsCircleFill } from "react-icons/bs";

export const services:Service[] = [
    {
        Icon: RiComputerLine,
        title: "Frontend Development",
        about:
          "I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ",
      },
      {
        Icon: FaServer,
        title: "Backend  Development",
        about:
          "handle database, server, api using <b>Express </b> & <b>Laravel (PHP)</b> other popular frameworks",
      },
      {
        Icon: AiOutlineApi,
        title: "API Development",
        about:
          "I can develop REST API using <b>Laravel-rest-api</b>  & <b>Node-js API</b> ",
      },
      {
        Icon: MdDeveloperMode,
        title: "Competitive Coder",
        about: "a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ",
      },
      {
        Icon: AiOutlineAntDesign,
        title: "UI/UX designer",
        about:
          "stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ",
      },
      {
        Icon: RiComputerLine,
        title: "Whatever",
        about:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
      },
];

export const languages:Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Php",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Java Script",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "React Native",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "Laravel",
    level: "80",
  },
  {
    Icon: BsCircleFill,
    name: "Bootstrap",
    level: "80",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "Figma",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Photoshop",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Illustrator",
    level: "60",
  },
  {
    Icon: BsCircleFill,
    name: "Framer",
    level: "45",
  },
];

export const project: IProject[] = [
{
  name: "ADMIN JERSIPEDIA",
  description:
    "This app shows a web admin to mobile jerseypedia",
  image_path: "/images/adminjs.png",
  deployed_url: "https://adminjspedia.netlify.app/",
  github_url: "https://adminjspedia.netlify.app/",
  category: ["react"],
  key_techs: ["React", "Chart.js", "Material UI"],
},
{
  name: "Penggalangan Dana",
  description:
    "This app shows a web charity social",
  image_path: "/images/dana.png",
  deployed_url: "https://github.com/kapoylawas/penggalangan-dana",
  github_url: "https://github.com/kapoylawas/penggalangan-dana",
  category: ["react"],
  key_techs: ["React", "atomic design", "Bootstarp"],
},
{
  name: "Penjualan Koperasi",
  description:
    "This app point of sale",
  image_path: "/images/sale.png",
  deployed_url: "https://github.com/kapoylawas/penjualan",
  github_url: "https://github.com/kapoylawas/penjualan",
  category: ["laravel"],
  key_techs: ["Laravel", "ajax", "Bootstarp"],
},
{
  name: "Backend Store Voucher Game",
  description:
    "This app Backend Store Voucher Game and API Develpoment",
  image_path: "/images/gaming.png",
  deployed_url: "http://store-gg.herokuapp.com/",
  github_url: "https://github.com/kapoylawas/storeGG",
  category: ["node"],
  key_techs: ["Node.JS", "Bootstarp", "mongoDB"],
},
{
  name: "Frondend Store Voucher Game",
  description:
    "This app Frondend Store Voucher Game",
  image_path: "/images/frondendGG.png",
  deployed_url: "https://voucher-gaming-lime.vercel.app/",
  github_url: "https://github.com/kapoylawas/storeGG",
  category: ["react"],
  key_techs: ["NextJS", "Bootstarp", "mongoDB"],
},

];