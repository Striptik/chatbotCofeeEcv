const manager = require('./manager');


const initStep1 = (user) => {
  
  console.log('init Step 1\n USER : ', user);
  // Send presentation message
  let presentationMessage = 'Salut ' + user.firstname + '!\nMoi c\'est Georges ton nouveau meilleur ami.\nSi tu as' +
    ' besoin d\'une boisson tu es bien tombé mais je fais aussi plein d\'autres choses.\nMais on aura le temps de' +
    ' voir ça ensemble plus tard.\nEt si on faisait connaissance ?';

  manager.sendMessage(user.userIdFb, presentationMessage);

  // Send postback choose promo
  let question = `Est ce que tu peux me donner ta promo ? `;
  let buttons = [
    {
      "content_type": "text",
      "title": "B1",
      "payload": "PROMO_B1",
    },
    {
      "content_type": "text",
      "title": "B2",
      "payload": "PROMO_B2",
    },
    {
      "content_type": "text",
      "title": "B3",
      "payload": "PROMO_B3",
    },
    {
      "content_type": "text",
      "title": "M1",
      "payload": "PROMO_M1",
    },
    {
      "content_type": "text",
      "title": "M2",
      "payload": "PROMO_M2",
    }
  ];
  manager.sendQuickReplies(user.userIdFb, question, buttons);
};

const initStep2b = (user) => {
  console.log('init Step 2\n USER promo B : ', user);
  
  // Send presentation message
  let message = `Ok génial ! Ce sont les meilleurs années ! Tu vas pleurer quand tu seras en cycle Master, profites !`;
  manager.sendMessage(user.userIdFb, message);
  
  gotToStep4(user);
  // Send postback choose promo
};

const initStep2m = (user) => {
  
  console.log('init Step 2\n USER promo M : ', user);
  
  // Send presentation message
  let message = `Ok dur, je compatie ! Ca va pas être facile !`;
  manager.sendMessage(user.userIdFb, message);
  
  // Send postback choose promo
  let question = `Et en quel mastère du coup ? `;
  let buttons = [
    {
      "content_type": "text",
      "title": "UX",
      "payload": "SPE_UX",
    },
    {
      "content_type": "text",
      "title": "DEV",
      "payload": "SPE_DEV",
    },
    {
      "content_type": "text",
      "title": "Market",
      "payload": "SPE_MARK",
    },
    {
      "content_type": "text",
      "title": "Web Dé",
      "payload": "PROMO_M1",
    }
  ];
  manager.sendQuickReplies(user.userIdFb, question, buttons);

};

const initStep3 = (user) => {
  console.log('init Step 3\n USER spec : ', user);
  
  // Send presentation message
  let message = `Bon, c'est noté !`;
  manager.sendMessage(user.userIdFb, message);
  
  gotToStep4(user);
  // Send postback choose promo
};

const gotToStep4 = (user) => {
  //step 3
  let question = `Quelle est ta boisson préférée ?`;
  let buttons = [
    {
      "content_type": "text",
      "title": "Café",
      "payload": "FAV_DRINK_COFFEE",
    },
    {
      "content_type": "text",
      "title": "Cappucino",
      "payload": "FAV_DRINK_CAPU",
    },
    {
      "content_type": "text",
      "title": "Mocha",
      "payload": "FAV_DRINK_MOCHA",
    },
    {
      "content_type": "text",
      "title": "Thé",
      "payload": "FAV_DRINK_THE",
    },
    {
      "content_type": "text",
      "title": "RIEN !",
      "payload": "FAV_DRINK_RIEN",
    }
  ];
  manager.sendQuickReplies(user.userIdFb, question, buttons);
};

const initStep4 = (user) => {
  console.log('init Step 4\n USER fav drink : ', user);
  
  // Send presentation message
  let message = `Ok je retiendrai`;
  manager.sendMessage(user.userIdFb, message);
  
  // let question = `Quelle est ta boisson préférée ?`;
  // let buttons = [
  //   {
  //     "content_type": "text",
  //     "title": "B1",
  //     "payload": "PROMO_B1",
  //   },
  //   {
  //     "content_type": "text",
  //     "title": "B2",
  //     "payload": "PROMO_B2",
  //   },
  //   {
  //     "content_type": "text",
  //     "title": "B3",
  //     "payload": "PROMO_B3",
  //   },
  //   {
  //     "content_type": "text",
  //     "title": "M1",
  //     "payload": "PROMO_M1",
  //   },
  //   {
  //     "content_type": "text",
  //     "title": "M2",
  //     "payload": "PROMO_M2",
  //   }
  // ];
  // manager.sendQuickReplies(user.userIdFb, question, buttons);
};

module.exports = {
  initStep1,
  initStep2b,
  initStep2m,
  initStep3,
  initStep4,
};