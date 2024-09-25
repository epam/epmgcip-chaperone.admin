import timeTillEndOfDay from "../utils/date";
import {
  getLocalStorageWithExpiry,
  setLocalStorageWithExpiry,
} from "../utils/localStorageWithExpiry";

export default function triggerGtagVisit(exhibitId: string, slug: string, lang: string) {
  const isTriggered = getLocalStorageWithExpiry("gtagStartVisitTriggered") === "true";

  if (!isTriggered) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "start_visit",
      exhibit_id: exhibitId,
      item_url_name: slug,
      item_url_path: lang,
    });

    setLocalStorageWithExpiry("gtagStartVisitTriggered", "true", timeTillEndOfDay());
  } else {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "start_revisit",
      exhibit_id: exhibitId,
      item_url_name: slug,
      item_url_path: lang,
    });
  }
}
