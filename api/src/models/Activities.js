const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('activities', {
    id:{
      allowNull: false,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name:{
      type: DataTypes.STRING,
      allowNull: false,
      // unique: true
    },
    difficulty:{
      type: DataTypes.INTEGER,
      validate:{
        min:1,
        max:5
      },
      get(){
        return `${this.getDataValue('difficulty')}/5`
      }
    },
    duration:{
      type: DataTypes.INTEGER, 
      validate:{
        min:0,
        max:24
      },
      get(){
        return `${this.getDataValue('duration')} hs`
      }
    },
    season:{
      type: DataTypes.ENUM('summer', 'winter', 'spring', 'autumn')
    },
  },
  {timestamps: false}
  );
};
