# JeffWeb
View Live demo at: https://jefferpeng.netlify.com/

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.3.

## Development server

Run `npm run startApp` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


## Run Docker Container

### build container
docker build -t jeff_web .

### run container
docker run --rm -p 4200:80 --name jeff_web_ui jeff_web

### check contents in container
docker exec -it jeff_web_ui /bin/bash