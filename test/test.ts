import test = require('blue-tape');

import parser = require('xml2json');

let xml = '<foo attr="value">bar</foo>';

test('roundtrip', t => {
  const json = parser.toJson(xml);
  const actual = parser.toXml(json);
  t.is(actual, xml);
  t.end();
});
