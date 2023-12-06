import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.1235.caption'),
          title: i18n.t('forms.application.sitemap.1235.title'),
          children: [{
            link: 'i-i-s-1235-бригада-l',
            caption: i18n.t('forms.application.sitemap.1235.i-i-s-1235-бригада-l.caption'),
            title: i18n.t('forms.application.sitemap.1235.i-i-s-1235-бригада-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-1235-сотрудник-l',
            caption: i18n.t('forms.application.sitemap.1235.i-i-s-1235-сотрудник-l.caption'),
            title: i18n.t('forms.application.sitemap.1235.i-i-s-1235-сотрудник-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-1235-должность-l',
            caption: i18n.t('forms.application.sitemap.1235.i-i-s-1235-должность-l.caption'),
            title: i18n.t('forms.application.sitemap.1235.i-i-s-1235-должность-l.title'),
            icon: 'folder open',
            children: null
          }, {
            link: 'i-i-s-1235-табель-l',
            caption: i18n.t('forms.application.sitemap.1235.i-i-s-1235-табель-l.caption'),
            title: i18n.t('forms.application.sitemap.1235.i-i-s-1235-табель-l.title'),
            icon: 'edit',
            children: null
          }, {
            link: 'i-i-s-1235-невыходы-l',
            caption: i18n.t('forms.application.sitemap.1235.i-i-s-1235-невыходы-l.caption'),
            title: i18n.t('forms.application.sitemap.1235.i-i-s-1235-невыходы-l.title'),
            icon: 'suitcase',
            children: null
          }]
        }
      ]
    };
  }),
})