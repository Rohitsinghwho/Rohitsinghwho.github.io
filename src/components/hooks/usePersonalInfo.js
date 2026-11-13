import { usePortfolioData } from "./usePortfolioData";

export function usePersonalInfo() {
  return usePortfolioData().personal;
}
