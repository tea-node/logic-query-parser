const assert = require("assert");
const testCases = require("../src/config/test-cases-v2");
const parser = require("../src");

describe("binaryTreeV2", function () {
  let count = 0;

  testCases.forEach((testCase) => {
    count += 1;

    const title =
      "should " +
      (testCase.err ? "fail" : "work") +
      " for test " +
      count +
      " : " +
      testCase.string;

    it(title, function (done) {
      try {
        const tree = parser.parse(testCase.string);

        if (testCase.tree) {
          assert.deepEqual(tree, testCase.tree);
        }

        if (testCase.err) {
          return done(new Error("Should have failed"));
        }

        done();
      } catch (e) {
        if (!testCase.err) {
          return done(e);
        }

        assert.equal(e.toString(), `Error: ${testCase.err}`);

        return done();
      }
    });
  });
});
