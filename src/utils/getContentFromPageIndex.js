export function getContentFromPageIndex(pages, pageIndex) {
  if (typeof pageIndex !== "number" || pageIndex >= Object.keys(pages).length)
    return false;
  return pages[pageIndex];
}
