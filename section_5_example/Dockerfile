#Specify base image
FROM node:alpine

#without using line 5 and 6, I am getting error like this:
#ERROR: failed to solve: process "/bin/sh -c npm install" did not complete successfully: exit code: 1
WORKDIR /usr/app

COPY ./package.json ./
#This approach helps make the npm install process faster because Docker can use the cache layer more effectively. \
#    For small changes made to the project, only the second COPY command will run, \
#    and the npm install command won't need to be executed again.

RUN npm install

COPY ./ ./

CMD ["npm", "start"]