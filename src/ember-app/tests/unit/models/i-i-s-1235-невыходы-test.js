import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-1235-невыходы', 'Unit | Model | i-i-s-1235-невыходы', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-1235-бригада',
    'model:i-i-s-1235-график',
    'model:i-i-s-1235-должность',
    'model:i-i-s-1235-невыходы',
    'model:i-i-s-1235-состав-бриг',
    'model:i-i-s-1235-сотрудник',
    'model:i-i-s-1235-табель',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
