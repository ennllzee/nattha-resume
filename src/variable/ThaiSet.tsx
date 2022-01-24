import LangSet from "../models/LangSet";

const ThaiSet: LangSet = {
  name: "ณัฏฐา ไชยะรินทร์",
  location: "แพร่ - เชียงใหม่, ประเทศไทย",
  education: {
    title: "การศึกษา",
    university: {
      degree: "ระดับปริญญาตรี",
      from: "2561",
      to: "ปัจจุบัน",
      name: "วิศวกรรมคอมพิวเตอร์, มหาวิทยาลัยเชียงใหม่",
    },
  },
  skill: {
    title: "ทักษะ",
    coding: {
      title: "การเขียนโปรแกรม",
      lang: {
        title: "ภาษาโปรแกรม",
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
      title: "ภาษา",
      list: "ภาษาไทย, ภาษาอังกฤษ, ภาษาเกาหลีเบื้องต้น, ภาษาญี่ปุ่นเบื้องต้น",
    },
  },
  work: {
    title: "ผลงาน",
    project: {
      title: "แพลตฟอร์มบริการไกด์สำหรับการบริการในโรงพยาบาล",
      description:
        "Web Application ที่พัฒนาขึ้นเพื่อผลักดันให้เกิดงานบริการไกด์สำหรับการบริการในสถานพยาบาล (Hospital Care Guide Service) เน้นการทำงานบนโทรศัพท์มือถือเป็นหลัก โดยทำหน้าที่เป็นสื่อกลางระหว่างผู้ต้องการรับบริการและไกด์เพื่อให้เกิดการว่าจ้างงานขึ้น",
      reward: {
        title: "การแข่งขัน",
        name: "Huawei Cloud Developer Contest Of Student Group",
        description: "รางวัลรองชนะเลิศอันดับที่ 1",
      },
    },
  },
  interest: {
    title: "ความสนใจ",
    list: [
      "การพัฒนาระบบซอฟต์แวร์",
      "การออกแบบ",
      "การถ่ายภาพ",
      "ภาพยนตร์และอนิเมชั่น",
      "เกม",
    ],
  },
  contact: {
    title: "ช่องทางการติดต่อ",
    address: "14 ม.7 ต.เหมืองหม้อ อ.เมืองแพร่ จ.แพร่ 54000",
    tel: "088 432 4988",
    email: "nattar_c@hotmail.com",
  },
};

export default ThaiSet;
