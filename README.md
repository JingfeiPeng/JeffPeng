# JeffWeb
View Live demo at: https://jefferpeng.netlify.com/

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.3.

## Development server

Run `npm run startApp` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Run Docker Container

### build container
docker build --rm -t jeff_web .

### run container
docker run --rm -it -p 4208:80 --name jeff_web_ui jeff_web

### check contents in container
docker exec -it jeff_web_ui sh