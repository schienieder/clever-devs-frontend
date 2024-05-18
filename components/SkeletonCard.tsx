import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

const SkeletonCard = () => {
  return (
    <Card className="md:w-[550px] p-3">
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[125px] w-full rounded-xl bg-slate-200/80" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px] md:w-[350px] bg-slate-200/80" />
          <Skeleton className="h-4 w-[200px] md:w-[300px] bg-slate-200/80" />
        </div>
      </div>
    </Card>
  );
};

export default SkeletonCard;
