import {type} from './type';

describe('type', () => {

  it('will have a useful description', () => {

    let validAction = {
      ALL: type(('valid - All')),
      TYPES: type(('valid - TYPES')),
      MUST: type(('valid - MUST')),
      BE: type(('valid - BE')),
      UNIQUE: type(('valid - UNIQUE'))
    };

    expect(validAction.UNIQUE).toEqual('valid - UNIQUE');
  });


  describe('when duplicates are defined', () => {

    it('will throw a meaningful error', () => {
      expect(() => {
        let invalidAction = {
          DUPLICATE: type(('invalid - DUPLICATE')),
          LOOK_ALIKE: type(('invalid - DUPLICATE'))
        }
      }).toThrow(new Error('Action type "invalid - DUPLICATE" is not unique'));
    });
  });

});
