import { assert, describe, it } from "../test_deps.ts";

import { random } from "../mod.ts";

describe("number", function() {
  it("random()", function() {
    for (let i = 0; i < 10; i++) {
      const rand = random(100, 200);
      assert(Number.isInteger(rand) && 100 <= rand && rand <= 200);
    }

    for (let i = 0; i < 10; i++) {
      const rand = random(100, 200, true);
      assert(100 <= rand && rand <= 200);
    }
  });
});
