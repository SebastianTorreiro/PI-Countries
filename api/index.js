//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const { Country } = require('./src/db.js')
// const { Product, User } = require('./db.js');
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const {getAllCountries} = require('./src/clients/countryClient')

// Syncing all the models at once.
// Sincronizando 
conn.sync({ force: true }).then( async () => {

  let countries = await getAllCountries();
  // countries = countries.splice(1, 50)
  countries = countries.filter(c => typeof c === 'object')
  // console.log(countries)
  Country.bulkCreate(countries)

  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
