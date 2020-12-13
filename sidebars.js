const fs = require('fs');

let oxid = fs.readdirSync(`${__dirname}/docs/oxid`);
oxid = oxid.map((v) => 'oxid/' + v.replace('.md', ''));
let shopware = fs.readdirSync(`${__dirname}/docs/shopware`);
shopware = shopware.map((v) => 'shopware/' + v.replace('.md', ''));

module.exports = {
  docs: {
    Oxid: [
      {
        OxidSnippets: oxid
      },
    ],
    Shopware: [
        {
          ShopwareSnippets: shopware,
        },
      ],
  },
};