FROM node:18.13.0

#ENV NODE_ENV=production
ENV PORT=8000

WORKDIR /usr/src/app

COPY . .
 
#RUN apt update -y && apt upgrade -y

#RUN npm install --legacy-peer-deps
RUN npm install -g gatsby-cli
RUN gatsby build


EXPOSE 8000

CMD ["gatsby", "serve", "--port 80", "--host 0.0.0.0"]
#CMD ["npm", "run", "develop"]
#CMD ["sleep", "3600"]
