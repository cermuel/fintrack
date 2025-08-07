import { FaEllipsis } from "react-icons/fa6";
import { helper } from "../../../utils/helpers";

interface DashboardSummaryCardProps {
  title: string;
  total: number;
  change: number;
  shouldFormat?: boolean;
}

const DashboardSummaryCard = ({
  title,
  total,
  change,
  shouldFormat,
}: DashboardSummaryCardProps) => {
  return (
    <div className="w-full bg-[#34616F16] rounded-[20px] max--[222px] gap-5 flex flex-col justify-between p-5">
      <div className="text-[#1B2528] flex justify-between items-center">
        <h1 className="md:text-lg font-bold">{title}</h1>
        <FaEllipsis />
      </div>
      <div className="flex flex-col text-[#1B2528] ">
        <h1 className="text-xl md:text-3xl font-bold">
          {shouldFormat ? helper.formatDollar(total) : total}
        </h1>
        <p className="md:text-sm font-medium text-[#3E7383] mt-0.5">
          +{change}%
        </p>
      </div>
    </div>
  );
};

export default DashboardSummaryCard;
