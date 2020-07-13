const en = {
    "HEADER": {
        "Home": "Home",
        "AboutMe": "About Me",
        "Projects": "Projects",
        "Experiences": "Experiences",
        "Contact": "Contact",
        "Resume": "Resume"
    },
    "HOME": {
        "DESCRIPTION": "Student, Software Developer"
    },
    "ABOUT_ME": {
        "HEADER": "About me",
        "DESCRIPTION": "Hi there! My name is Jeffer Peng. I am currently an undergrad student majoring in Computer Science at University of Waterloo. ",
        "EXPERIENCES_DESCRIPTION": "I have experiences in full stack development, algorithms and data structures, and Object Oriented programming. I am fluent in both English and Mandarin. I always bring 100% to the work I do and I am not afraid to take initiatives and seek new challenges."
    },
    "PROJECTS": {
        "PROJECTS": "Projects"
    },
    "CONTACT_ME": {
        "CONTACT_ME": "Contact Me"
    },
    "CAPCO": {
        "TITLE": "Software Engineering Internship",
        "DESCRIPTION_1": {
            "TITLE": "Prototyped in a small team the full stack of Object Model Mapper with react for BSAs to automate object modeling process. Distributed the app in both web-based and standalone desktop versions.",
            "D1_D1": "Utilized MongoDB to store data for web-based version and used Node to store data as files for desktop version",
            "D1_D2": "The desktop version is built by packaging the react app using Electron and having the server as a dependency"
        },
        "DESCRIPTION_2": {
            "TITLE": "Developed the full stack of two Angular Proof of Concepts(POC) apps both independently and in small agile teams for bank clients",
            "D2_D1": "Angular POC 1 helps Payment Service Providers to register with the bank client through a set of registration proccess",
            "D2_D2": "Angular POC 2 helps HR to automate the onboarding process of new employees and see employees' progress in registration",
            "D2_D3": "Example Feature: Implemented elastic search algorithm in backend for type ahead searches in angular app"
        }
    },
    "MMC": {
        "TITLE": "Software Developer Internship",
        "DESCRIPTION_1": {
            "TITLE": "Independently developed a mobile app where insurance agents can review business data for company’s clients"
        },
        "DESCRIPTION_2": {
            "TITLE": "Added Redux reducers and actions to update the store and increase code maintainability"
        },
        "DESCRIPTION_3": {
            "TITLE": "Successfully released the mobile app to production after numerous demo and feedback cycles"
        }
    },
    "Perfect Financial Solutions": {
        "TITLE": "Web Developer",
        "DESCRIPTION_1": {
            "TITLE": "Developed a PHP program to manage a SQL client database to automate file filling and printing process"
        },
        "DESCRIPTION_2": {
            "TITLE": "Created the full stack of a business information system for the company to manage client files, and for clients to create account, retrieve password and view their files upon login."
        },
        "DESCRIPTION_3": {
            "TITLE": "Built interactive front-end web pages and created backend of aforementioned systems with PHP"
        }
    }
}

const fr = {
    "HEADER": {
        "Home": "Maison",
        "AboutMe": "About Me",
        "Projects": "Projets",
        "Experiences": "Expériences",
        "Contact": "Contact",
        "Resume": "Reprendre"
    },
    "HOME": {
        "DESCRIPTION": "Étudiant, développeur de logiciels"
    },
    "ABOUT_ME": {
        "HEADER": "A propos de moi",
        "DESCRIPTION": "Bonjour! Je m'appelle Jeffer Peng. Je suis actuellement un étudiant de premier cycle spécialisé en informatique à l'Université de Waterloo.",
        "EXPERIENCES_DESCRIPTION": "J'ai des expériences en développement de pile complète, en algorithmes et structures de données, et en programmation orientée objet. Je parle couramment l'anglais et le mandarin. J'apporte toujours 100% au travail que je fais et je n'ai pas peur de prendre des initiatives et chercher de nouveaux défis. "
    },
    "PROJECTS": {
        "PROJECTS": "Projets"
    },
    "CONTACT_ME": {
        "CONTACT_ME": "Contactez-moi"
    },
    "CAPCO": {
        "TITLE": "Stage de génie logiciel",
        "DESCRIPTION_1": {
            "TITLE": "Prototypé dans une petite équipe la pile complète de Object Model Mapper avec react pour les BSA afin d'automatiser le processus de modélisation d'objet. Distribué l'application dans les versions de bureau Web et autonomes.",
            "D1_D1": "MongoDB utilisé pour stocker les données pour la version Web et Node utilisé pour stocker les données sous forme de fichiers pour la version de bureau",
            "D1_D2": "La version de bureau est construite en empaquetant l'application React en utilisant Electron et en ayant le serveur comme dépendance"
        },
        "DESCRIPTION_2": {
            "TITLE": "Développement de la pile complète de deux applications POC (Angular Proof of Concepts) à la fois indépendamment et en petites équipes agiles pour les clients bancaires",
            "D2_D1": "Angular POC 1 aide les prestataires de services de paiement à s'inscrire auprès du client de la banque via un ensemble de processus d'enregistrement",
            "D2_D2": "Angular POC 2 aide les RH à automatiser le processus d'intégration des nouveaux employés et à voir les progrès des employés en matière d'inscription",
            "D2_D3": "Exemple de fonctionnalité: implémentation d'un algorithme de recherche élastique dans le backend pour les recherches de type avant dans l'application angulaire"
        }
    },
    "MMC": {
        "TITLE": "Stage Développeur Logiciel",
        "DESCRIPTION_1": {
            "TITLE": "Développement indépendant d'une application mobile permettant aux agents d'assurance de consulter les données commerciales des clients de l'entreprise"
        },
        "DESCRIPTION_2": {
            "TITLE": "Ajout de réducteurs et d'actions Redux pour mettre à jour le magasin et augmenter la maintenabilité du code"
        },
        "DESCRIPTION_3": {
            "TITLE": "L'application mobile a été mise en production avec succès après de nombreux cycles de démonstration et de rétroaction"
        }
    },
    "Perfect Financial Solutions": {
        "TITLE": "Développeur Web",
        "DESCRIPTION_1": {
            "TITLE": "Développement d'un programme PHP pour gérer une base de données client SQL pour automatiser le processus de remplissage et d'impression de fichiers"
        },
        "DESCRIPTION_2": {
            "TITLE": "Création de la pile complète d'un système d'information d'entreprise permettant à l'entreprise de gérer les fichiers clients et aux clients de créer un compte, de récupérer le mot de passe et d'afficher leurs fichiers lors de la connexion."
        },
        "DESCRIPTION_3": {
            "TITLE": "Création de pages Web frontales interactives et création du backend des systèmes susmentionnés avec PHP"
        }
    }
}

const replace = (en, fr) => {
    let enkeys = Object.keys(en);
    let frkeys = Object.keys(fr)
    for (let i in enkeys) {
        if (typeof en[enkeys[i]] === 'object') {
            replace(en[enkeys[i]], fr[frkeys[i]])
        } else {
            en[enkeys[i]] = fr[frkeys[i]]
        }
    }
    return JSON.stringify(en);
}

console.log(replace(en, fr))
