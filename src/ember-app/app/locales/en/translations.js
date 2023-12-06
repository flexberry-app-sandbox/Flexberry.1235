import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': '1235',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: '1235',
          title: '1235'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
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
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
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
