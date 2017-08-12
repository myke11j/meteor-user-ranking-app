import './rating-stars.html';

Template.ratingStars.helpers({
    getIterator(rating) {
        const dummyArray = [];
        while (rating > 0) {
            dummyArray.push({});
            rating--;
        }
        return dummyArray;
    }
});