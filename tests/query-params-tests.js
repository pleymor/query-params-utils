/*global require, define, test, expect, strictEqual, location */

if (typeof require === 'function' && require.config) {
    require.config({
        baseUrl: '../lib',
        paths: {
            //Path relative to baseUrl
            'query-params': '../query-params'
        }
    });
}

(function (root, factory) {
    'use strict';

    if (typeof define === 'function' && define.amd) {
        // AMD.
        define(['query-params'], factory);
    } else {
        // Browser globals
        factory(root.queryParams);
    }
}(this, function (queryParams) {
    'use strict';

    // TESTS OF putUrlParameter
    test('putUrlParameter(\'http://foo.bar\', \'key\', \'val\')', function () {
        expect(1);
        strictEqual(queryParams.putUrlParameter('http://foo.bar', 'key', 'val'),
            'http://foo.bar?key=val',
            'http://foo.bar?key=val');
    });

    test('putUrlParameter(\'http://foo.bar?a=b\', \'key\', \'val\')', function () {
        expect(1);
        strictEqual(queryParams.putUrlParameter('http://foo.bar?a=b', 'key', 'val'),
            'http://foo.bar?a=b&key=val',
            'http://foo.bar?a=b&key=val');
    });

    // TESTS OF putUrlParameters
    test('putUrlParameters(\'http://foo.bar\', [{key:\'key\', value:\'val\'}])', function () {
        expect(1);
        strictEqual(queryParams.putUrlParameters('http://foo.bar', [{key: 'key', value: 'val'}]),
            'http://foo.bar?key=val',
            'http://foo.bar?key=val');
    });

    test('putUrlParameters(\'http://foo.bar?a=b\', [{key:\'key\', value:\'val\'}])', function () {
        expect(1);
        strictEqual(queryParams.putUrlParameters('http://foo.bar?a=b', [{key: 'key', value: 'val'}]),
            'http://foo.bar?a=b&key=val',
            'http://foo.bar?a=b&key=val');
    });

    test('putUrlParameters(\'http://foo.bar\', [{key:\'key\', value:\'val\'},{key:\'foo\', value:\'bar\'}])', function () {
        expect(1);
        strictEqual(queryParams.putUrlParameters('http://foo.bar', [{key: 'key', value: 'val'}, {
                key: 'foo',
                value: 'bar'
            }]),
            'http://foo.bar?key=val&foo=bar',
            'http://foo.bar?key=val&foo=bar');
    });
}));
