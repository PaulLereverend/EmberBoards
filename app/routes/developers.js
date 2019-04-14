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
      },
      setSelection: function(selected) {
        this.set("model.copy.owner", this.store.findById(selected));
      }
    }
  }
);
