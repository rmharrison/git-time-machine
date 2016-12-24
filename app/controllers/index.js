import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  targetUser: '',
  selected: null,
  actions: {
    logout() {
      this.get('session').invalidate();
    },
    specifyUser() {
      this.transitionToRoute('index.user', this.get('targetUser'));
    },
    logIt(repo) {
      console.log(repo.get('name'));
      this.set('selected', repo);
    }
  }
});
