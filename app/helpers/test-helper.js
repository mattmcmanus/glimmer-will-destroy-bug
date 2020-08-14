import { assert } from '@ember/debug';
import { helper } from '@ember/component/helper';

export default helper(function testHelper([value]/*, hash*/) {
  console.log("TEST HELPER", value);
  assert('test-helper requires a value to be passed in', value);
  return value;
});
