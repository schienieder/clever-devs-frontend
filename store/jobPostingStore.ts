import { jobsConnection } from "@/lib/connection";
import { IJobPosting } from "@/pages/HomePage";
import { create } from "zustand";

interface UseJobPostingStore {
  jobPostings: IJobPosting[];
  isJobPostingLoading: boolean;
  getJobPostings(): void;
}

export const useJobPostingStore = create<UseJobPostingStore>((set) => ({
  jobPostings: [],
  isJobPostingLoading: false,
  getJobPostings: async () => {
    set({ isJobPostingLoading: true });
    const { data } = await jobsConnection.get("/api/getJobPostings");

    if (Boolean(data?.jobs)) {
      set({ jobPostings: data?.jobs, isJobPostingLoading: false });
      return;
    }

    set({ jobPostings: [], isJobPostingLoading: false });
  },
}));
