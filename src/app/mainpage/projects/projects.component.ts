import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      title:"Two Players Tetris",
      techs:"C++ & Xwindow Graphic",
      description:"A two players tetris game project made using C++. Incorporated observer, factory and MVC design patterns. It also used OOP techniques such as Polymorphism, RAII and single responsibility principle",
      githubLink:"https://github.com/JingfeiPeng/Biquadris",
      pictureLink:"tetris.jpg"
    },
    {
      title:"Energy Station",
      techs:"React Native & Redux",
      description:"A mobile app build in React Native, featuring user authentication, manipulating to-do list activities, and manage user’s friend list. Consisting of 10+ screens and 20+ react components",
      githubLink:"https://github.com/JingfeiPeng/EnergyStation",
      pictureLink:"energyStation.png"
    },
    {
      title:"Energy Station Backend",
      techs:"Node.Js & Express.Js & Mongoose",
      description:"Created backend server using Node, Express, Mongoose to handle 10+ APIs used in the app. Implemented middleware functions to log errors to text file, authenticate users, and handle exceptions",
      githubLink:"https://github.com/JingfeiPeng/EnergyStationBackend",
      pictureLink:"mongodb.jpg"
    },
    {
      title:"Conqueror",
      techs:"Python & Pygame",
      description:"A 2D MMO game where player can play 4 levels, shoot and kill enemies to get gold and upgrade stats, and save game progress.",
      githubLink:"https://github.com/JingfeiPeng/Conquerer-2D-game",
      pictureLink:"conqueror.jpg"
    },
    {
      title:"This site",
      techs:"Angular & gulp & heroku hosting",
      description:"This is the codebase for the site you are seeing now",
      githubLink:"https://github.com/JingfeiPeng/JeffPeng",
      pictureLink:"JeffSite.png"
    },
    {
      title:"Chat App",
      techs:"React & Node & Express & Socket.io",
      description:"a real-time chat applications built using react/react hooks. backend uses Node, Express, and Socket.io",
      githubLink:"https://github.com/JingfeiPeng/JingfeiOnlineChatApp",
      pictureLink:"chatApp.png"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
