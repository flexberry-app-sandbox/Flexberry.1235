import {
  defineNamespace,
  defineProjections,
  Model as ТабельMixin
} from '../mixins/regenerated/models/i-i-s-1235-табель';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ТабельMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
