import DS from 'ember-data';

export default DS.Model.extend({
    project:DS.belongsTo('project'),
    code:DS.attr('string'),
    description:DS.attr('string')
});
