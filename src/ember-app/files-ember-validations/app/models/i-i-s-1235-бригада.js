import {
  defineNamespace,
  defineProjections,
  Model as БригадаMixin
} from '../mixins/regenerated/models/i-i-s-1235-бригада';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(БригадаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
