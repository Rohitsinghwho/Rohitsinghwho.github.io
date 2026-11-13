import { usePortfolioData } from "./usePortfolioData";

export function useProjects() {
  return usePortfolioData().projects;
}

export function useMoreRepos() {
  return usePortfolioData().moreRepos;
}
