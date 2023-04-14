# base image
FROM node:16.14-alpine
RUN npm install -g pnpm


# set working directory
WORKDIR /

# add `/app/node_modules/.bin` to $PATH
ENV PATH /node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /package.json
RUN pnpm config set store-dir /root/.local/share/pnpm/store && \
    pnpm install && \
    pnpm update && \
    pnpm install --frozen-lockfile

# add app
COPY . /src/.

# start app
CMD ["npm", "start"]
