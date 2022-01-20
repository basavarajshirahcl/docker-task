FROM node:15
WORKDIR /node-docker
COPY package.json .

ARG NODE_ENV
RUN if [ "NODE_ENV","development" ]; \
        then npm install; \
        else npm install --only=production; \
        fi

# RUN npm install
COPY . ./
EXPOSE 3000
CMD ["npm","run","dev"]