const postbackFunction = require('./postbackFunctions');

let dico = {
  // Beginig process
  GET_STARTED_PAYLOAD: {
    type: 'starter',
    postbackFunction: postbackFunction.initStep1,
    step: 1
  },
  PROMO_B1: {
    type: 'presentation_promo',
    postbackFunction: postbackFunction.initStep2b,
    step: 2,
    promo: 'B1'
  },
  PROMO_B2: {
    type: 'presentation_promo',
    postbackFunction: postbackFunction.initStep2b,
    step: 2,
    promo: 'B2'
  },
  PROMO_B3: {
    type: 'presentation_promo',
    postbackFunction: postbackFunction.initStep2b,
    step: 2,
    promo: 'B3'
  },
  PROMO_M1: {
    type: 'presentation_promo',
    postbackFunction: postbackFunction.initStep2m,
    step: 2,
    promo: 'M1'
  },
  PROMO_M2: {
    type: 'presentation_promo',
    postbackFunction: postbackFunction.initStep2m,
    step: 2,
    promo: 'M2'
  },
  SPE_UX: {
    type: 'presentation_spec',
    postbackFunction: postbackFunction.initStep3,
    step: 3,
    promo: 'UX'
  },
  SPE_DEV: {
    type: 'presentation_spec',
    postbackFunction: postbackFunction.initStep3,
    step: 3,
    spec: 'Dev'
  },
  SPE_DES: {
    type: 'presentation_spec',
    postbackFunction: postbackFunction.initStep3,
    step: 3,
    spec: 'Design'
  },
  SPE_MARK: {
    type: 'presentation_spec',
    postbackFunction: postbackFunction.initStep3,
    step: 3,
    spec: 'Marketing'
  },
  FAV_DRINK_COFFEE: {
    type: 'presentation_fav_drink',
    drink: "Café",
    postbackFunction: postbackFunction.initStep4,
  },
  FAV_DRINK_CAPU: {
    type: 'presentation_fav_drink',
    drink: "Cappucino",
    postbackFunction: postbackFunction.initStep4,
  },
  FAV_DRINK_MOCHA: {
    type: 'presentation_fav_drink',
    drink: "Mocha",
    postbackFunction: postbackFunction.initStep4,
  },
  FAV_DRINK_THE: {
    type: 'presentation_fav_drink',
    drink: "Thé",
    postbackFunction: postbackFunction.initStep4,
  },
  FAV_DRINK_RIEN: {
    type: 'presentation_fav_drink',
    drink: null,
    postbackFunction: postbackFunction.initStep4,
  },
  //TODO: Add others postback
};

module.exports = dico;


/*
let answers = {
    'Hello !': {
        type: 'message',
        answer: 'Bonjour Bonjour ! Nous sommes Catherine et Liliane.\n\nNous avons pas mal de choses à faire, mais nous avons bien 5 minutes à vous accorder.\n\nEn quoi pouvons-nous vous être utiles ?'
    },
    TUTO_YES_OFFRES: {
        type: 'web_url',
        url: 'http://static.lesoffrescanal.fr/mycanal/canal-sans-engagement.html?ectrans=1&kwid=liensponso%7CMarque_myCanal_BMM%7Cmycanal%7CPub%7Clienstextes%7CHavas%7CTous%7CGOOGLE%7CMyCanal_BMM%7C%2Boffre%20%2Bmy%20%2Bcanal%7CMedia%7C2017/01/01-2017/12/31&searchintent=simarque&mkwid=sU7UF0znI_dc%7Cpcrid%7C183093552445%7Cpkw%7C%2Boffre%20%2Bmy%20%2Bcanal%7Cpmt%7Cb',
        title: 'Les Offres Canal',
        message: 'Chic, chic, regardez cette page. Je pense que vous trouverez votre bonheur !'
    },
    TUTO_YES_SITE: {
        type: 'web_url',
        url: 'https://www.mycanal.fr/',
        title: 'Le Site MyCanal',
        message: 'Bon très bien ! Je vous y emmène alors'
    },
    TUTO_YES_RECO: {
        type: 'image',
        url: 'https://media.giphy.com/media/3oKIPtCWnnTB4sk42k/source.gif',
        message: 'Je vais regarder avec vous : '
    },
    TUTO_YES_PROFIL: {
        type: 'image',
        message: 'C\'est parti : ',
        url: 'https://media.giphy.com/media/l4FGs1Olo2yKRB9wQ/source.gif'
    },
    TUTO_YES_REVOIR: {
        type: 'image',
        url: 'http://imgur.com/D0NV79l.gif',
        message: 'Voici quelques astuces : ',
    },
    TUTO_YES_DOWNLOAD: {
        type: 'image',
        message: 'Pour télécharger c\'est pas compliqué mon choux : ',
        url: 'https://gifyu.com/images/tutotelechargement.gif'
    },
    TUTO_NO: {
        type: 'message',
        answer: 'Très bien, Très bien ! C\'est compris ! Une autre question peut être ?'
    },
    LIST_TUTO: {
        type: 'list'
    }
}

module.exports = answers
 */