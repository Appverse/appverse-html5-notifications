/*jshint expr:true, node:true */
/*globals module:false */

'use strict';

describe('Unit: Testing appverse.notifications module', function() {
    var NotificationFactory, $compile, scope;

    beforeEach(module('appverse.notifications'));

    beforeEach(inject(function(Notification, _$compile_, $rootScope) {
        NotificationFactory = Notification;
        $compile = _$compile_;
        scope = $rootScope;
    }));

    it('should be have a working Notification factory', function() {
        expect(NotificationFactory).to.be.an.object;
        expect(NotificationFactory.shouldShow()).to.be.false;
    });

    it('should be have a working notification directive', function() {
        $compile(angular.element('<div notification></div>'))(scope);
        NotificationFactory.show('test message');
        expect(NotificationFactory.shouldShow()).to.be.true;
    });

});
