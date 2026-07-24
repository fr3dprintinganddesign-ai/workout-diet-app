// Replaces Claude.ai's built-in `window.storage` (only available inside the
// artifact sandbox) with an equivalent backed by real browser localStorage,
// so the rest of the app's code doesn't need to change at all.
// Note: this is per-browser storage — it will NOT sync between a user's
// phone and laptop. That requires a real backend + accounts down the line.
window.storage = {
  async get(key, _shared) {
    const raw = localStorage.getItem(key);
    if (raw === null) return null;
    return { key, value: raw, shared: !!_shared };
  },
  async set(key, value, _shared) {
    localStorage.setItem(key, value);
    return { key, value, shared: !!_shared };
  },
  async delete(key, _shared) {
    localStorage.removeItem(key);
    return { key, deleted: true, shared: !!_shared };
  },
  async list(prefix, _shared) {
    const keys = Object.keys(localStorage).filter((k) => !prefix || k.startsWith(prefix));
    return { keys, prefix, shared: !!_shared };
  },
};
