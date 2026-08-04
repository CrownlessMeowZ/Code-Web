/**
 * Safe localStorage helpers for private mode, disabled storage, and quota errors.
 */

/**
 * @param {string} key
 * @param {string | null} [fallback=null]
 * @returns {string | null}
 */
export function readStorage(key, fallback = null) {
  try {
    const value = localStorage.getItem(key);
    return value === null ? fallback : value;
  } catch {
    return fallback;
  }
}

/**
 * @param {string} key
 * @param {string} value
 * @returns {boolean} true if write succeeded
 */
export function writeStorage(key, value) {
  try {
    localStorage.setItem(key, value);
    return true;
  } catch {
    return false;
  }
}
