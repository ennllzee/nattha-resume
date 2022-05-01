import LangSet from "../models/LangSet";

const EngSet: LangSet = {
  name: "NATTHA CHAIYARIN",
  location: "Thailand",
  education: {
    title: "EDUCATION",
    university: {
      degree: "Bachelor Degree",
      from: "2018",
      to: "2022 (Graduated)",
      name: "Computer Engineering, Chiang Mai University",
    },
  },
  skill: {
    title: "SKILLS",
    coding: {
      title: "Coding",
      lang: {
        title: "Programming Languages",
        list: "Java, Python, C#, C++, JavaScript, TypeScript, HTML, CSS, SQL",
      },
      frontend: {
        title: "Front-End Framework",
        list: "React",
      },
      backend: {
        title: "Back-End Framework",
        list: ".NET, Express.js, NodeJS",
      },
    },
    lang: {
      title: "Languages",
      list: "Thai, English, Basic Korean, Basic Japanese",
    },
    editor: {
      title: "Photo and Video Editors",
      list: "Adobe Photoshop, Adobe Lightroom, Adobe Premiere Pro",
    },
    office: {
      title: "Office Software",
      list: "Microsoft Office (Word, PowerPoint, Excel)",
    }
  },
  work: {
    title: "PROJECTS",
    project: {
      title: "Hospital Care Guide Platform",
      description:
        `Web Application for using on electronic communication devices, especially on smartphones. The objectives are driving Hospital Care Guide Service. This platform works as the connector between patients and guides who take care of them at hospital. \n(Ps. Currently, This platform is not activated.)`,
      reward: {
        title: "Contest",
        name: "Huawei Cloud Developer Contest Of Student Group",
        description: "1st Runner-up",
      },
    },
  },
  interest: {
    title: "INTERESTS",
    list: [
      "Software Application Development",
      "Creative Design",
      "Photography",
      "Movie and Animation",
      "Games",
    ],
  },
  contact: {
    title: "CONTACTS",
    address: "14 Village No.7, Mueang Mo, Mueang Phrae District,  Phrae 54000",
    tel: "088 432 4988",
    email: "nattar_c@hotmail.com",
  },
  download: "Download as PDF"
};

export default EngSet;
