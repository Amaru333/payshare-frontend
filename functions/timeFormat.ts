import moment from "moment";

export function formatDateTime(dateTimeString: string) {
  const date = moment(dateTimeString);
  const now = moment();

  const diffMinutes = now.diff(date, "minutes");
  const diffHours = now.diff(date, "hours");

  if (diffMinutes < 60) {
    const minuteText = diffMinutes === 1 ? "minute" : "minutes";
    return `${diffMinutes} ${minuteText} ago`;
  } else if (diffHours < 24) {
    const hourText = diffHours === 1 ? "hour" : "hours";
    return `${diffHours} ${hourText} ago`;
  } else {
    return date.local().format("MMM D, YYYY [at] h:mm a");
  }
}
