/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */

/**
 * @deprecated see https://github.com/cloukit/icon
 *
 * Cloukit Icons
 *
 * An icon consists of exactly one path inside a 512x512 pixel viewbox.
 * If you want to inject your own icons keep that in mind.
 * Draw you icons in a way and use "combine-path" or "convert to outlines" tools
 * to create a single path.
 *
 * Your icons svg code should look like this:
 *
 * ```html
 * <svg viewBox="0 0 512 512">
 *     <path d="M23233....." ></path>
 * </svg>
 * ```
 */
export class CloukitIcons {
  public static success = 'M379.363 141.12l-173.19 173.19-73.538-73.54-28.284 28.286 73.54 73.54 28.284 28.283 201.474-201.475';
  public static failure = 'M370.88 169.405l-28.286-28.284L256 227.716l-86.594-86.594-28.285 28.285L227.716 256l-86.594 86.595 28.285 28.284L256 284.283l86.596 86.595 28.283-28.285L284.283 256';
}
