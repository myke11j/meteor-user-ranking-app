import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check'
import Users from '/lib/collections.js';

Meteor.publish('getUser', () => {
    const id = Meteor.userId();
    return Users.find({ "_id": id }, { fields: {
        'av_rating': 1, 'emails': 1
    }});
});

Meteor.publish('getAllUsers', () => {
    const id = Meteor.userId();
    const users = Users.find({ _id: { $ne: id }}, {
        fields: {
            'av_rating': 1, 'emails': 1
        }
    });
    return users;
});
