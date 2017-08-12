import { SimpleSchema } from 'meteor/aldeed:simple-schema';

const commonFields = {
    createdAt: {
        type: Date,
        optional: true,
        autoValue: function () {
            if (this.isInsert) return new Date();
            if (this.isUpsert) return new Date();
            return this.unset();
        },
    },
    profile: {
        type: Object,
        optional: true,
        blackbox: true,
    },
    services: {
        type: Object,
        optional: true,
        blackbox: true,
    },
    av_rating: {
        type: Number,
        optional: true,
        defaultValue: 1
    },
    // num of users have rated this user
    num_of_attempt: {
        type: Number,
        optional: true,
        defaultValue: 1
    },
};

export const _Users = new SimpleSchema(Object.assign({}, commonFields, {
    emails: {
        type: [Object],
        optional: true,
    },
    'emails.$.address': {
        type: String,
        unique: true,
        optional: true,
    },
    'emails.$.verified': {
        type: Boolean,
        optional: true,
    }
}));