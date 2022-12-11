// import {getWindow} from '@thednp/shorty';
import { isNode, isArray, isFunction, isString, isNodeList, isHTMLElement } from '@thednp/shorty';

/**
 * Append an existing `Element` to Popover / Tooltip component or HTML
 * markup string to be parsed & sanitized to be used as popover / tooltip content.
 *
 * @param element target
 * @param content the `Element` to append / string
 * @param sanitizeFn a function to sanitize string content
 */
const setHtml = (element: Node, content: Node[] | Node | string, sanitizeFn?: (s: string) => string) => {
  /* istanbul ignore next */
  if (!isHTMLElement(element) || (isString(content) && !content.length)) return;

  /* istanbul ignore else */
  if (isString(content)) {
    let dirty = content.trim(); // fixing #233
    if (isFunction(sanitizeFn)) dirty = sanitizeFn(dirty);

    // const win = getWindow(element);
    const domParser = new DOMParser();
    const tempDocument = domParser.parseFromString(dirty, 'text/html');
    element.append(...[...tempDocument.body.childNodes]);
  } else if (isHTMLElement(content)) {
    element.append(content);
  } else if (isNodeList(content) || (isArray(content) && content.every(isNode))) {
    element.append(...[...content]);
  }
};
export default setHtml;
