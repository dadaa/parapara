/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

define([ 'underscore',
         'backbone',
         'views/base-view',
         'views/wall-grid-view',
         'webL10n',
         'text!templates/home-screen.html' ],
function(_, Backbone, BaseView, WallGridView, webL10n, template) {
  return BaseView.extend({
    el: $("#screen-home"),
    initialize: function() {
      this.wallGridView = new WallGridView({ collection: this.options.walls });
    },
    render: function() {
      this.renderTemplate(template, { walls: this.options.walls.toJSON() });
      this.renderSubview('#wallSummary', this.wallGridView);

      return this;
    }
  });
});
