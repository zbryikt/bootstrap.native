import hasAttribute from '@thednp/shorty/src/attr/hasAttribute';
import getAttribute from '@thednp/shorty/src/attr/getAttribute';

import closest from '@thednp/shorty/src/selectors/closest';

/**
 * Checks if an *event.target* or its parent has an `href="#"` value.
 * We need to prevent jumping around onclick, don't we?
 *
 * @param {HTMLElement | HTMLAnchorElement | EventTarget} element the target element
 * @returns {boolean} the query result
 */
export default function isEmptyAnchor(element) {
  // @ts-ignore -- `EventTarget` must be `HTMLElement`
  const parentAnchor = closest(element, 'A');
  // @ts-ignore -- anchor href starts with #
  return element && ((hasAttribute(element, 'href') && getAttribute(element, 'href').slice(-1) === '#')
    // @ts-ignore -- OR a child of an anchor with href starts with #
    || (parentAnchor && hasAttribute(parentAnchor, 'href') && getAttribute(parentAnchor, 'href').slice(-1) === '#'));
}
