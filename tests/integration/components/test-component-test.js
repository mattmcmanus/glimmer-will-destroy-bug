import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | Outside', function(hooks) {
  setupRenderingTest(hooks);

  test('when modifier and helper both use the same value', async function(assert) {
    this.set('value', 'foobar');
    await render(hbs`
      {{#if this.value}}
        <Inside @value={{test-helper this.value}} />
      {{/if}}
    `);

    assert.equal(this.element.textContent.trim(), 'foobar');

    this.set('value', null);
    assert.equal(this.element.textContent.trim(), '');
  });
});
