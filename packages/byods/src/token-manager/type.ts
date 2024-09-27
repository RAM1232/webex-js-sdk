import {LOGGER} from '../Logger/types';
import {BYODSError} from '../Errors';

export interface LoggerConfig {
  level: LOGGER;
}

export interface BYODSConfig {
  logger?: LoggerConfig;
}

export type BYODSErrorEmitterCallback = (
  err: BYODSError,
  finalError?: boolean
) => void;

/**
 * An interface for the `CallingClient` module.
 * The `CallingClient` module is designed to provide a set of APIs related to line registration and calling functionalities within the SDK.
 *
 * @example
 * ```javascript
 * const callingClient = createClient(webex, callingConfig);
 * ```
 */

  /**
   * Represents the `mediaEngine for managing media-related operations within the CallingClient.
   * The media engine provides access to audio and video devices such as cameras, microphones, and speakers within the media layer.
   *
   * @public
   * @example
   * ```
   * const microphones = await callingClient.mediaEngine.Media.getMicrophones();
   * const speakers = await callingClient.mediaEngine.Media.getSpeakers();
   * const cameras = await callingClient.mediaEngine.Media.getCameras();
   * ```
   */

  /**
   * @ignore
   */
  getLoggingLevel(); LOGGER;

  /**
   * Retrieves details of the line object(s) belonging to a user.
   *
   * This method gathers all the {@link ILine}  objects and organizes them into a dictionary
   * where keys represent `lineId`s and values are arrays of {@link ILine} objects registered with
   * the `callingClient`
   *
   * @example
   * ```typescript
   * const lines = callingClient.getLines();
   * ```
   * The `lines` response object will have `lineId` as its key and
   * a list {@link ILine} objects as it's value.
   * ```
   * {
   *   'lineId1': lineObj1,
   *   'lineId2': lineObj2,
   * }
   * ```
   */
  // getLines(): Record<string, ILine>;

  /**
   * Retrieves a dictionary of active calls grouped by `lineId`.
   *
   * This method gathers active {@link ICall}  objects and organizes them into a dictionary
   * where keys represent `lineId`s and values are arrays of {@link ICall} objects of active calls associated
   * with each line.
   *
   * @example
   * ```typescript
   * const activeCalls = callingClient.getActiveCalls();
   * ```
   * The `activeCalls` response object will have `lineId` as its key and
   * a list {@link ICall} objects as it's value.
   *
   * ```
   * {
   *   'line1': [call1, call2],
   *   'line2': [call3],
   * }
   * ```
   */
  // getActiveCalls(): Record<string, ICall[]>;

  /**
   * Retrieves the {@link ICall} object for the currently connected call in the client.
   *
   * This method iterates through active call objects and returns the call
   * that is currently connected (not on hold).
   *
   * @example
   * ```typescript
   * const connectedCall : ICall = callingClient.getConnectedCall();
   * ```
   * The `connectedCall` object will be the Call object of the connected call with the client
   */
 // getConnectedCall(): ICall | undefined;

function getLoggingLevel() {
    throw new Error('Function not implemented.');
}

