import { Experience } from "../../models/experience.model";

export const experiencesData: Experience[] = [
    {
        title: 'Huawei',
        descriptions: [
            {
                title: "DESCRIPTION_1", details: ["D1_D0", "D1_D1","D1_D2"]
            },
            {
                title: 'DESCRIPTION_2', details: []
            }
        ],
        techsUsed: ["Python","Numpy","Panadas", "SUMO traffic sim", "React", "Tornado", "Bash"],
        period: "Jan 2021 - Apr 2021",
        logoImg: "huawei_logo.jpg",
        show: false
    },
    {
        title: 'DarwinAI',
        descriptions: [
            {
                title: "DESCRIPTION_1", details: ["D1_D1", "D1_D2", "D1_D3"]
            },
            {
                title: 'GENSYNTH', details: ['D1', "D2"]
            }
        ],
        techsUsed: ['Python', 'Tensorflow', 'Typescript', 'Angular', 'rxjs', 'NgRx', 'Jest', 'React', 'Node', 'Express', 'Inversify', 'Objection.js', 'PostreSQL'],
        period: "May 2020 - Aug 2020",
        logoImg: "darwinai.jpg",
        show: false
    }, {
        title: 'CAPCO',
        descriptions: [
            {
                title: "DESCRIPTION_1", details: ["D1_D1", "D1_D2"]
            }, {
                title: "DESCRIPTION_2", details: ["D2_D1", "D2_D2", "D2_D3"]
            }
        ],
        techsUsed: ['Angular', 'rxjs', 'NgRx', 'React', 'React Hooks & Contexts',
            'Joint.js', 'Node/Express', 'Electron', 'MongoDB', 'docker'],
        period: "Sept 2019 - Dec 2019",
        logoImg: "capco.jpeg",
        show: false
    },
    {
        title: 'MMC',
        descriptions: [{
            title: "DESCRIPTION_1", details: []
        }, {
            title: "DESCRIPTION_2", details: []
        }, {
            title: "DESCRIPTION_3", details: []
        }],
        techsUsed: ["React Native", "Redux", "UML", "SQL"],
        period: "Jan 2019 - Apr 2019",
        logoImg: "mmc.png",
        show: false
    },
    {
        title: "Perfect Financial Solutions",
        descriptions: [{
            title: "DESCRIPTION_1", details: []
        }, {
            title: "DESCRIPTION_2", details: []
        }, {
            title: "DESCRIPTION_3", details: []
        }],
        techsUsed: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap", "PHP", "SQL"],
        period: "May 2018 - Aug 2018",
        logoImg: "pfs.png",
        show: false
    }
]