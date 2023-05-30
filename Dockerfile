FROM node:18.13.0

#ENV NODE_ENV=production
ENV PORT=8000

WORKDIR /usr/src/app

COPY . .
 
#RUN apt update -y && apt upgrade -y

#RUN npm install --legacy-peer-deps
RUN npm install -g gatsby-cli

EXPOSE 8000

#CMD ["gatsby", "develop", "-H 0.0.0.0"]
#CMD ["gatsby", "serve", "--port 8000", "--host 0.0.0.0"]
CMD ["npm", "run", "deploy"]
#CMD ["sleep", "3600"]
