## Downloading and Running This Code
In order to properly run this code, you must copy this repository into a local machine, and then change to the dashboard website directory. <br>Once you've changed into the correct directory (It will be named something similar to "Data-Integrated-Patient-Dash.github.io/"). <br>

 *** All code snippets are contained within single quotes, for instance: `example code` ***

### Docker (*recommended*)
Download Docker Desktop here: https://www.docker.com/products/docker-desktop/ <br>
Once it is downloaded and docker is running, return to the terminal and type `docker build -t react-med-dash .` (<- Include the period). This will create a Docker Image named "med-dash".<br>
Once these files finish downloading, run `docker run --rm -it -p 8000:3000 react-med-dash`. This code runs the med-dash image on port 8000. <br>
To access this page, open a web browser and type `localhost:8000`. You should be good to go!<br>
