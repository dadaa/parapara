<?php
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

require_once(dirname(__FILE__) . '/../../lib/parapara.inc');
require_once(dirname(__FILE__) . '/ParaparaUnitTestCase.php');
require_once('characters.inc');

class TestWalls extends ParaparaUnitTestCase {

  function __construct($name = false) {
    parent::__construct($name);
  }

  function setUp() {
    parent::setUp("Don't create test character");
  }

  function testGetSessionAndCharacters() {
    // TBD
  }
}

?>
