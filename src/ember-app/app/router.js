import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-1235-бригада-l');
  this.route('i-i-s-1235-бригада-e',
  { path: 'i-i-s-1235-бригада-e/:id' });
  this.route('i-i-s-1235-бригада-e.new',
  { path: 'i-i-s-1235-бригада-e/new' });
  this.route('i-i-s-1235-должность-l');
  this.route('i-i-s-1235-должность-e',
  { path: 'i-i-s-1235-должность-e/:id' });
  this.route('i-i-s-1235-должность-e.new',
  { path: 'i-i-s-1235-должность-e/new' });
  this.route('i-i-s-1235-невыходы-l');
  this.route('i-i-s-1235-невыходы-e',
  { path: 'i-i-s-1235-невыходы-e/:id' });
  this.route('i-i-s-1235-невыходы-e.new',
  { path: 'i-i-s-1235-невыходы-e/new' });
  this.route('i-i-s-1235-сотрудник-l');
  this.route('i-i-s-1235-сотрудник-e',
  { path: 'i-i-s-1235-сотрудник-e/:id' });
  this.route('i-i-s-1235-сотрудник-e.new',
  { path: 'i-i-s-1235-сотрудник-e/new' });
  this.route('i-i-s-1235-табель-l');
  this.route('i-i-s-1235-табель-e',
  { path: 'i-i-s-1235-табель-e/:id' });
  this.route('i-i-s-1235-табель-e.new',
  { path: 'i-i-s-1235-табель-e/new' });
});

export default Router;
