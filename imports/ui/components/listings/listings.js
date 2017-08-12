
import '../rating-stars/rating-stars.js';
import './listings.html';
import Users from '/lib/collections.js';

Template.listings.onCreated(function () {
  Meteor.subscribe('getAllUsers');
});

Template.listings.helpers({

  otherUsersExists() {
    return Users.find({}).fetch().length > 1;
  },

  userList() {
    const users = Users.find({}).fetch();
    return users.length ? users : [];
  },

  getAddress(email) {
    return email[0].address;
  },

  notCurrentUser(id) {
    return Meteor.userId() !== id;
  }
});

Template.listings.events({
  'click .submitScore': function (evt) {
    evt.preventDefault();
    let rating = $(`#select-${evt.currentTarget.id}`).find(":selected").text();
    rating = parseInt(rating); // in simpleSchema, score type is Number
    Meteor.call('Users.saveRating', { rating, userId: evt.currentTarget.id }, (err, res) => {
      if (err) {
        console.log(err);
        // toaster could have been better, but for now I am just using
        // JQuery to notify user
        $(`#${evt.currentTarget.id}`).text('Try again!');
        $(`#${evt.currentTarget.id}`).removeClass('btn-success');
        $(`#${evt.currentTarget.id}`).addClass('btn-danger');
        return;
      }
      $(`#${evt.currentTarget.id}`).text('Score submitted!');
      $(`#${evt.currentTarget.id}`).removeClass('btn-danger');
      $(`#${evt.currentTarget.id}`).addClass('btn-success');
    });
  }
});
