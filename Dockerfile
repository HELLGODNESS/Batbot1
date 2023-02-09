FROM princemendiratta/botsapp:latest

WORKDIR /

COPY . /BotsApp

WORKDIR /BotsApp

RUN git init --initial-branch=main

RUN git remote add origin https://{HELLGODNESS}:{Porcaputt123}@github.com/{HELLGODNESS}/Batbotwh.git


RUN git fetch origin main

RUN git reset --hard origin/main

RUN yarn

# RUN cp -r /root/Baileys/lib /BotsApp/node_modules/@adiwajshing/baileys/

CMD [ "npm", "start"]
