export const fetcher = (url) => fetch(url).then((r) => r.json());
export const fetcherWithTags = (url, page) =>
  fetch(url, {
    method: "POST",
    body: page,
  }).then((r) => r.json());
