
FROM python:3.11

# Init
ENV APP /var/www
WORKDIR $APP
COPY . .
RUN apt update -q;apt upgrade -yq

# npmSetup
RUN apt install npm -yq
RUN npm install -g n
RUN n latest
RUN npm i -g npm

# Javascript
WORKDIR $APP/html/static
RUN npm i

# Typescript
WORKDIR $APP/Typescript
# Webpack
RUN npm i -D
RUN npx webpack

# Python3
WORKDIR $APP
RUN apt install gcc python3-pip -yq
RUN pip3 install -U pip
RUN pip3 install -U -r requirements.txt

# Hosting
WORKDIR $APP
CMD bash -c "waitress-serve --host=0.0.0.0 --port=8080 wsgi:app"
