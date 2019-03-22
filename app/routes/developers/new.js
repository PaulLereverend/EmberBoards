import Route from '@ember/routing/route';
import EmberObject,{computed} from '@ember/object';

export default Route.extend({
    model(){
        return{copy:{}};
    },
    actions:{
        save(dev){
            dev=this.store.createRecord('developer', dev.copy);
            dev.save();
            this.transitionTo('developers');
        }
    }
});
