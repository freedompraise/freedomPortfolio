# base image
FROM node:14.17.0-alpine

# set working directory
WORKDIR /

# add `/app/node_modules/.bin` to $PATH
ENV PATH /node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN pnpm config set store-dir /root/.local/share/pnpm/store && \
    pnpm install && \
    pnpm update && \
    pnpm install --frozen-lockfile

# add app
COPY . /src/.

# start app
CMD ["npm", "start"]
