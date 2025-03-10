export function setLocalStorageWithExpiry(key: string, value: string, ttl: number) {
  const now = new Date();

  const item = {
    expiry: now.getTime() + ttl,
    value,
  };
  localStorage.setItem(key, JSON.stringify(item));
}

export function getLocalStorageWithExpiry(key: string) {
  const itemStr = localStorage.getItem(key);

  if (!itemStr) {
    return null;
  }

  const item = JSON.parse(itemStr);
  const now = new Date();

  if (now.getTime() > item.expiry) {
    localStorage.removeItem(key);

    return null;
  }

  return item.value;
}
