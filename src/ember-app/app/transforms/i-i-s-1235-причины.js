import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ПричиныEnum from '../enums/i-i-s-1235-причины';

export default FlexberryEnum.extend({
  enum: ПричиныEnum,
  sourceType: 'IIS.1235.Причины'
});
