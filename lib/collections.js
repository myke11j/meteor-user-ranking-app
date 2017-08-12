import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { _Users } from './schemas/_Users.js';

const Users = Meteor.users ? Meteor.users : new Mongo.Collection('users');
Users.attachSchema(_Users);

export default Users;