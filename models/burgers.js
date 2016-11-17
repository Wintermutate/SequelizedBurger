var burger = function(sequelize, DataTypes) {
	return sequelize.define('burger', 
		{
			burger_name: DataTypes.STRING,
			devoured: {
				type: DataTypes.BOOLEAN,
				defaultValue: false
			}
		}
	)
};

module.exports = burger;