import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  конецС: DS.attr('string'),
  началоС: DS.attr('string'),
  график: DS.hasMany('i-i-s-1235-график', { inverse: 'табель', async: false })
});

export let ValidationRules = {
  конецС: {
    descriptionKey: 'models.i-i-s-1235-табель.validations.конецС.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  началоС: {
    descriptionKey: 'models.i-i-s-1235-табель.validations.началоС.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  график: {
    descriptionKey: 'models.i-i-s-1235-табель.validations.график.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ТабельE', 'i-i-s-1235-табель', {
    конецС: attr('Конец С', { index: 0 }),
    началоС: attr('Начало С', { index: 1 }),
    график: hasMany('i-i-s-1235-график', 'График', {
      конец: attr('Конец', { index: 0 }),
      начало: attr('Начало', { index: 1 }),
      состояние: attr('Состояние', { index: 2 }),
      сотрудник: belongsTo('i-i-s-1235-сотрудник', 'Сотрудник', {
        фИО: attr('ФИО', { index: 4, hidden: true })
      }, { index: 3, displayMemberPath: 'фИО' })
    })
  });

  modelClass.defineProjection('ТабельL', 'i-i-s-1235-табель', {
    конецС: attr('Конец С', { index: 0 }),
    началоС: attr('Начало С', { index: 1 })
  });
};
