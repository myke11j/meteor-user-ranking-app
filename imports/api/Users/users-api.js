import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check'
import Users from '/lib/collections.js';

Meteor.methods({
    'Users.saveRating': function (data) {
        try {
            check(data, {
                rating: Number,
                userId: String
            });
            if(!Meteor.userId) throw new Meteor.Error('You must logged in perform this operation');
            const { userId, rating } = data;
            const user = Users.findOne({ _id: userId });
            let num_of_attempt = user.num_of_attempt || 1;
            const score = user.av_rating;
            const new_num_of_attempt = num_of_attempt + 1;
            console.log(num_of_attempt, score, rating, new_num_of_attempt);
            let av_rating = Math.ceil(((num_of_attempt * score) + rating) / new_num_of_attempt);
            console.log(`New average rating for user ${userId} is ${av_rating}`);
            return Users.update({ _id: userId }, {
                $set: {
                    av_rating,
                    num_of_attempt: new_num_of_attempt
                }
            });
        } catch (err) {
            throw new Meteor.Error(err.message);
        }
    },
});
