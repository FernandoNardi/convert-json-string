const ROOT_PATH = process.cwd();
const { toJson } = require(ROOT_PATH);
const { assert } = require('chai');

describe.only('unit test string to json. (positional string)', () => {
  const line = 'Jane Jhonson        38Country Test        Street Test         1234555659856314';

  const config = {
    type: 'positional',
    fields: [
      {
        name: 'name',
        start: 0,
        end: 19,
        length: 20
      }, {
        name: 'age',
        start: 20,
        end: 21,
        length: 2,
        type: 'number'
      }, {
        name: 'address.country',
        start: 22,
        end: 41,
        length: 20
      }, {
        name: 'address.street',
        start: 42,
        end: 61,
        length: 20
      }, {
        name: 'address.number',
        start: 62,
        end: 66,
        length: 5
      }, {
        name: 'phone.code',
        start: 67,
        end: 68,
        length: 2
      }, {
        name: 'phone.number',
        start: 69,
        end: 77,
        length: 9
      }
    ]
  };

  it('success convert string to json.', () => {
    const result = toJson(line, config);

    const resultExpected = {
      name: 'Jane Jhonson',
      age: 38,
      address: {
        country: 'Country Test',
        street: 'Street Test',
        number: '12345'
      },
      phone: {
        code: '55',
        number: '659856314'
      }
    };

    assert.deepEqual(result, resultExpected);
  });
});
