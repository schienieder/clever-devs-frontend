import React, { useEffect } from "react";
import JobCard from "@/components/JobCard";
import { useJobPostingStore } from "@/store/jobPostingStore";
import SkeletonCard from "@/components/SkeletonCard";
import { Card, CardDescription } from "@/components/ui/card";

export interface IJobPosting {
  job_title: string;
  job_type: string;
  job_author: string;
  job_posted_date: string;
  job_budget: string;
  job_link: string;
}

const HomePage = () => {
  const { getJobPostings, jobPostings, isJobPostingLoading } =
    useJobPostingStore();

  useEffect(() => {
    getJobPostings();
  }, []);

  if (isJobPostingLoading) {
    return (
      <div className="flex justify-center p-8 mt-20">
        <SkeletonCard />
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center gap-y-8 p-8 mt-20">
      {!isJobPostingLoading &&
        jobPostings.length > 0 &&
        jobPostings.map((jobPosting: IJobPosting, index: number) => {
          return (
            <JobCard
              key={`${jobPosting.job_title}-${jobPosting.job_posted_date}-${
                index + 1
              }`}
              jobPosting={jobPosting}
            />
          );
        })}
    </div>
  );
};

export default HomePage;
