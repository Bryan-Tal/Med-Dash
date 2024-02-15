## Downloading and Running This Code
In order to properly run this code, you must copy this repository into a local machine, and then change to the dashboard website directory. <br>Once you've changed into the correct directory (It will be named something similar to "Data-Integrated-Patient-Dash.github.io/"). <br>

 *** All code snippets are contained within single quotes, for instance: `example code` ***


### Docker (*Recommended*)
Download Docker Desktop here: https://www.docker.com/products/docker-desktop/ <br>
Once it is downloaded and docker is running, return to the terminal and type `docker build -t react-med-dash .` (<- Include the period). <br> This will create a Docker Image named "med-dash".<br>
Once these files finish downloading, run `docker run --rm -it -p 8000:3000 react-med-dash`.<br> This code runs the med-dash image on port 8000. <br>
To access this page, open a web browser and type `localhost:8000`. You should be good to go!<br>

### Local Installation (*Development*)
## NodeJS
Node JS is currently required to run the dashboard locally. <br> If NodeJS is not currently in your local system head to the following website `https://nodejs.org/en/download` and download the most current version of nodejs for your system.<br> 
*NodeJS is needed to run required javascript files.*<br>

If you're running an IDE such as VSCode, restart it in order for nodejs to begin working. <br>

#### MacOS
Creating a virtual environment and installing Python dependencies:<br>
In the main directory ("react-med-dash"), type `python3 -m venv ./venv` in order to enter the virtual environment.<br> In order to enter your created environment, type `source venv/bin/activate` in your terminal. You'll know you're in the right place if there is something like '(venv)' on the left side of the Terminal.<br>
From here type `pip install -r requirements.txt` in order to install all required Python dependencies. <br>

Now, to install all required JavaScript dependencies, type `npm install` <br>

##### Running the Dashboard
Once everything is installed we can type `npm run dev` in order to run the dashboard website. Go to `localhost:3000` in a web browser to view. <br>

#### Windows
Creating a virtual environment and installing Python dependencies:<br>


In the main directory ("react-med-dash"):<br> Create a venv by typing `python -m venv ./venv`, then type `venv\Scripts\Activate.ps1` (if using powershell) or `venv\Scripts\Activate.bat` (if using cmd) <br>
If there is an issue running this code, you need to change your ExecutionPolicy. While this can be dangerous if done incorrectly, this guide will help you do it safely: <br>
- In your terminal, type `Set-ExecutionPolicy Unrestricted -Scope Process` in order to run your venv.
- Next, type `venv\Scripts\Activate.ps1` or `venv\Scripts\Activate.bat` in order to create your virtual environment.
- Finally, type `Set-ExecutionPolicy Default -Scope Process` to reset your ExecutionPolicy to default settings.
- You should be in the virtual environment. You'll know because the left of your terminal should now have something like '(venv)'. <br>
From here type `pip install -r requirements.txt` in order to install all required Python dependencies. <br>


Now, to install all required JavaScript dependencies, once in the correct directory("react-med-dash") type `npm install`. This should install all required dependencies <br>

##### Running the Dashboard 
Once everything is installed we can type `npm run dev` in the terminal in order to view the dashboard website. From here go to a web browser and type `localhost:8000` in the address bar. <br>

