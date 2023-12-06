import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-1235-график', 'Unit | Serializer | i-i-s-1235-график', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-1235-график',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-1235-причины',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
