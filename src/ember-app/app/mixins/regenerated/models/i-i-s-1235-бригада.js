import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  конец: DS.attr('string'),
  назначение: DS.attr('string'),
  начало: DS.attr('string'),
  составБриг: DS.hasMany('i-i-s-1235-состав-бриг', { inverse: 'бригада', async: false })
});

export let ValidationRules = {
  конец: {
    descriptionKey: 'models.i-i-s-1235-бригада.validations.конец.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  назначение: {
    descriptionKey: 'models.i-i-s-1235-бригада.validations.назначение.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  начало: {
    descriptionKey: 'models.i-i-s-1235-бригада.validations.начало.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  составБриг: {
    descriptionKey: 'models.i-i-s-1235-бригада.validations.составБриг.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('БригадаE', 'i-i-s-1235-бригада', {
    конец: attr('Конец', { index: 0 }),
    начало: attr('Начало', { index: 1 }),
    назначение: attr('Назначение', { index: 2 }),
    составБриг: hasMany('i-i-s-1235-состав-бриг', 'Состав бриг', {
      сотрудник: belongsTo('i-i-s-1235-сотрудник', 'Сотрудник', {
        фИО: attr('ФИО', { index: 1, hidden: true })
      }, { index: 0, displayMemberPath: 'фИО' }),
      должность: belongsTo('i-i-s-1235-должность', 'Должность', {
        наименование: attr('Наименование', { index: 3, hidden: true })
      }, { index: 2, displayMemberPath: 'наименование' })
    })
  });

  modelClass.defineProjection('БригадаL', 'i-i-s-1235-бригада', {
    конец: attr('Конец', { index: 0 }),
    начало: attr('Начало', { index: 1 }),
    назначение: attr('Назначение', { index: 2 })
  });
};
