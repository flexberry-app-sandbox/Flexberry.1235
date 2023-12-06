import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('string'),
  состояние: DS.attr('i-i-s-1235-причины'),
  сотрудник: DS.belongsTo('i-i-s-1235-сотрудник', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-1235-невыходы.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  состояние: {
    descriptionKey: 'models.i-i-s-1235-невыходы.validations.состояние.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-1235-невыходы.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('НевыходыE', 'i-i-s-1235-невыходы', {
    дата: attr('Дата', { index: 0 }),
    состояние: attr('Состояние', { index: 1 }),
    сотрудник: belongsTo('i-i-s-1235-сотрудник', 'Сотрудник', {
      фИО: attr('ФИО', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'фИО' })
  });

  modelClass.defineProjection('НевыходыL', 'i-i-s-1235-невыходы', {
    дата: attr('Дата', { index: 0 }),
    состояние: attr('Состояние', { index: 1 }),
    сотрудник: belongsTo('i-i-s-1235-сотрудник', 'ФИО', {
      фИО: attr('ФИО', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
