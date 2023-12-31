import {
  defineNamespace,
  defineProjections,
  Model as НевыходыMixin
} from '../mixins/regenerated/models/i-i-s-1235-невыходы';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(НевыходыMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
