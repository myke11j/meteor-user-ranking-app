import './profile.html';

Template.profile.onCreated(function () {
    Meteor.subscribe('getUser');
});

Template.profile.helpers({
    profileRating() {
        if (!Meteor.user() || !Meteor.user().av_rating) return [];
        let rating = Meteor.user().av_rating;
        const dummyArray = [];
        while (rating > 0) {
            dummyArray.push({});
            rating--;
        }
        return dummyArray;
    },
    email() {
        if (!Meteor.user()) return null;
        return Meteor.user().emails[0].address;
    }
});

Template.profile.events({
    
});
