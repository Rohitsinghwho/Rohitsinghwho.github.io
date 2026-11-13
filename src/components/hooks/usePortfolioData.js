import { useEffect, useState } from "react";
import fallback from "../../data/portfolioData";

const PROJECT_ID = import.meta.env.VITE_FIREBASE_PROJECT_ID;
const URL = PROJECT_ID
  ? `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/portfolio/main`
  : null;

// Firestore REST returns typed values ({ stringValue }, { arrayValue }, ...); turn them into plain JSON.
function decode(v) {
  if ("stringValue" in v) return v.stringValue;
  if ("integerValue" in v) return Number(v.integerValue);
  if ("doubleValue" in v) return v.doubleValue;
  if ("booleanValue" in v) return v.booleanValue;
  if ("nullValue" in v) return null;
  if ("arrayValue" in v) return (v.arrayValue.values ?? []).map(decode);
  if ("mapValue" in v) return decodeFields(v.mapValue.fields ?? {});
  return undefined;
}
const decodeFields = (f) => Object.fromEntries(Object.entries(f).map(([k, v]) => [k, decode(v)]));

let cached = null;
let inflight = null;

function load() {
  if (!URL) return Promise.resolve(null);
  inflight ??= fetch(URL)
    .then((r) => (r.ok ? r.json() : Promise.reject(new Error(r.status))))
    .then((doc) => (cached = { ...fallback, ...decodeFields(doc.fields) }))
    .catch(() => null);
  return inflight;
}

// Reads from Firestore; falls back to the bundled static data if unreachable.
export function usePortfolioData() {
  const [data, setData] = useState(cached ?? fallback);
  useEffect(() => {
    let live = true;
    load().then((d) => live && d && setData(d));
    return () => { live = false; };
  }, []);
  return data;
}
