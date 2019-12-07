import { ProjectInfo } from 'src/app/models';

export const projectData : ProjectInfo[] = [
    {
      title:"Two Players Tetris",
      techs:"C++ & Xwindow Graphic",
      description:"A two players tetris game project made using C++. Incorporated observer, factory and MVC design patterns. It also used OOP techniques such as Polymorphism, RAII and single responsibility principle",
      githubLink:"https://github.com/JingfeiPeng/Biquadris",
      pictureLink:"tetris.jpg",
      techsUsedList:["C++","Xwindow Graphic", "Observer Design Pattern" ,"MVC design pattern"],
      picturesList:["tetris.jpg"],
      additionalInfo:[
          "A fun 1vs1 competitive Tetris Game", 
          "",
          "with 4 levels and hidden triggers to sabotage the opponent"
        ]
    },
    {
      title:"Energy Station",
      techs:"React Native & Redux",
      description:"A mobile app build in React Native, featuring user authentication, manipulating to-do list activities, and manage user’s friend list. Consisting of 10+ screens and 20+ react components",
      githubLink:"https://github.com/JingfeiPeng/EnergyStation",
      pictureLink:"energyStation.png",
      techsUsedList:["React Native", "Redux"],
      picturesList:["energyStation.png"],
      additionalInfo:[
          "A cross-platform mobile app to encourage healthy life style",
          "This app enables users to create missions that they want to acccomplish and engery points are rewarded to the user when they accomplish their mission. Missions can be in 4 types: Excercise, health, Study, and work",
          "Users can register and login to the app and create their profiles",
          "A social network system is available for users to add other users as friends. Then they can see each others' energy point.",
          "The Idea was started in StartersHack 2019"
        ]
    },
    {
      title:"Energy Station Backend",
      techs:"Node & Express & MongoDB",
      description:"Created backend server using Node, Express, Mongoose to handle APIs used in the app. Implemented middleware functions to log errors to text file, authenticate users, and handle exceptions",
      githubLink:"https://github.com/JingfeiPeng/EnergyStationBackend",
      pictureLink:"mongodb.jpg",
      techsUsedList:["Node", "Express", "MongoDb", "Mongoose"],
      picturesList:["mongodb.jpg"],
      additionalInfo:[
            "Backend Server to support Energy Station app",
            "Created APIs to handle CRUD operations on user's mission activities", 
            "Created APIs to handle user's social network which includes adding friends, approving friend requests, as well as updating users' credentials and infomations",
            "Utilized a MongoDb database using Mongoose the store"]
    },
    {
      title:"Conqueror",
      techs: "Python & Pygame",
      description:"A 2D MMO game where player can play 4 levels, shoot and kill enemies to get gold and upgrade stats, and save game progress.",
      githubLink:"https://github.com/JingfeiPeng/Conquerer-2D-game",
      pictureLink:"conqueror.jpg",
      techsUsedList:["Python","Pygame", "Factory design pattern"],
      picturesList:["conqueror.jpg"],
      additionalInfo:[
          "a 2D MMO game to conqueror the planet",
          ""
        ]
    },
    {
      title:"Jeffpeng.herokuapp.com",
      techs:"Angular & gulp & Heroku Hosting",
      description:"This is the codebase for the site you are seeing now. Available in both English and French",
      githubLink:"https://github.com/JingfeiPeng/JeffPeng",
      pictureLink:"personalWeb.png",
      techsUsedList:["Angular", "gulp", "Heroku Hosting", "PrimeNg"],
      picturesList:["personalWeb.png", "perosnalWebTools.png"],
      additionalInfo:[
          "An awesome portfolio site to showcase some of my works", 
          "Built in Angular6"
        ]
    },
    {
      title:"Chat App",
      techs:"React & Node & Express & Socket.io",
      description:"a real-time chat applications built using react/react hooks. backend uses Node, Express, and Socket.io",
      githubLink:"https://github.com/JingfeiPeng/JingfeiOnlineChatApp",
      pictureLink:"chatApp.png",
      techsUsedList:["React", "Node","Express", "Socket.io"],
      picturesList:["chatApp.png","JeffSite.png"],
      additionalInfo:["A Real Time Chat Application"]
    }
  ]