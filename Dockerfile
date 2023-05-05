#baseimage 
FROM node:14

#make work directory to copy the file project inside it in container 
WORKDIR /app

#copy the file for dependancy copy in it inside container in the folder was created 
COPY package.json /app/

#install the dependancy from the file in the container 
ARG APP_ENV
RUN if [ "$APP_ENV" = "production"  ];       \ 
    then  npm install  --only=production; \
    else  npm install;                    \
    fi                        

#copy all the folder and file still in the project to the folder in the container 
COPY . /app/


ENV  PORT=4000
#Expose the project running port but for documentation  
EXPOSE $PORT
#run command to run project
CMD [ "npm","run" , "start-dev" ]