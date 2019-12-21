import { Experience } from "../../models/experience.model";

export const experiencesData: Experience[] = [
    {
        title:'CAPCO',
        descriptions:["DESCRIPTION_1","DESCRIPTION_2","DESCRIPTION_3"],
        techsUsed:['Angular', 'rxjs', 'NgRx', 'React', 'React Hooks & Contexts', 'Joint.js', 'Node/Express', 'Electron', 'MongoDB', 'docker'],
        period:"Sept 2019 - Dec 2019",
        logoImg:"capco.jpeg"
    },
    {
        title:'MMC',
        descriptions:["DESCRIPTION_1","DESCRIPTION_2","DESCRIPTION_3"],
        techsUsed:["React Native", "Redux", "UML", "SQL"],
        period:"Jan 2019 - Apr 2019",
        logoImg:"mmc.png"
    },
    {
        title:"Perfect Financial Solutions",
        descriptions:["DESCRIPTION_1","DESCRIPTION_2","DESCRIPTION_3"],
        techsUsed:["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "PHP", "SQL"],
        period:"May 2018 - Aug 2018",
        logoImg:""
    }
]