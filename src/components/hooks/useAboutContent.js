import { usePortfolioData } from "./usePortfolioData";

export function useAboutContent() {
  return usePortfolioData().about;
}
