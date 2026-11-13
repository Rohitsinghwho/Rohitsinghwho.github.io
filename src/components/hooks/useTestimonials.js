import { usePortfolioData } from "./usePortfolioData";

export function useTestimonials() {
  return usePortfolioData().testimonials;
}
