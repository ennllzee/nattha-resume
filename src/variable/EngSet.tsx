import LangSet from "../models/LangSet";

const EngSet: LangSet = {
  name: "NATTHA CHAIYARIN",
  education: {
    title: "EDUCATION",
    university: {
      degree: "Bachelor Degree",
      from: "2018",
      to: "present",
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
        list: "React, jQuery",
      },
      backend: {
        title: "Back-End Framework",
        list: ".NET, Express.js",
      },
    },
    lang: {
      title: "Languages",
      list: "Thai, English, Basic Korean, Basic Japanese",
    },
  },
  work: {
    title: "WORKS",
    project: {
      title: "Hospital Care Guide Platform",
      description:
        `Web Application for using on electronic communication devices, especially on smartphones. The objectives are driving Hospital Care Guide Service. This platform works as the connector between patients and guides who take care of them at hospital.`,
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
};

export default EngSet;
