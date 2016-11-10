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
    },
    github: {
      clientID: '8f17d6d783210ec26edc',
      clientSecret: '123e1af2f8093fc6102fd2763ab54f98b41e1ded',
      callbackURL: 'http://localhost:3000/github/callback'
    }
  }
  //db: 'mongodb://uname:pass@ds048319.mlab.com:48319/comp2068-thu'
};
