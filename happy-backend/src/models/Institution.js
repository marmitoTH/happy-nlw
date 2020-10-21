const { Model, DataTypes } = require('sequelize')

class Institution extends Model {
  static init(sequelize) {
    super.init({
      latitude: DataTypes.STRING,
      longitude: DataTypes.STRING,
      name: DataTypes.STRING,
      about: DataTypes.STRING,
      images: DataTypes.ARRAY(DataTypes.STRING),
      whatsapp: DataTypes.STRING,
      instructions: DataTypes.STRING,
      visitations: DataTypes.STRING,
      weekends: DataTypes.STRING,
    }, {
      sequelize
    })
  }
}

module.exports = Institution;