import Route from '@ember/routing/route';
import EmberObject,{get} from '@ember/object';

export default Route.extend({
    initUI() {
        Ember.$('.ui.dropdown').dropdown();
      },
    model(){
        return{copy:{}, devs : this.store.findAll('developer'), dev:{}};
    },
    actions:{
        save(project){
            project=this.store.createRecord('project', project.copy);
            debugger
            project.save();
            this.transitionTo('projects');
            /*this.store.findRecord('developer', '5c8ba5a011f6d1fcd08cb674').then(function(response
            ){
                project.set('owner', response);
                project.save();
                this.transitionTo('projects');
            }); */
        },
        didTransition() {
            Ember.run.next(this, 'initUI');
        },
        setSelection: function(selected) {
            this.set("model.copy.owner", this.store.findById(selected));
          }
    }
});
