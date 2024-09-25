export default function timeTillEndOfDay() {
  const now = new Date();
  const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  const ttl = endOfDay.getTime() - now.getTime();

  return ttl;
}
