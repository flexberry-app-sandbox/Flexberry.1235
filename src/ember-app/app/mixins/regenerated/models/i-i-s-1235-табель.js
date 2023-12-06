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
    началоС: attr('Начало смены', { index: 0 }),
    конецС: attr('Окончание смены', { index: 1 }),
    график: hasMany('i-i-s-1235-график', 'График', {
      сотрудник: belongsTo('i-i-s-1235-сотрудник', 'Сотрудник', {
        фИО: attr('ФИО', { index: 1, hidden: true })
      }, { index: 0, displayMemberPath: 'фИО' }),
      начало: attr('Начало смены с', { index: 2 }),
      конец: attr('по', { index: 3 }),
      состояние: attr('Состояние занятости', { index: 4 })
    })
  });

  modelClass.defineProjection('ТабельL', 'i-i-s-1235-табель', {
    конецС: attr('Конец С', { index: 0 }),
    началоС: attr('Начало С', { index: 1 })
  });
};
