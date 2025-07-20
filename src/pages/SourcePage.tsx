import SourceCard from "../components/SourceCard";
import Topbar from "../components/Topbar";

const SourcePage = () => {
  return (
    <div className="flex-1 overflow-y-auto bg-gray-100">
      <Topbar />
      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 9 }).map((_, idx) => (
          <SourceCard key={idx} />
        ))}
      </div>
    </div>
  );
};

export default SourcePage;
