myAsyncFunction = function(callback){
  callback("Test complete");
}

TestSuiteExample = {

  name: "TestSuiteExample",

  suiteSetup: function () {
  },

  setup: function () {
  },

  testAsync: function (test,done) {
    myAsyncFunction(done(function (value) {
      test.isNotNull(value);
    }));
  },

  testIsTrue: function (test) {
    test.isTrue(true);
  },

  clientTestIsClient: function (test) {
    test.isTrue(Meteor.isClient);
    test.isFalse(Meteor.isServer);
  },

  serverTestIsServer: function(test){
    test.isTrue(Meteor.isServer);
    test.isFalse(Meteor.isClient);
  },

  tests: [
    {
      name: "sync test",
      func: function (test) {
        test.isTrue(true)
      }
    },
    {
      name: "async test",
      skip: true,
      func: function (test, done) {
        myAsyncFunction(done(function (value) {
          test.isNotNull(value);
        }));
      }
    },
    {
      name: "test with timeout",
      type: "client",
      timeout: 5000,
      func: function (test) {
        test.isTrue(Meteor.isClient);
      }
    }
  ],

  tearDown: function () {
  },

  suiteTearDown: function () {
  }

}

Munit.run(TestSuiteExample);
