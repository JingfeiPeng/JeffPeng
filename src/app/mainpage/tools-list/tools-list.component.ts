import { Component, OnInit } from '@angular/core';

enum TechStacks {
  frontEnd = "FRONT_END",
  backEnd = "BACK_END",
  others = "OTHERS"
}

@Component({
  selector: 'app-tools-list',
  templateUrl: './tools-list.component.html',
  styleUrls: ['./tools-list.component.scss']
})
export class ToolsListComponent implements OnInit {
  TechStacks = TechStacks;
  techOrders = [TechStacks.frontEnd, TechStacks.backEnd, TechStacks.others]
  techs = {
    [TechStacks.frontEnd]: ["React", "React Native", "Redux",  "Angular", "Rxjx", "NgRx", "Electron", "Javascript/Typescript",
    "HTML", "CSS", "SCSS", "Gulp", "Apollo", "gql", "jQuery", "Bootstrap", "Angular Material", "PrimeReact", "PrimeNg"],
    [TechStacks.backEnd]: ["Node", "Express","GraphQL", "Socket.io","Java","Spring", "Spring Boot", "PHP", "MongoDB", "Mongoose", "mlab", "SQL"],
    [TechStacks.others] :["C", "C++", "Python", "PyGame", "Tensorflow", "Numpy", "docker", "Git", "SVN", "Linux", "Bash","Vim", "UML", "Heroku", "Mocha", "Chai"]
  }
  activeTech : TechStacks = TechStacks.frontEnd;

  constructor() { }

  ngOnInit() {
  }

  highlight(stack: TechStacks){
    this.activeTech = stack;
  }

  styleType(stack: TechStacks){
    if (stack !== this.activeTech){
      return {
        "color": "rgb(168, 165, 165)",
        "transition": "0.5s ease"
      }
    } else {
      return {
        "color": "black",
        "transition": "0.5s ease"
      }
    }
  }

}
