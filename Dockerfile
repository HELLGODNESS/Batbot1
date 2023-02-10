FROM princemendiratta/botsapp:latest

WORKDIR /

COPY . /Batbot1.0

WORKDIR /Batbot1.0

RUN git init --initial-branch=main

RUN git remote add origin git@github.com:HELLGODNESS/Batbot1.1.git

RUN git fetch origin multi-device

RUN git reset --hard origin/multi-device

RUN yarn

# RUN cp -r /root/Baileys/lib /BotsApp/node_modules/@adiwajshing/baileys/

CMD [ "npm", "start"]
