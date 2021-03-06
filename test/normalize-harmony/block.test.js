'use strict';

const test = require('ava');
const normalize = require('../../lib/normalize-harmony');

test('should support block', t => {
    var block = { block: 'block' };

    t.deepEqual(normalize(block), [block]);
});

test('should support block as string', t => {
    t.deepEqual(normalize(['block']), [{ block: 'block' }]);
});
