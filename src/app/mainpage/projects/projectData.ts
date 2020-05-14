import { ProjectInfo } from 'src/app/models';

export const projectData : ProjectInfo[] = [
  {
    title:"University Courses & Degree Planner",
    techs:"Angular & PostgresSQL & Flask",
    description:"A database course group project that stores real data of University course & degree information to help students plan future courses",
    githubLink:"https://github.com/RobbieZhuang/CS348Project",
    pictureLink:"courseplanner.png",
    techsUsedList:["Angular","PostgresSQL",'Flask','Psycopg2','Python'],
    picturesList:["courseplanner.png"],
    additionalInfo:[
      "A courses/degree planner full stack system  to help students plan future courses",
      "Designed 10+ SQL tables in PostgreSQL to model relationships between courses, prerequisites, degree requirements, term offerings and professors",
      "Created RESTful backend with Flask and python to execute complicated SQL queries and implemented database indexing to speed up by queries by 10\%",
      "Fetched data from uWaterloo API and used python to generate +100,000 sql Insert statements to populate SQL tables",
      "Built frontend in Angular utilizing tables and trees to display results",
      "Demo avaliable at <a target='blank' href='https://www.youtube.com/watch?v=dRfBnhh9kOY&t=7s'> here </a>"
    ]
    }  
  ,{
      title:"Two Players Tetris",
      techs:"C++ & Xwindow Graphic",
      description:"A two players competitive tetris game project made using C++ and Xwindow.",
      githubLink:"https://github.com/JingfeiPeng/Biquadris",
      pictureLink:"graphical.png",
      techsUsedList:["C++","Xwindow Graphic", "Observer Design Pattern" ,"MVC design pattern"],
      picturesList:["graphical.png", "graphical2.png","textbasedScreen2.png", "textbasedScreenshot.png"],
      additionalInfo:[
          "A fun 1vs1 competitive Tetris Game", 
          "Incorporated observer, factory and MVC design patterns. It also used OOP techniques such as Polymorphism, RAII and single responsibility principle",
          "The game contains 4 difficulty levels and hidden triggers to sabotage the opponent"
        ]
    },
    {
      title:"Energy Station",
      techs:"React Native & Redux",
      description:"A mobile app build in React Native, featuring user authentication, manipulating missions list activities, settings and manage user’s friend list.",
      githubLink:"https://github.com/JingfeiPeng/EnergyStation",
      pictureLink:"energyStation.png",
      techsUsedList:["React Native", "Redux"],
      picturesList:["energyStation.png","energyStationIntro.png","energyStationLoginScreen.png","engeryStationRegister.png","ESHome.png",
      "ES_activityDetail.png","ES_activityDetailTimer.png","ES_FriendList.png","ES_ViewAllUsers.png","ES_ViewFriendRequest.png",
      "ES_Account_info.png","ES_Setting.png","ES_logout.png","ES_nickname.png"],
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
      picturesList:["mongodb.jpg","energyStationIntro.png","energyStationLoginScreen.png","engeryStationRegister.png","ESHome.png",
      "ES_activityDetail.png","ES_activityDetailTimer.png","ES_FriendList.png","ES_ViewAllUsers.png","ES_ViewFriendRequest.png",
      "ES_Account_info.png","ES_Setting.png","ES_logout.png","ES_nickname.png"],
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
      pictureLink:"conquerorInto.png",
      techsUsedList:["Python","Pygame", "Factory design pattern"],
      picturesList:[
        "conquerorInto.png", 
        "conqueror.jpg",
        "gameFight.png",
        "Conquerorgamefight2.png", 
        "ConquerorDeathScreen.png",
        "conquerorLabratory.png", 
        "COnquerorGameGuide.png",
        "ConquerorGameGuide2.png",
        "ConquerorNorthAmerica.png",
        "conquerorSovietUnion.png",
        "conquerorViewStatus.png"
      ],
      additionalInfo:[
          "a 2D MMO game to conqueror the planet",
          "Player can control a character on a map to shoot at enemy soldiers and tanks",
          "Destroying enemy soldiers and tanks can earn golds which allows player to purchase weapons in labratory. Items can be used to upgrade health, attack or mobility",
          "Game progress can be saved and loaded again in menu",
          "This game was built in high school as the grade 11 Computer Science course's final project"
        ]
    },
    {
      title:"jefferpeng.netlify.com",
      techs:"Angular6 & gulp & Netlify hosting",
      description:"This is the codebase for the site you are seeing now. Available in both English and French",
      githubLink:"https://github.com/JingfeiPeng/JeffPeng",
      pictureLink:"personalWeb.png",
      techsUsedList:["Angular", "gulp", "PrimeNg", "Heroku Hosting", "Netlify hosting"],
      picturesList:["personalWeb.png", "perosnalWebTools.png"],
      additionalInfo:[
          "An awesome portfolio site to showcase some of my works", 
          "Built in Angular6",
          "Utlized Angular translation module for French Translation. Though French translation text was created using Google translate."
        ]
    },
    // {
    //   title:"Chat App",
    //   techs:"React & Node & Express & Socket.io",
    //   description:"a real-time chat applications built using react/react hooks. backend uses Node, Express, and Socket.io",
    //   githubLink:"https://github.com/JingfeiPeng/JingfeiOnlineChatApp",
    //   pictureLink:"chatApp.png",
    //   techsUsedList:["React", "Node","Express", "Socket.io"],
    //   picturesList:["chatApp.png"],
    //   additionalInfo:["A Real Time Chat Application"]
    // },
    {
      title:"Object Model Mapper",
      techs:"React & Electron & Express",
      description:"A Proof of Concept project to revolutionize the way BSAs do model mappings",
      githubLink:"",
      pictureLink:"OMGWorkbench.png",
      techsUsedList:["React", "Joint.Js", "PrimeReact", "Electron", "Node", "Express", "MongoDB", "Docker"],
      picturesList:["OMGWorkbench.png", "workbenchMappingsummary.png", "workbenchAddMapping.png", "mapperScreen.png", "OMGSelectWorkSpace.png"],
      additionalInfo:["A New Revolutional way to do Object Model Mapping", 
        "The app is built using React, uses an express server, and both the frontend and backend are wrapped in electron to be a standalone desktop app. The node server is wrapped as a dependency in react app",
        "Note: I have been authorized to display the images and description of this ongoing POC project. However, I am not authorized to share the source codes. Thus the github link has no code contents"]
    },
    {
      title:"Graphical Sudoku Game ",
      techs:"Angular & Django",
      description:"A sudoku solving game",
      githubLink:"https://github.com/JingfeiPeng/sudoku_game",
      pictureLink:"sudoku.png",
      techsUsedList:["Angular", "Django", "TypeScript"],
      picturesList:["sudoku.png","sudoku1.png","sudoku2.png"],
      additionalInfo:[
        "A full-stack web application for users to solve sudoku with hints, shows solutions and validate user’s submission",
        "Created backend servers with Django to host APIs for solving, fetching sudoku and validating user’s submissions",
        "Implemented backtracking algorithm with python in backend to solve any complex sudoku puzzles",
        "Designed and implemented responsive web user interfaces in Angular to handler user interactions with sudoku"
      ]
    },
    {
      title:"Recipe Builder",
      techs:"React & GraphQL & MongoDB",
      description:"A tool to help average guys/girls to remember cooking recipes",
      githubLink:"https://github.com/JingfeiPeng/graphqlproject",
      pictureLink:"underConstruction.png",
      techsUsedList:["React", "Apollo", "GraphQL", "Node", "Express", "MongoDB","mlab"],
      picturesList:["underConstruction.png"],
      additionalInfo:["A tool to help average guys to remember cooking recipes",
        "In progress in building a backend with Node/express, GraphQL ",
        "In progress to build front-end with React, and apollo"]
    },
  ]