import LangSet from "../models/LangSet";

const ThaiSet: LangSet = {
  name: "ณัฏฐา ไชยะรินทร์",
  location: "ประเทศไทย",
  education: {
    title: "การศึกษา",
    university: {
      degree: "ระดับปริญญาตรี",
      from: "2561",
      to: "2565 [สำเร็จการศึกษา]",
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
        list: "React",
      },
      backend: {
        title: "Back-End Framework",
        list: ".NET, Express.js, NodeJS",
      },
    },
    lang: {
      title: "ภาษา",
      list: "ภาษาไทย, ภาษาอังกฤษ, ภาษาเกาหลีเบื้องต้น, ภาษาญี่ปุ่นเบื้องต้น",
    },
    editor: {
      title: "โปรแกรมตัดต่อรูปภาพและวิดีโอ",
      list: "Adobe Photoshop, Adobe Lightroom, Adobe Premiere Pro",
    },
    office: {
      title: "ซอฟต์แวร์สำนักงาน",
      list: "Microsoft Office (Word, PowerPoint, Excel)",
    }
  },
  work: {
    title: "ผลงาน",
    project: {
      title: "แพลตฟอร์มบริการไกด์สำหรับการบริการในโรงพยาบาล",
      description:
        `Web Application ที่พัฒนาขึ้นเพื่อผลักดันให้เกิดงานบริการไกด์สำหรับการบริการในสถานพยาบาล (Hospital Care Guide Service) เน้นการทำงานบนโทรศัพท์มือถือเป็นหลัก โดยทำหน้าที่เป็นสื่อกลางระหว่างผู้ต้องการรับบริการและไกด์เพื่อให้เกิดการว่าจ้างงานขึ้น \n(หมายเหตุ: ปัจจุบันแพลตฟอร์มอยู่ในสถานะไม่พร้อมใช้งาน)`,
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
  download: "ดาวน์โหลดไฟล์ PDF"
};

export default ThaiSet;
