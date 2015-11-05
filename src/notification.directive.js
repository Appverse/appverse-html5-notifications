/*
 Copyright (c) 2015 GFT Appverse, S.L., Sociedad Unipersonal.
 This Source Code Form is subject to the terms of the Appverse Public License
 Version 2.0 (â€œAPL v2.0â€?). If a copy of the APL was not distributed with this
 file, You can obtain one at http://www.appverse.mobi/licenses/apl_v2.0.pdf. [^]
 Redistribution and use in source and binary forms, with or without modification,
 are permitted provided that the conditions of the AppVerse Public License v2.0
 are met.
 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 DISCLAIMED. EXCEPT IN CASE OF WILLFUL MISCONDUCT OR GROSS NEGLIGENCE, IN NO EVENT
 SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
 WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT(INCLUDING NEGLIGENCE OR OTHERWISE)
 ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 POSSIBILITY OF SUCH DAMAGE.
 */

(function(NotificationFx) {
    'use strict';

    /**
     * Muestra las notificaciones
     * cuando el servicio Notification.show() es llamado desde cualquier
     * parte de la aplicación
     */
    angular.module('appverse.notifications').directive('notification', notificationDirective);

    function notificationDirective(Notification) {

        return {
            link: link
        };

        // Para modificar el DOM, la directiva devuelve
        // una función link.
        function link(scope) {

            // Cuando la notificación cambia se muestra la notificacion
            scope.$watch(
                function watchedExpression() {
                    return Notification.shouldShow();
                },
                function onChange(shouldShow) {
                    if (shouldShow) {
                        showNotification(Notification.getData());
                    }
                }
            );

            function showNotification(notificationData) {
                // Crea la notificacion
                var notification = new NotificationFx({
                    message: '<span class="glyphicon glyphicon-info-sign"></span><p>' + notificationData.text + '</p>',
                    layout: 'bar',
                    effect: 'slidetop',
                    type: notificationData.type, // notice, warning or error
                    onClose: Notification.onClose()
                });
                // Muestra la notificacion
                notification.show();
            }
        }

    }

})(window.NotificationFx);
