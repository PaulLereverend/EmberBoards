import Controller from '@ember/controller';

export default Controller.extend({
    actions:{
        setSelection: function(selected) {
            this.set("model.copy.owner", this.store.findRecord("developer",selected));
          },
    }
});
