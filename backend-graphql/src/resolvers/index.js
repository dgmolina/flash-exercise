const companyResolver = require('./companyResolver');
const employeeResolver = require('./employeeResolver');

const resolvers = [companyResolver, employeeResolver]

module.exports = resolvers;