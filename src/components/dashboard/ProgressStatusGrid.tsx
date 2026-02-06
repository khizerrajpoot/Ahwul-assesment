import { useNavigate } from 'react-router-dom';
import { StatusCircle } from '../shared/StatusCircle';
import type { ProgressStatusGridProps } from '../../types/progressStatusGrid';

export const ProgressStatusGrid = ({ categories }: ProgressStatusGridProps) => {
    const navigate = useNavigate();

    const handleCategoryClick = (categoryId: string) => {
        navigate(`/details/${categoryId}`);
    };

    return (
        <div className="bg-white rounded-lg border border-gray-200 p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
                <h2 className="text-lg font-semibold text-[#1D3557]">Progress Status</h2>

                <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs">
                    <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-[#9CA3AF]"></div>
                        <span className="text-gray-600">Not Started</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-[#FBBF24]"></div>
                        <span className="text-gray-600">In Progress</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-[#10B981]"></div>
                        <span className="text-gray-600">Completed</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-[#3B82F6]"></div>
                        <span className="text-gray-600">Partially Uploaded</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-[#1E40AF]"></div>
                        <span className="text-gray-600">Fully Uploaded</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-[#EF4444]"></div>
                        <span className="text-gray-600">Delayed</span>
                    </div>
                </div>
            </div>

            <div className="overflow-x-auto -mx-4 sm:-mx-6 px-4 sm:px-6 mb-6">
                <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-10 gap-3 min-w-max sm:min-w-0">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="flex-shrink-0 sm:flex-shrink w-[140px] sm:w-auto"
                        >
                            <div
                                className="rounded-[10px] p-3 sm:p-4 flex flex-col cursor-pointer hover:opacity-90 transition-opacity bg-[#1D3557] text-white h-20 min-h-[110px]"
                                onClick={() => handleCategoryClick(category.id)}
                            >
                                <h3 className="text-[12px] font-medium text-center leading-4 text-white">
                                    {category.name}
                                </h3>
                                <div className="px-2 mt-auto mx-auto bg-[#FFFFFF1A] text-white w-fit rounded-[10px]">
                                    <span className="text-[10px] sm:text-xs font-medium">
                                        {category.progress === 100 ? '100%' : category.progress.toFixed(2) + '%'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-6 overflow-x-auto -mx-4 sm:-mx-6 px-4 sm:px-6">
                <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-10 gap-3 min-w-max sm:min-w-0 items-start ">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="flex flex-col gap-3 flex-shrink-0 sm:flex-shrink w-[140px] sm:w-auto h-full"
                        >
                            {category.subCategories.map((subCat) => (
                                <div
                                    key={subCat.id}
                                    className={`bg-white rounded-lg border border-[#E0E8ED] sm:p-4 flex flex-col justify-between ${
                                        (subCat.name === 'Business Processes' || subCat.name === 'Governance Platforms') 
                                            ? 'h-full' 
                                            : (subCat.name === 'Risk Management' || subCat.name === 'Business Continuity' || subCat.name === 'Service Quality' || subCat.name === 'Digital Channels' || subCat.name === 'Innovation' || subCat.name === 'Creative Solutions')
                                            ? 'h-[50%]'
                                            : 'min-h-[130px]'
                                    }`}
                                >
                                    <div className="text-[8px] sm:text-[9px] md:text-[10px] text-center font-normal text-[#1D3557]">
                                        {subCat.name}
                                    </div>
                                    <div 
                                        className="gap-2 justify-center"
                                        style={{
                                            display: 'grid',
                                            gridTemplateColumns: subCat.name === 'Support Systems'
                                                ? 'repeat(3, 1fr)' :
                                                subCat.name === 'Service Quality' 
                                                ?'repeat(2, 1fr)' 
                                                : subCat.items.length === 3 
                                                ? 'repeat(3, 1fr)' 
                                                : subCat.items.length === 4 
                                                ? 'repeat(2, 1fr)' 
                                                : subCat.items.length === 5 
                                                ? 'repeat(2, 1fr)' 
                                                : subCat.items.length === 7
                                                ? 'repeat(3, 1fr)'
                                                : subCat.items.length <= 2
                                                ? 'repeat(2, 1fr)'
                                                : 'repeat(auto-fit, minmax(24px, 1fr))',
                                        }}
                                    >
                                        {subCat.items.map((item) => (
                                            <StatusCircle key={item.number} number={item.number} status={item.status} />
                                        ))}
                                    </div>
                                    {(subCat.name === 'Business Processes' || subCat.name === 'Governance Platforms' || subCat.name === 'Service Quality' || subCat.name === 'Digital Channels' || subCat.name === 'Innovation') && (
                                        <div></div>
                                    )}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};