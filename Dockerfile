FROM princemendiratta/botsapp:latest

WORKDIR /

COPY . /Batbot1.0

WORKDIR /Batbot1.0

RUN git init --initial-branch=main

RUN git remote add origin https://github.com/Prince-Mendiratta/BotsApp.git

RUN git fetch origin main

RUN git reset --hard origin/main

RUN yarn

# RUN cp -r /root/Baileys/lib /BotsApp/node_modules/@adiwajshing/baileys/

CMD [ "npm", "start"]
