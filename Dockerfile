FROM node:16.4.2-alpine

ENV NODE_ENV=production
ENV PORT=5000

WORKDIR /usr/src/app

COPY . .

EXPOSE 5000

CMD ["npm", "run", "start:prod"]
