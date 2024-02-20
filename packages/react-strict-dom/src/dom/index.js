/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 */

import * as html from './html';
import * as css from '@stylexjs/stylex';
import { ThemeProvider } from './modules/ThemeContext';

const contexts = { ThemeProvider };

export { contexts, css, html };
