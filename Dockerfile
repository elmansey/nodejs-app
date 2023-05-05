#baseimage 
FROM node:14 as base 

FROM base as development
WORKDIR /app
COPY package.json /app/
RUN npm install
COPY . /app/
ENV  PORT=4000
EXPOSE $PORT
CMD [ "npm","run" , "start-dev" ]


FROM base as production
WORKDIR /app
COPY package.json /app/
RUN npm install --only=production
COPY . /app/
ENV  PORT=4000
EXPOSE $PORT
CMD [ "npm","start"  ]

