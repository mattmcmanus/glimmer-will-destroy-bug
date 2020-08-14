import { modifier } from 'ember-modifier';

export default modifier(function functionalModifier(element, [value]/*, hash*/) {
  console.log("FUNCTIONAL MODIFIER ON", element, value);
});
