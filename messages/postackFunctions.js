const manager = require('./manager');


const initStep1 = (user) => {
  // Send presentation message
  let presentationMessage = `Salut ${user.firstname}
  Moi c'est Georges ton nouveau meilleur ami.
  Si tu as besoin d'une boisson tu es bien tombé mais je fais aussi plein d'autres choses.
  Mais on aura le temps de voir ça ensemble plus tard. Et si on faisait connaissance ?`;

  manager.sendMessage(user.userIdFb, presentationMessage);

  // Send postback choose promo
  let question = `Est ce que tu peux me donner ta promo ? `;
  let buttons = [
    {
      "content-type": "text",
      "title": "B1",
      "payload": "PROMO_B1",
    },
    {
      "content-type": "text",
      "title": "B2",
      "payload": "PROMO_B2",
    },
    {
      "content-type": "text",
      "title": "B3",
      "payload": "PROMO_B3",
    },
    {
      "content-type": "text",
      "title": "M1",
      "payload": "PROMO_M1",
    },
    {
      "content-type": "text",
      "title": "M2",
      "payload": "PROMO_M2",
    }
  ];
  manager.sendQuickReplies(user.userIdFb, question, buttons);
};

const initStep2b = (user) => {


  let message = ``;
};

const initStep2m = (user) => {


  let message = ``;
};

module.exports = {
  initStep1,
  initStep2b,
  initStep2m,
};