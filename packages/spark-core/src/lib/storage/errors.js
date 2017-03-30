/**!
 *
 * Copyright (c) 2015-2017 Cisco Systems, Inc. See LICENSE file.
 */

import {Exception} from '@ciscospark/common';

/**
 * General storage layer error
 */
export class StorageError extends Exception {}

/**
 * StorageError thrown when the storage layer does not contain the request key
 */
export class NotFoundError extends StorageError {}
