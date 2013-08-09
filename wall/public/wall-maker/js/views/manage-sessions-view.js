/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

define([ 'underscore',
         'backbone',
         'webL10n',
         'views/soma-view',
         'text!templates/manage-sessions-view.html' ],
function(_, Backbone, webL10n, SomaView, templateString) {

  return SomaView.extend({
    initialize: function() {
      // Register for updates to the list of characters
      this.listenTo(this.model.sessions, "sync", this.update);
    },

    render: function() {
      // Render template
      this.renderTemplate(templateString, this.getData());

      return this;
    },

    update: function() {
      if (this.template) {
        _.extend(this.template.scope, this.getData());
        this.template.render();
      }
    },

    getData: function() {
      var data = {
        charactersLoaded: this.model.charactersLoaded,
        wall: this.model.toJSON(),
        sessions: []
      };

      if (this.model.charactersLoaded) {
        data.sessions =
          _.chain(this.model.sessions.toJSON())
           // Annotate every sessions object with 'running' property
           .map(function(session) {
                  session.running = session.end === null;
                  return session;
                })
           // Reverse the list of sessions so newer ones appear first
           .reverse()
           .value();
        ;
      }
      return data;
    },
  });
});