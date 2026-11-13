import portfolioData from "../../data/portfolioData";

export function usePortfolioData() {
  // TODAY: static data. TOMORROW: swap for React Query / fetch / CMS — components stay untouched.
  return portfolioData;
}
