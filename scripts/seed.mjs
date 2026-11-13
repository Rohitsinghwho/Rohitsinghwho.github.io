// Usage: GOOGLE_APPLICATION_CREDENTIALS=key.json node scripts/seed.mjs
// Writes src/data/portfolioData.js into Firestore document portfolio/main.
import { initializeApp, applicationDefault } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import portfolioData from "../src/data/portfolioData.js";

initializeApp({ credential: applicationDefault() });
await getFirestore().collection("portfolio").doc("main").set(JSON.parse(JSON.stringify(portfolioData)));
console.log("seeded portfolio/main");
