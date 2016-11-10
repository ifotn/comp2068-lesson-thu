/**
 * Created by RFreeman on 10/6/2016.
 */

// global variables for the application
module.exports = {
  db: 'mongodb://localhost/comp2068-thu',
  secret: 'UseThis to create Salt 123',
  ids: {
    facebook: {
      clientID: '1664602067165213',
      clientSecret: 'de4798fafd38e5d1f8d647e19f08a534',
      callbackURL: 'http://localhost:3000/facebook/callback'
    }
  }
  //db: 'mongodb://uname:pass@ds048319.mlab.com:48319/comp2068-thu'
};
