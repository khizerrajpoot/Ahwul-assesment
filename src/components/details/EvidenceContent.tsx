import EvidenceTable from "./EvidenceTable";
import { CommentsSection } from "./CommentsSection";
import { comments, recentActivitiesList } from "../../data/mockData";
import { RecentActivitiesWidget } from "../dashboard/RecentActivitiesWidget";

export const EvidenceContent = () => {
  return (
    <>
    <div className="bg-white rounded-lg border p-6  " style={{ borderColor: '#E0E8ED' }}>
      <EvidenceTable  />
    </div>
    <div className="flex flex-col xl:flex-row gap-6 mt-4">
      <div className="w-full xl:w-[60%]">
        <div className="bg-white rounded-lg border p-6" style={{ borderColor: '#E0E8ED' }}>
          <CommentsSection comments={comments} />
        </div>
      </div>
      <div className="w-full xl:w-[40%]">
        <div className="bg-white rounded-lg border p-6" style={{ borderColor: '#E0E8ED' }}>
          <div className="space-y-6">
            <RecentActivitiesWidget activities={recentActivitiesList} />
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
