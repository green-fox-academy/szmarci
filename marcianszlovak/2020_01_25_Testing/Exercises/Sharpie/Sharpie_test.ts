"use strict";

import Sharpie from "../../../2019_12_14_Classes/class exercises/sharpie";
import test from "tape";

test("using sharpie", t => {
  const operations = new Sharpie("green", 770);
  operations.use();
  t.equal(operations.inkAmount, 769);
  t.end();
});
