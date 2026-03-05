const { School, Class, Professor } = require('../models');

const resolvers = {
  Query: {
    schools: async () => {
      return await School.find({}).populate('professors').populate({
        path: 'professor',
        populate: 'classes'
      });
    },
    classes: async () => {
      return await Class.find({}).populate('professor');
    },
    // TODO: Update resolver to include classes
    professors: async () => {
      return await Professor.find({}).populate('classes');
    }
  }
};

module.exports = resolvers;
