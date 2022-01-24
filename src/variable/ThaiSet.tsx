import LangSet from "../models/LangSet";

const ThaiSet : LangSet = {
    name: "ณัฏฐา ไชยะรินทร์",
    education: {
        title: "การศึกษา",
        university: {
            degree: "ระดับปริญญาตรี",
            from: "2561",
            to: "ปัจจุบัน",
            name: "วิศวกรรมคอมพิวเตอร์, มหาวิทยาลัยเชียงใหม่"
        }
    },
    skill: {
        title: "ทักษะ",
        coding: {
            title: "Coding",
            lang : {
                title : "ภาษาโปรแกรม",
                list : "Java, Python, C#, C++, JavaScript, TypeScript, HTML, SQL"
              },
              frontend : {
                title : "Front-End Framework",
                list : "React, jQuery"
              },
              backend : {
                title : "Back-End Framework",
                list : ".NET, Express.js"
              }
        },
        lang: {
            title: "ภาษา",
            list: "ไทย, อังกฤษ, เกาหลีพื้นฐาน, ญี่ปุ่นพื้นฐาน"
        }
    },
    work: {
        title: "ผลงาน",
        project: {
            title: "แพลตฟอร์มบริการไกด์สำหรับการบริการในโรงพยาบาล",
            description: "Web Application ที่พัฒนาขึ้นเพื่อรองรับงานบริการไกด์สำหรับการบริการในโรงพยาบาล",
            reward: {
                title: "Huawei Cloud Developer Contest Of Student Group",
                description: "รางวัลรองชนะเลิศอันดับที่ 1"
            }
        }
    },
    interest: {
        title: "ความสนใจ",
        list: ["การพัฒนาระบบซอฟต์แวร์", "การออกแบบ", "การถ่ายภาพ", "ภาพยนตร์และอนิเมชั่น", "เกม"]
    },
    contact: {
        title: "ช่องทางการติดต่อ",
        address: "14 ม.7 ต.เหมืองหม้อ อ.เมืองแพร่ จ.แพร่ 54000",
        tel: "088 432 4988",
        email: "nattar_c@hotmail.com"
    }
}

export default ThaiSet