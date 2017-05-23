'use strict';

const Mongoose = require('mongoose');

exports.create = (
  financiamiento,
  enganche,
  plazo) => {

    const ConfigurationModel = Mongoose.model('configuration');
    const configuration = new ConfigurationModel();

    configuration.set({
      financiamiento,
      enganche,
      plazo
    });

    return configuration.save();
};

exports.update = (
    financiamiento,
    enganche,
    plazo) => {

    const ConfigurationModel = Mongoose.model('configuration');

    return ConfigurationModel.findOneAndUpdate({},
    {
      financiamiento,
      enganche,
      plazo
    },
    {
      upsert:true
    });
};

exports.get = () => {

    const ConfigurationModel = Mongoose.model('configuration');

    return ConfigurationModel
        .findOne({}, {
            __v: false,
            updatedAt: false,
            createdAt: false
        })
        .exec();
};
