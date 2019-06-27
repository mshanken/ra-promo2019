# Restaurant Awards Promotial Site

A new promotional site for 2019 Restarant Awards web site

## How it works

All you need to run this project is docker.

```docker-compose up -d``` builds the project in a docker container. Once that's done. Type this URL [http://localhost:9000](http://localhost:9000/) in your browser to check web site.

```docker-compose exec web npm run browsersync``` starts browser-sync [http://localhost:3000/](http://localhost:3000/) hit ```Ctrl + P and Ctrl + Q``` to detach.

```docker-compose exec web npm run compile``` compiles served site into static HTML in a folder "www"

```docker-compose exec web npm run gh-pages```  what this command does is compiled (if not compiled) then drops compiled files into root folder.<br>
**Note:** this comand should be used in ***gh-pages*** branch only.

Run ```docker-compose exec web /bin/bash``` to access docker machine from terminal an run other grunt/npm comands.

```docker-compose stop``` to turn off the docker container.

```docker-compose down``` to remove this container, Always use this command after you are done with this repo.<br>
**Note:** Remove your www folder after you are done.

Read more in [here](https://github.com/mshanken/harp-boilerplate/#readme)
