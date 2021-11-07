import { Component, ChangeDetectionStrategy } from '@angular/core';

enum TechStacks {
  frontEnd = "FRONT_END",
  backEnd = "BACK_END",
  others = "OTHERS",
  dataScience = 'DATA_SCIENCE'
}

@Component({
  selector: 'app-tools-list',
  templateUrl: './tools-list.component.html',
  styleUrls: ['./tools-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolsListComponent {
  TechStacks = TechStacks;
  techOrders = [TechStacks.frontEnd, TechStacks.backEnd, TechStacks.dataScience, TechStacks.others]
  techs = {
    [TechStacks.frontEnd]: ["React", "React Native", "Redux", "Angular", "Rxjx", "NgRx", "Electron", "Javascript/Typescript",
      "HTML", "CSS", "SCSS", "Gulp", "Apollo", "Angular Material", "PrimeReact", "PrimeNg",'JavaFx', 'Android'],
    [TechStacks.dataScience]: ['Python', 'Numpy', 'Pandas', 'Seaborn', 'matplotlib', 'Scikit-learn', "Tensorflow", "Keras"],
    [TechStacks.backEnd]: ["Node", "Objection.js", 'Inversify', "Express", "Tornado", "Golang", "Flask", "Psycopg2", "GraphQL", "Socket.io", "Java", "Spring", "Spring Boot",
      "PHP", "PostgresSQL", "MongoDB", "Mongoose", "Django", "SQL"],
    [TechStacks.others]: ["C", "C++", "Python", "PyGame", "Tensorflow", "Numpy", "docker", "Git", "SVN", "Linux",
      "Bash", "Vim", "UML", "Heroku", "Jest", "Mocha", "Chai"]
  }
  activeTech: TechStacks = TechStacks.frontEnd;

  constructor() { }

  highlight(stack: TechStacks) {
    this.activeTech = stack;
  }

  styleType(stack: TechStacks) {
    return stack !== this.activeTech ?
      {
        "color": "rgb(168, 165, 165)",
        "transition": "0.5s ease"
      }
      : {
        "color": "black",
        "transition": "0.5s ease"
      }
  }
}
