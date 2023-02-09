const data = {
    general: {
        NUMBER_SYNTAX_ERROR:
            "```Inserisci un numero di contatto valido secondo la sintassi seguente:\n    1. XXXXXXXXXX\n    2. Tag the person\n    3. YYXXXXXXXXXX (YY- Country Code, without zeros)```",
        MESSAGE_NOT_TAGGED: "```Contrassegna un messaggio o inserisci un numero.```",
        NOT_A_GROUP: "```Comando applicabile solo in una chat di gruppo.```",
        BOT_NOT_ADMIN:
            "```Spiacenti, non sono autorizzato a farlo poiché non sono un amministratore.```",
        ADMIN_PERMISSION: "```Devi essere un amministratore per eseguire questo comando.```",
        SUDO_PERMISSION:
            "```Hey there, I am 💠BatBot💠. I guess you were trying to use my commands in``` *{BatBot.groupName}*```. However, the bot is currently in {worktype} mode. This enables only the owner and sudo users to use the command``` *{commandName}* ```.\n\nIf you are keen to use my features, you can deploy BotsApp on your own account without much effort, in less than 5 minutes! Check out the links given below.```\n\n🔗https://mybotsapp.com\n🔗https://github.com/BotsAppOfficial/BotsApp",
        ERROR_TEMPLATE:
            "```Looks like something went wrong. Need not worry. Here are some logs since when the bot was not responding as expected.```\n```---------```\n```🧐 Command:``` *{commandName}*\n```😎 From Me?:``` *{fromMe}*\n```🗣️ Was a reply?:``` *{isReply}*\n```👥 In a group?``` *{isGroup}*\n```📥 In Inbox?``` *{isPm}*\n```📸 Command with image?``` *{isImage}*\n```🕺🏻 Is Bot group admin?``` *{isBotGroupAdmin}*\n```📈 Was Sender group admin?``` *{isSenderGroupAdmin}*\n```🫂 Was sender sudo?``` *{isSenderSudo}*\n```⚠️ Error:``` \n*{err}*\n```---------```\n_To figure out what exactly went wrong, please report/raise the issue on our support chat at_ https://chat.whatsapp.com/GRPWL8TBVq91lQig9JoqME",
        SUCCESSFUL_CONNECTION:
            "*BotsApp successfuly integrated.*\n```Bot is currently working in``` *{worktype}* ```mode.```\n```For more information regarding Bot working and permissions check out:``` \n🔗https://github.com/BotsAppOfficial/BotsApp.\n\n⚠️ The bot will not work in this chat.",
    },
    abl: {
        DESCRIPTION: "Modulo per inserire nella blacklist una persona o una chat dall'utilizzo del bot.",
        EXTENDED_DESCRIPTION:
            "```Add people to blacklist and``` *restrict them* ```from using the bot. You can blacklist specific``` *groups* or *people in groups* or *people altogether* ```from using the bot. These are the configurations -\n\n1. If you send the command in a group``` *without replying* ```to anyone, the bot will be``` *disabled for that group.*\n```2. If you send the command in a group and``` *reply to someone*, ```they will not be able to use the bot in that``` *specific group.*\n```3. If you tag someone in a group like``` *.abl @<person>*, ```they will not be able to use the bot in that specific group.\n4. If you send the command in``` *personal chat* ```of a person, they will be blacklisted from using the bot in``` *any group.*",
        PM_ACKNOWLEDGEMENT: "```{} è stato escluso dall'uso del bot in tutte le chat.```",
        CAN_NOT_BLACKLIST_BOT:
            "```Il bot non può essere inserito nella lista nera. Tagga o rispondi a un altro utente.```",
        GRP_ACKNOWLEDGEMENT:
            "```{} è stato inserito nella lista nera dall'utilizzo del bot in questo gruppo.```",
        GRP_BAN:
            "```Il bot è stato disabilitato per il gruppo``` *{}*. ```Per ulteriori configurazioni usa il comando``` *.help abl*```.```",
    },
    add: {
        DESCRIPTION: "Modulo per aggiungere una persona a un gruppo.",
        EXTENDED_DESCRIPTION:
            "```Aggiungi nuove persone a un gruppo inserendo il loro numero di cellulare secondo il formato indicato di seguito.\n    1. XXXXXXXXXX\n    2. YYXXXXXXXXXX ()\n\nFor example -\n``` *.add 9861212121*",
        NUMBER_SYNTAX_ERROR:
            "```Formati validi-\n    1. XXXXXXXXXX\n    2. YYXXXXXXXXXX\n\nFor example-```\n*.add 9861212121*\n*.add 919861212121*",
        NO_ARG_ERROR:
            "```Inserisci il numero che vuoi aggiungere.\n\nAd esempio,```  *.add <NUMBER>* .",
        NO_24HR_BAN:
            "```Il numero inserito non può essere riaggiunto prima di 24 ore.```",
        ALREADY_MEMBER:
            "```Il numero inserito è già un membro di questo gruppo.```",
        NOT_ON_WHATSAPP:
            "```Il numero che stai tentando di aggiungere, {}, non è disponibile su WhatsApp.\nVerifica nuovamente il numero.```",
        SUCCESS: " aggiunto con successo!",
        PRIVACY:
            "```Il numero che stai tentando di aggiungere non può essere aggiunto direttamente al gruppo. A loro è stato inviato un link di invito.```",
    },
    admins: {
        DESCRIPTION: "Tagga gli amministratori",
        EXTENDED_DESCRIPTION:
            "```Taggare gli amministratori di un gruppo (come risposta a un altro messaggio o come tag diretto).```",
        NOT_GROUP_CHAT:
            "*Il comando .admins*``` è applicabile solo per le chat di gruppo.```",
    },
    alive: {
        DESCRIPTION: "Controlla se il bot è online.",
        EXTENDED_DESCRIPTION:
            "```Questo modulo può essere utilizzato per verificare se il bot è attualmente online o meno.\n\nEsempio di utilizzo,```\n*.alive*",
        ALIVE_MSG:
            "```💠 BatBot è stato integrato con successo. 💠\n\nUsa il comando ``` *.help*``` se non ci capisci un cazzo.```",
    },
    block: {
        DESCRIPTION: "Bloccare un contatto",
        EXTENDED_DESCRIPTION:
            "```Aggiungi il numero alla lista nera. Puoi rispondere alla persona nel gruppo /pm o usare .block <numero>.```",
        NUMBER_SYNTAX_ERROR:
            "```Inserisci un numero di contatto valido secondo la sintassi seguente:\n    1. XXXXXXXXXX\n    2. Tag the person\n    3. +YYXXXXXXXXXX (YY-Country Code, without zeros)```",
        MESSAGE_NOT_TAGGED: "```Contrassegna un messaggio o inserisci un numero per procedere.```",
        NOT_BLOCK_BOT: "```Il bot non può bloccarsi```",
    },
    carbon: {
        DESCRIPTION: "Converti testo/codice in un'immagine carbone.",
        EXTENDED_DESCRIPTION:
            "```Tquesto modulo può essere utilizzato per convertire testo/codice in immagini carbone.\n\nExample Usage,```\n    *.carbon <text>* \n    *.carbon*  ```and reply to a text message.\n\nUse the -t flag after```  *.carbon*  ```to get the list of themes availble.\nIn order to specify the theme, use```  *.carbon <text> -t <theme>* .",
        NO_INPUT:
            "```Nessun input fornito.\nSi prega di utilizzare il comando``` *.carbon <testo>*```o rispondere a un messaggio di testo con``` *.carbon*```per carbonizzare il testo.```",
        CARBONIZING:
            "```Conversione del testo in uno snippet di codice. Attendere prego...```",
        OUTPUT:
            "*<< Ecco la tua immagine carbone! >>*\n```Carbonizzato da BotsApp\nCombinazione di colori: {}```",
        INVALID_REPLY: "```Il messaggio di risposta dovrebbe essere un testo.```",
        INVALID_THEME:
            "```Inserisci un tema valido.\nNota che i nomi dei temi sono ```*case sensitive*.",
    },
    create: {
        DESCRIPTION: "Crea un nuovo gruppo con la persona a cui hai risposto",
        EXTENDED_DESCRIPTION:
            "``` il modulo creerà un nuovo gruppo WhatsApp e aggiungerà la persona che ha risposto nel gruppo.",
        NO_TEXT: "```Immettere il nome del gruppo```",
        TAG_PERSON: "```Rispondi alla persona che dovrebbe essere inclusa nel gruppo```",
        GROUP_CREATED: "```Il gruppo è stato creato con successo.```",
    },
    cpp: {
        DESCRIPTION: "Esegui il codice C++ e ottieni direttamente l'output su WhatsApp.",
        EXTENDED_DESCRIPTION:
            "```Usa questo modulo per eseguire il codice C++ e ottenere l'output direttamente su WhatsApp. Per evitare errori, prova a non usare input.\nNel caso tu voglia fornire input, usa il flag ``` *-i*```per fornire input. Guarda l'esempio per farti un'idea.```",
        NO_INPUT:
            "```Fornisci del codice C++ da eseguire. Usa il comando ``` *.help cpp*``` per ottenere maggiori informazioni su questo modulo.```",
        BOILERPLATE:
            "#include <bits/stdc++.h>\ using namespace std\int main(){\n {codice}\n}",
        OUTPUT_TEMPLATE:
            "⭐ *Uscita:*```\n{stdout}```\n\n⚠️ *Errore:*```\n{stderr}```\n\n👨🏻‍💻 *Comando:*`` `\n{codice}```",
        PROCESSING: "```Esecuzione in corso, attendere...```",
    },
    decodeqr: {
        DESCRIPTION: "Decodifica il codice QR",
        EXTENDED_DESCRIPTION:
            "```Usa questo plugin per decodificare un codice QR semplicemente rispondendo a un'immagine QR esistente nella chat usando``` *.decodeqr*```o caricando un'immagine QR con didascalia come``` *.decodeqr*",
        INVALID_REPLY:
            "```Assicurati di rispondere a un'immagine/adesivo QR.```",
        INVALID_INPUT:
            "```Inserimento non valido. Usa``` *.help decodeqr*```per maggiori informazioni.```",
        PROCESSING: "```Decodifica. attendere prego...```",
    },
    demote: {
        DESCRIPTION: "Retrocedere amministratore a plebeo",
        EXTENDED_DESCRIPTION:
            "```Usa questo modulo per retrocedere una persona dall'amministratore inserendo il numero di cellulare della persona. Valid Syntaxes -\n    1. XXXXXXXXXX\n    2. YYXXXXXXXXXX ()\n\nFor example``` -\n*.demote 9861212121*",
        NOT_A_GROUP: "```Questo comando è applicabile solo per le chat di gruppo.```",
        BOT_NOT_ADMIN:
            "```Spiacente, non ho il permesso di farlo poiché non sono un amministratore.```",
        PERSON_NOT_IN_GROUP: "```Persona non trovata.```",
        MESSAGE_NOT_TAGGED:
            "```Rispondi/tagga/inserisci il numero di contatto della persona da retrocedere.```",
    },
    disappear: {
        DESCRIPTION: "Attiva o disattiva la scomparsa dei messaggi",
        EXTENDED_DESCRIPTION:
            "```Attiva o disattiva la scomparsa dei messaggi utilizzando il comando``` *.dissapear* .",
    },
    getdp: {
        DESCRIPTION: "Ottieni un'immagine di visualizzazione",
        EXTENDED_DESCRIPTION:
            "```Ottieni l'immagine del profilo del gruppo in una conversazione di gruppo o l'immagine del profilo di BotsApp stessa nella chat personale. Tagga una persona in un gruppo per ottenere la sua immagine del profilo.```",
        IMAGE_CAPTION: "```Ecco l'immagine visualizzata. Acquistato da BotsApp.```",
        PROCESSING: "```Ottenere l'immagine di visualizzazione...```",
        TRY_AGAIN:
            "```Visualizza immagine non trovata. Carica un'immagine e riprova.```",
    },
    github: {
        DESCRIPTION: "Profilo Github",
        EXTENDED_DESCRIPTION:
            "```Ottieni il profilo github con il comando``` *.github <utente>*```o rispondendo``` *.github* .",
        NO_ARG_ERROR:
            "```Inserisci il nome utente. Usa il comando ``` *.help github*``` per maggiori informazioni.```",
        ERROR_MSG: "```Inserisci un nome utente valido.```",
        FETCHING: "```Recupero dei dettagli dell'utente da GitHub. attendere prego...```",
    },
    help: {
        DESCRIPTION: "Ottieni l'elenco dei comandi e le informazioni sui moduli",
        EXTENDED_DESCRIPTION:
            "Questo modulo viene utilizzato per ottenere informazioni su altri moduli e sui loro trigger.",
        HEAD: "🌀 *BatBot Menu*🌀\n```Usa il comando .help per informazioni dettagliate su un modulo.```",
        TEMPLATE: "\n\n🤖 *Command* - ```{}```\n💡 *Info* - ```{}```",
        COMMAND_INTERFACE: "🌀 *BatBot Command Interface* 🌀\n\n",
        COMMAND_INTERFACE_TEMPLATE: "💠 *Triggers -* ```{}```\n📚 *Info -* {}",
        FOOTER:
            "```\n\nFare clic sul pulsante in basso per visualizzare un'anteprima del plug-in.```",
    },
    invite: {
        DESCRIPTION: "Modulo per creare link di invito di gruppo",
        EXTENDED_DESCRIPTION:
            "```Usa questo modulo per inviare un link di invito di gruppo nel gruppo o personalmente a qualcuno.```",
        LINK_SENT: "```Link di invito inviato in DM, controlla.```",
    },
    lyrics: {
        DESCRIPTION: "Modulo per trovare i testi delle canzoni",
        EXTENDED_DESCRIPTION:
            "```Usa questo modulo per trovare il testo di una canzone usando il comando ``` *.lyrics*```.```",
        NO_ARG: "```Inserisci il nome del brano.```",
        NOT_FOUND: "```Canzone non trovata !```",
        PROCESSING: "```Ricerca. attendere prego....```",
    },
    meaning: {
        DESCRIPTION: "Trova il significato di una parola nel dizionario.",
        EXTENDED_DESCRIPTION:
            "Trova il significato di una parola nel dizionario usando .meaning <parola>.",
        NO_ARG: "```Inserisci una parola.```",
        NOT_FOUND: "```Parola non trovata nel dizionario!```",
    },
    mute: {
        DESCRIPTION: "Disattiva la chat di gruppo per un periodo di tempo specificato.",
        EXTENDED_DESCRIPTION:
            "Disattiva i membri non amministratori di un gruppo. Puoi anche specificare la durata utilizzando s, m o h.\n\nAd esempio:\n .mute 15 m cambierà i permessi di chat in solo amministratore per 15 minuti.",
        NOT_GROUP_CHAT:
            "*.mute*  ```ccomando è applicabile solo in una chat di gruppo.```",
        NOT_ADMIN:
            "```Spiacente, non ho il permesso di farlo poiché non sono un amministratore.```",
        CHAT_ADMIN_ONLY: "```Autorizzazioni chat modificate in ``` *solo amministratore*.",
        MENTION_DURATION:
            "```Si prega di indicare per quanto tempo si desidera silenziare la chat. Ad esempio,```\n*.mute 10 s*```per disattivare l'audio per 10 secondi.```",
        CHAT_ALL_MEMBERS: "```Autorizzazioni chat modificate in ``` *tutti i membri del gruppo*.",
    },
    neko: {
        DESCRIPTION: "Copia il tuo testo su nekobin",
        EXTENDED_DESCRIPTION:
            "```Usa questo modulo per incollare il tuo testo in un pastebin (NEKOBIN). Inserisci il testo con il comando ``` *.neko* .",
        ENTER_TEXT: "```Inserisci un messaggio di testo insieme al comando.```",
        TRY_LATER: "```Troppi tentativi. Per favore riprova più tardi.```",
        PROCESSING: "```Incollare il testo su nekobin. Attendere prego...```",
    },
    news: {
        DESCRIPTION: "Recupera le notizie in un formato leggibile da dispositivi mobili",
        EXTENDED_DESCRIPTION:
        "```Use this module to fetch news from a publication in mobile readable format from around 1500 publications. Enter text with the command```  *.news* .\n\nTo search for publications, use:-\n```.news search ``` _publication name_\n\nTo fetch news, use:-\n```.news fetch ``` _publication name_\n\nNews is fetched in epub format as it is more comfortable for reading in mobile devices. To read them in Android devices, you can use this application: https://play.google.com/store/apps/details?id=org.readera",
        NO_COMMMAND: "```Nessun argomento fornito. Usa``` *.help news*```per informazioni su come usare il comando.```",
        NO_PUB_NAME: "```Nessun nome di pubblicazione fornito. Usa``` *.help news*```per informazioni su come usare il comando.```"
    },
    ocr: {
        DESCRIPTION: "Riconoscimento ottico dei caratteri",
        EXTENDED_DESCRIPTION:
            "```Usa questo modulo per ottenere il testo da un'immagine con il comando ``` *.ocr*```.```",
        PROCESSING: "```In lavorazione. Attendere prego...```",
        ERROR_MSG:
            "```OCR è l'acronimo di Optical Character Recognition. Rispondi a un'immagine con del testo per ottenere quel testo. Usa il comando ``` *.help ocr*``` per maggiori informazioni.```",
        NO_TEXT: "Impossibile trovare il testo nell'immagine",
    },
    promote: {
        DESCRIPTION: "Promuovi un membro ad amministratore",
        EXTENDED_DESCRIPTION:
            "```Usa questo modulo per promuovere un membro ad amministratore. Puoi inserire il numero di cellulare della persona secondo il formato sottostante. Sintassi valide -\n    1. XXXXXXXXXX\n    2. YYXXXXXXXXXX ()\n\nFor example-\n``` *.promote 9861212121*",
        NOT_A_GROUP: "```Questo comando è applicabile solo in una chat di gruppo.```",
        BOT_NOT_ADMIN:
            "```Spiacente, non ho il permesso di farlo poiché non sono un amministratore.```",
        PERSON_NOT_IN_GROUP: "```La persona non è nel gruppo.```",
        MESSAGE_NOT_TAGGED:
            "```Rispondi/tagga/inserisci il numero di contatto della persona da promuovere.```",
    },
    quote: {
        DESCRIPTION: "Cita il testo di qualcuno e convertilo in adesivo.",
        EXTENDED_DESCRIPTION: "```Rispondi al testo di qualsiasi persona per convertirlo in testo.```",
        NO_REPLY: "```Si prega di rispondere a un messaggio di testo.```",
        PROCESSING: "```Citando il testo, si prega di attendere!```"
    },
    qr: {
        DESCRIPTION: "Converti un testo/immagine in un codice QR",
        EXTENDED_DESCRIPTION:
            "```Usa questo modulo per convertire un testo in un codice qr. Puoi specificare il testo dopo il comando .qr o rispondere a un messaggio utilizzando .qr.```",
        INVALID_INPUT:
            "```Nessun input fornito. Specificare il testo da convertire in codice QR dopo il comando ``` *.qr*``` o rispondere a un testo/immagine utilizzando il comando ``` *.qr*```.```",
        PROCESSING: "```Generazione del codice QR. attendere prego...```",
        IMAGE_CAPTION: "```Ecco la tua immagine QR.```",
    },
    rbl: {
        DESCRIPTION: "Modulo per consentire a una persona o un gruppo della lista nera di utilizzare il bot.",
        EXTENDED_DESCRIPTION:
            "```Rimuovi persone o gruppi dalla lista nera. Funziona in modo simile a abl. Usa``` *.help abl*```per maggiori informazioni.```",
        PM_ACKNOWLEDGEMENT: "```{} rimosso dalla Blacklist per tutte le chat.```",
        GRP_ACKNOWLEDGEMENT:
            "```{} è stato rimosso dalla lista nera per questo gruppo.```",
        GRP_BAN: "```Il bot è stato abilitato per il gruppo``` *{}*",
        NOT_IN_BLACKLIST: "```Voce per {} non trovata nella lista nera.```",
    },
    remove: {
        DESCRIPTION: "Modulo per rimuovere una persona da un gruppo.",
        EXTENDED_DESCRIPTION:
            "```Usa questo modulo per rimuovere persone da un gruppo taggandole``` *.remove @<persona-da-rimuovere>*```o rispondendo loro``` *.remove*.",
        INPUT_ERROR:
            "```Rispondi alla persona che desideri rimuovere o taggala.\n\nAd esempio,``` *.remove @<persona-da-rimuovere>*```o rispondi utilizzando``` *.remove*.",
    },
    rename: {
        DESCRIPTION: "Modulo per rinominare un documento pdf o testo.",
        EXTENDED_DESCRIPTION:
            "```Usa questo modulo per rinominare i documenti ```rispondendo loro``` *.rename <nuovo-nome>*.",
        DOWNLOADING: "```Il tuo documento è in fase di elaborazione...```",
        PROVIDE_NEW_NAME: "```Fornisci un nuovo nome per il tuo documento.```",
        REPLY_TO_DOCUMENT:
            "```Rispondi a un messaggio documento valido per modificarne il nome file.```",
        ERROR:
            "```Ops, qualcosa è andato storto. Riprova più tardi, o probabilmente non di nuovo con questo ...```",
        VALID_REPLY:
            "```Tagga un'immagine/adesivo/audio/documento/pdf/GIF validi.```",
    },
    setdp: {
        DESCRIPTION: "Cambia l'icona del gruppo",
        EXTENDED_DESCRIPTION:
            "```Usa questo modulo per cambiare l'icona del gruppo. Tagga l'immagine con il comando o invia l'immagine desiderata con didascalia come comando```",
        NOT_AN_IMAGE:
            "```Rispondi o aggiungi una didascalia all'immagine che desideri rendere l'icona del gruppo.```",
        NOT_A_GROUP: "```Questo comando è applicabile solo in una chat di gruppoi gruppo.```",
        ICON_CHANGED: "```Modifica dell'icona/immagine del gruppo...```",
    },
    song: {
        DESCRIPTION: "Scarica canzoni",
        EXTENDED_DESCRIPTION:
            "Usa questo modulo per scaricare l'audio di tua scelta specificando un link YouTube o il nome del brano.",
        ENTER_SONG: "```Inserisci la canzone con il comando```",
        SONG_NOT_FOUND:
            "```Impossibile trovare il brano inserito. Controlla se il link o la parola chiave inserita è corretta.```",
        DOWNLOADING: "```Download della tua canzone...```",
        UPLOADING: "```Caricamento canzone...```",
        INTRO: "",
    },
    sticker: {
        DESCRIPTION: "Fai uno sticker",
        EXTENDED_DESCRIPTION:
            "```Usa questo modulo per convertire qualsiasi immagine dalla tua chat in un adesivo. Rispondi a un messaggio immagine con il comando``` *.sticker*```per convertire e inviare l'immagine come adesivo.```",
        TAG_A_VALID_MEDIA_MESSAGE:
            "```Si prega di contrassegnare un messaggio immagine/video/gif valido da convertire in adesivo.```",
        DOWNLOADING: "```Il tuo adesivo è in fase di download. attendere prego...```",
    },
    stoi: {
        DESCRIPTION: "Modulo per convertire adesivo in immagine",
        EXTENDED_DESCRIPTION:
            "```Usa questo modulo per convertire qualsiasi adesivo dalla tua chat in un'immagine. Rispondi al messaggio di un adesivo con il comando``` *.stoi*```per convertire e inviare l'adesivo come immagine.```",
        ANIMATED_STICKER_ERROR:
            "```Il messaggio dell'adesivo con tag è animato, ``` *Impossibile convertire l'adesivo animato in immagine*, ```Riprova con un adesivo statico.```",
        TAG_A_VALID_STICKER_MESSAGE:
            "```Si prega di contrassegnare un messaggio di adesivo valido da convertire in un'immagine.```",
        DOWNLOADING: "```La tua immagine è in fase di download. attendere prego...```",
        ERROR:
            "```Ops, qualcosa è andato storto. Riprova più tardi, o probabilmente non di nuovo con questo...```",
    },
    stov: {
        DESCRIPTION: "Modulo per convertire adesivi animati in video",
        EXTENDED_DESCRIPTION:
            "```Usa questo modulo per convertire qualsiasi adesivo animato dalla tua chat in un video. Rispondi a un messaggio di adesivo animato con il comando``` *.stov*```per convertire e inviare quell'adesivo come video.```",
        ANIMATED_STICKER_ERROR:
            "```Il messaggio dell'adesivo con tag è animato, ``` *Impossibile convertire l'adesivo animato in immagine*, ```Riprova con un adesivo statico.```",
        TAG_A_VALID_STICKER_MESSAGE:
            "```Si prega di contrassegnare un messaggio adesivo animato valido da convertire in un video.```",
        DOWNLOADING: "```Il tuo adesivo è in fase di download. attendere prego...```",
        ERROR:
            "```Ops, qualcosa è andato storto. Riprova più tardi, o probabilmente non di nuovo con questo...```",
    },
    tr: {
        DESCRIPTION: "Traduttore",
        EXTENDED_DESCRIPTION:
            "```Usa``` *.tr <testo> | <lingua>*```per tradurre il testo nella lingua specificata. Puoi anche rispondere a un messaggio di testo con la sintassi```  *.tr <language>*  ```to translate text.\nIf you do not specify a language, it defaults to <English class=''></English>```",
        PROCESSING: "```Traduzione. attendere prego...```",
        TOO_LONG:
            "*I caratteri totali devono essere inferiori a 4000.*\n```I caratteri totali per l'input corrente erano``` ```{}.```",
        LANGUAGE_NOT_SUPPORTED: "```La lingua non è valida.```",
        INVALID_REPLY: "```Si prega di rispondere a un messaggio di testo.```",
        SUCCESS: "*TR:* Tradurre [*{}* -> *{}*]\n\n{}",
        NO_INPUT:
            "```Non è stato rilevato alcun input. Si prega di utilizzare ``` *.help tts*```per informazioni su come utilizzare questo modulo.```",
    },
    tts: {
        DESCRIPTION: "Sintesi vocale.",
        EXTENDED_DESCRIPTION:
            "```Usa``` *.tts <testo>*```o``` *.tts <testo> | <codice_lingua>*```per convertire il testo in voce.\nPuoi anche rispondere a un messaggio di testo con la sintassi``` *.tr <lingua>*```per tradurre il testo.```",
        PROCESSING: "```Conversione di testo in voce. attendere prego...```",
        TOO_LONG:
            "*I caratteri totali devono essere inferiori a 200.*\n```I caratteri totali per l'input corrente erano``` ```{}.```",
        INVALID_LANG_CODE:
            "*Il codice della lingua non era corretto.*\n```Il codice della lingua è generalmente composto dalle prime due lettere della lingua in cui stai tentando di convertire.```",
        NO_INPUT:
            "```Non è stato rilevato alcun input. Si prega di utilizzare ``` *.help tts*```per informazioni su come utilizzare questo modulo.```",
        INCORRECT_REPLY: "```Si prega di rispondere solo a un messaggio di testo valido.```",
    },
    ao: {
        DESCRIPTION: "tagga tutti.",
        EXTENDED_DESCRIPTION:
            "```Usa questo modulo per taggare tutti nel gruppo rispondendo a un messaggio o semplicemente usando il comando ``` *.ao*```.```",
        TAG_MESSAGE: "*Aoooo!*",
    },
    ud: {
        DESCRIPTION: "Dizionario urbano",
        EXTENDED_DESCRIPTION:
            "```Usa questo modulo per trovare il significato di una parola in Urban Dictionary. Inserisci il comando ``` *.ud*```.```",
        NO_ARG: "```Inserisci la parola da cercare.```",
        NOT_FOUND: "```Termine``` *{}*```Non trovato!```",
        PROCESSING: "```Ricerca. attendere prego....```",
    },
    unblock: {
        DESCRIPTION: "Sblocca il contatto",
        EXTENDED_DESCRIPTION: "```Rimuovi il numero dalla blocklist.```",
        NUMBER_SYNTAX_ERROR:
            "```Inserisci un numero di contatto valido. Sintassi valida,\n    1. XXXXXXXXXX\n    2. Tag the person\n    3. +YYXXXXXXXXXX (YY- Country Code, without zeros)```",
        MESSAGE_NOT_TAGGED: "```Contrassegna un messaggio o inserisci un numero.```",
        NOT_UNBLOCK_BOT: "```Bot non può sbloccarsi```",
    },
    unmute: {
        DESCRIPTION: "Riattiva la chat di gruppo",
        EXTENDED_DESCRIPTION: "Riattiva i membri non amministratori di un gruppo",
        NOT_GROUP_CHAT:
            "*.unmute*```il comando è applicabile solo per una chat di gruppo.```",
        NOT_ADMIN:
            "```Spiacente, non ho i permessi per farlo poiché non sono un amministratore.```",
        CHAT_ALL_MEMBERS: "```Autorizzazioni chat modificate in ``` *tutti i membri del gruppo*.",
    },
    weather: {
        DESCRIPTION: "Ottieni i dati meteorologici di una città",
        EXTENDED_DESCRIPTION:
            "```Ottieni informazioni meteo inserendo il nome della città.```",
        WEATHER_DATA:
            "*Temperatura:*{tempInC} °C | {tempInF} °F\n*Temp Min:*{minTempInC} °C | {minTempInF} °F\n*Temperatura massima:*{maxTempInC} °C | {maxTempInF} °F\n*Umidità:*{umidità}%\n*Vento:*{windSpeedInkmph} km/h | {windSpeedInmph} mph , {gradi}°\n*Alba:*{sunriseTime}\n*Tramonto:*{sunsetTime}\n\n\n*{weatherDescription}*\n{cityName} , {country}\n{ data e ora}",
        CITY_NAME_REQUIRED:
            "```Si prega di menzionare il nome della città per cercare i dati meteo.```",
        ERROR_OCCURED: "```Spiacenti, impossibile elaborare questa richiesta. Riprovare più tardi.```",
        DOWNLOADING: "```Elaborazione dei dati. attendere prego...```",
        NOT_FOUND:
            "```Città non trovata. Ricontrolla l'ortografia e rispetta la sintassi.```",
    },
    welcome: {
        DESCRIPTION: "Dai il benvenuto ai nuovi membri nel gruppo con un messaggio personalizzato.",
        EXTENDED_DESCRIPTION:
            "```I nuovi membri di una chat di gruppo saranno accolti con un messaggio. Può essere un'immagine, un video, una gif con didascalia o solo un messaggio di testo.\n\nUtilizzare questo modulo per impostare, aggiornare o eliminare il messaggio esistente.\n\nL'opzione di benvenuto può essere disabilitata ma salvata utilizzando il ``` *.benvenuto*```comando. Per cancellare il messaggio esistente, usa ``` *.welcome delete*. ```Notare che l'opzione di benvenuto è ancora abilitata dopo aver utilizzato l'opzione di eliminazione.```",
        NOT_A_GROUP: "```Questo comando è applicabile solo in una chat di gruppo.```",
        SET_WELCOME_FIRST: "```Imposta prima un messaggio di benvenuto.```",
        GREETINGS_ENABLED: "```Il messaggio di benvenuto è stato abilitato.```",
        GREETINGS_UNENABLED: "```Il messaggio di benvenuto è stato disattivato.```",
        CURRENTLY_ENABLED:
            "```I saluti sono abilitati: True \nAttualmente saluto i nuovi membri con:```",
        CURRENTLY_DISABLED:
            "```I saluti sono abilitati: Falso \nAttualmente saluto i nuovi membri con:```",
        WELCOME_DELETED: "```Messaggio di benvenuto eliminato.```",
        WELCOME_UPDATED: "```Messaggio di benvenuto aggiornato e abilitato.```",
    },
    goodbye: {
        DESCRIPTION: "Un messaggio di addio per la chat di gruppo ogni volta che qualcuno se ne va.",
        EXTENDED_DESCRIPTION:
            "```Un messaggio di saluto verrà inviato quando un membro lascia il gruppo. Può essere un'immagine, un video, una gif con didascalia o solo un messaggio di testo.\n\nUsa questo modulo per impostare, aggiornare o eliminare il messaggio esistente.\n\nL'opzione arrivederci può essere disabilitata ma salvata utilizzando il ``` *.arrivederci*```comando. Per cancellare il messaggio esistente, usa ``` *.goodbye delete*. ```Nota, l'opzione arrivederci è ancora abilitata dopo aver utilizzato l'opzione di eliminazione.```",
        NOT_A_GROUP: "```Questo non è un gruppo```",
        SET_GOODBYE_FIRST: "```Imposta prima un messaggio di addio.```",
        GREETINGS_ENABLED: "```Il messaggio di arrivederci è stato abilitato.```",
        GREETINGS_UNENABLED: "```Il messaggio di arrivederci è stato disattivato.```",
        CURRENTLY_ENABLED:
            "```I saluti sono abilitati: True \nAttualmente saluto i nuovi membri con:```",
        CURRENTLY_DISABLED:
            "```I saluti sono abilitati: True \nAttualmente saluto i nuovi membri con:```",
        GOODBYE_DELETED: "```Messaggio di addio cancellato.```",
        GOODBYE_UPDATED: "```Messaggio di arrivederci aggiornato e abilitato.```",
    },
    yt: {
        DESCRIPTION: "Ottieni consigli e link da Youtube",
        EXTENDED_DESCRIPTION:
            "```Ottieni i primi 10 consigli da YouTube con il nome dell'autore, il timestamp e il link. Indicare le parole chiave che devono essere cercate insieme al comando.```",
        REPLY: "```Ottenere le raccomandazioni...```",
        NO_VIDEOS: "```Non è stato possibile trovare video.```",
        ENTER_INPUT:
            "```Inserisci la query che desideri cercare. Usa il comando ``` *.help yt*``` per maggiori informazioni.```",
    },
};

export default data;
