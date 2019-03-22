import Route from '@ember/routing/route';
import EmberObject,{computed} from '@ember/object';

export default Route.extend({
    model(){
        return this.store.findAll('developer');
    },
    actions:{
      delete(dev){
        dev.destroyRecord();
        this.transitionTo('developers');
      }
    }
  }
);
