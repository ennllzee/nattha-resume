import CodingForm from "./CodingForm";
import EducationForm from "./EducationForm";
import LangForm from "./LangForm";
import WorkForm from "./WorkForm";

interface LangSet{
    name : string
    location : string
    education : {
        title : string
        university : EducationForm
    }
    skill : {
        title : string
        coding : CodingForm
        lang : LangForm
        editor : LangForm
        office : LangForm
    }
    work : {
        title : string
        project : WorkForm
    }
    interest : {
        title : string
        list : string[]
    }
    contact : {
        title: string
        address : string
        tel : string
        email : string
    }
    download: string
}

export default LangSet