import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IIS1235БригадаLForm from './forms/i-i-s-1235-бригада-l';
import IIS1235ДолжностьLForm from './forms/i-i-s-1235-должность-l';
import IIS1235НевыходыLForm from './forms/i-i-s-1235-невыходы-l';
import IIS1235СотрудникLForm from './forms/i-i-s-1235-сотрудник-l';
import IIS1235ТабельLForm from './forms/i-i-s-1235-табель-l';
import IIS1235БригадаEForm from './forms/i-i-s-1235-бригада-e';
import IIS1235ДолжностьEForm from './forms/i-i-s-1235-должность-e';
import IIS1235НевыходыEForm from './forms/i-i-s-1235-невыходы-e';
import IIS1235СотрудникEForm from './forms/i-i-s-1235-сотрудник-e';
import IIS1235ТабельEForm from './forms/i-i-s-1235-табель-e';
import IIS1235БригадаModel from './models/i-i-s-1235-бригада';
import IIS1235ГрафикModel from './models/i-i-s-1235-график';
import IIS1235ДолжностьModel from './models/i-i-s-1235-должность';
import IIS1235НевыходыModel from './models/i-i-s-1235-невыходы';
import IIS1235СоставБригModel from './models/i-i-s-1235-состав-бриг';
import IIS1235СотрудникModel from './models/i-i-s-1235-сотрудник';
import IIS1235ТабельModel from './models/i-i-s-1235-табель';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-1235-бригада': IIS1235БригадаModel,
    'i-i-s-1235-график': IIS1235ГрафикModel,
    'i-i-s-1235-должность': IIS1235ДолжностьModel,
    'i-i-s-1235-невыходы': IIS1235НевыходыModel,
    'i-i-s-1235-состав-бриг': IIS1235СоставБригModel,
    'i-i-s-1235-сотрудник': IIS1235СотрудникModel,
    'i-i-s-1235-табель': IIS1235ТабельModel
  },

  'application-name': '1235',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': '1235',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: '1235',
          title: '1235'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        1235: {
          caption: '1235',
          title: '1235',
          'i-i-s-1235-бригада-l': {
            caption: 'Бригада',
            title: ''
          },
          'i-i-s-1235-сотрудник-l': {
            caption: 'Сотрудник',
            title: ''
          },
          'i-i-s-1235-должность-l': {
            caption: 'Должность',
            title: ''
          },
          'i-i-s-1235-табель-l': {
            caption: 'Табель',
            title: ''
          },
          'i-i-s-1235-невыходы-l': {
            caption: 'Невыходы',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-1235-бригада-l': IIS1235БригадаLForm,
    'i-i-s-1235-должность-l': IIS1235ДолжностьLForm,
    'i-i-s-1235-невыходы-l': IIS1235НевыходыLForm,
    'i-i-s-1235-сотрудник-l': IIS1235СотрудникLForm,
    'i-i-s-1235-табель-l': IIS1235ТабельLForm,
    'i-i-s-1235-бригада-e': IIS1235БригадаEForm,
    'i-i-s-1235-должность-e': IIS1235ДолжностьEForm,
    'i-i-s-1235-невыходы-e': IIS1235НевыходыEForm,
    'i-i-s-1235-сотрудник-e': IIS1235СотрудникEForm,
    'i-i-s-1235-табель-e': IIS1235ТабельEForm
  },

});

export default translations;
