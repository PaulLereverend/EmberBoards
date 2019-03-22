import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return this.store.findAll('project');
    },
    actions:{
      delete(project){
        project.destroyRecord();
        this.transitionTo('projects');
      }
    }
});
