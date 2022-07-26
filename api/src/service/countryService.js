const { Country, Activities } = require('../db.js')
const { getContinents } = require('../clients/countryClient')

class CountryService{

async getAllCoutrie(){
    try {
        return  await Country.findAll({
        include: Activities,
        attributes:['name','img','continents','id','population']
    });
    } catch (error) {
        return error
    }
}

async getCountrieById(id){
    try {
        // id = id.toUpperCase();
        // console.log(id)
        const countrie = await Country.findOne({
            where:{id},
            include:Activities
        });
        return countrie
    }catch(e) {
        return e
    };
};


async getCountriByName(name){
    try {
        const countrie = await getCountryByName(name);
        return countrie
    }catch(e) {
        return e
    }
}

async createActivitie(body){
    try {
        const {name, difficulty, duration, season, countries } = body
        const createdActivitie = await Activities.create({
            name, difficulty, duration, season 
        })
        // console.log(countries)
        const idCountriesAdd = await Country.findAll({
            where:{
                id:countries
            },
            attributes:["id"]
        })
        // console.log(idCountriesAdd)
        const ids = [];
        for (let i = 0; i < idCountriesAdd.length; i++) {
            const data = idCountriesAdd[i].dataValues.id;
            ids.push(data);
        }
        // return idCountriesAdd.map((i) => (i[0].dataValues.id))
        console.log(ids)
        // console.log(ids[0].dataValues.id)
        createdActivitie.addCountry(ids);
        return createdActivitie
    } catch (error) {
        return error
    }
 
}

async getActivities(){
    try {
        const activitiesData = await Activities.findAll({
            attributes:['name']
        })
        const activitiesName = activitiesData.map(e => e.name)
        return activitiesName
    } catch (error) {
        return error
    }
}

async getContinents(){
    try {
        return await getContinents();
    } catch (error) {
        return error
    }

}


}

module.exports = CountryService;
