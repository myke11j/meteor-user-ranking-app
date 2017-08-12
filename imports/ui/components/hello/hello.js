import { FlowRouter } from 'meteor/kadira:flow-router';
import './hello.html';

Template.hello.onCreated(function helloOnCreated() {
  
});

Template.hello.helpers({
  
});

Template.hello.events({
  'click #rank'(event, instance) {
    return FlowRouter.go('/users');
  },
});
