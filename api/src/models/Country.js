const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {
      type: DataTypes.STRING,
      unique: true,
      primaryKey: true,
      allowNull: false 
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      // unique: true
    },
    img:{
      //              bytea
      type: DataTypes.STRING,
      allowNull: false
    },
    continents:{
      type: DataTypes.STRING,
      allowNull: false
    },
    capital:{
      type: DataTypes.STRING,
      // allowNull: false
    },
    subregion:{
      type: DataTypes.STRING
    },
    area:{
      type: DataTypes.INTEGER,
      get(){
        return `${this.getDataValue('area')} km²`
      }
    },
    population:{
      type: DataTypes.INTEGER,
      // get(){
      //   return `${this.getDataValue('population')} Personas`
      // }
    }
  },
  {timestamps: false}
  );
};
