export function setInterval(time) {
  let interval;
  if (time === "1") {
    interval = "daily";
  } else if (time === "7") {
    interval = "daily";
  }
  return interval;
}
