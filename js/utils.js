export function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.substring(1);
}

export function getRandomArrayItem (a) {
  return a[Math.floor(Math.random() * a.length)];
}