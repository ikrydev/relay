/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

'use strict';

function createPrintRequireModuleDependency(
  extension: string,
): string => string {
  return moduleName => `require('./${moduleName}.${extension}')`;
}

module.exports = createPrintRequireModuleDependency;
