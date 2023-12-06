import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  должность: DS.belongsTo('i-i-s-1235-должность', { inverse: null, async: false }),
  сотрудник: DS.belongsTo('i-i-s-1235-сотрудник', { inverse: null, async: false }),
  бригада: DS.belongsTo('i-i-s-1235-бригада', { inverse: 'составБриг', async: false })
});

export let ValidationRules = {
  должность: {
    descriptionKey: 'models.i-i-s-1235-состав-бриг.validations.должность.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-1235-состав-бриг.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  бригада: {
    descriptionKey: 'models.i-i-s-1235-состав-бриг.validations.бригада.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СоставБригE', 'i-i-s-1235-состав-бриг', {
    сотрудник: belongsTo('i-i-s-1235-сотрудник', 'Сотрудник', {
      фИО: attr('ФИО', { index: 1, hidden: true })
    }, { index: 0, displayMemberPath: 'фИО' }),
    должность: belongsTo('i-i-s-1235-должность', 'Должность', {
      наименование: attr('Наименование', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'наименование' })
  });
};
