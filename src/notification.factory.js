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
(function() {
    'use strict';

    angular.module('appverse.notifications')

    /**
     * Muestra notificaciones.
     * Se conecta con la vista a través de la directiva <div notification></div> (en index.html)
     */
    .factory('Notification', function() {

        // Datos iniciales de la notificacion
        var showStatus = false;
        var data = initData();

        return {

            /**
             * Muestra una notificación. Se actualizará la vista en el próximo ciclo digest
             * @param  {object} object {text:'...' , type:'notice|warning|error' }
             */
            show: function show(object) {
                showStatus = true;
                data = object;
            },

            /**
             * Función que evalúa la directiva en cada ciclo de digest para
             * determinar si se debería mostrar la notifiacion
             * return {[type]} [description]
             */
            shouldShow: function shouldShow() {
                return showStatus;
            },

            getData: function getData() {
                return data;
            },

            onClose: function onClose() {
                showStatus = false;
                data = initData();
            }
        };

        function initData() {
            return {
                text: '',
                type: 'notice' // notice, warning or error
            };
        }
    });

})();