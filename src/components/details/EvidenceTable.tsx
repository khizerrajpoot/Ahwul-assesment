import SortingIcon from '../../assets/hugeicons_sorting-a-z-02.svg';
import { evidenceDocuments, evidenceTableHeaders } from '../../data/mockData';

function EvidenceTable() {
    const documents = evidenceDocuments;
    const headers = evidenceTableHeaders;

    return (
        <div className="overflow-x-auto max-w-[37rem] lg:max-w-[42rem] xl:max-w-full">
            <table className="w-full border-separate border-spacing-0">
                <thead>
                    <tr className="bg-[#F5F8FB]">
                        {headers.map((h, index) => (
                            <th
                                key={h.key}
                                className={`text-left py-3 px-4 whitespace-nowrap text-[12px] font-normal text-[#1D3557] ${
                                    index === 0 ? 'rounded-tl-[10px]' : ''
                                } ${
                                    index === headers.length - 1 ? 'rounded-tr-[10px]' : ''
                                }`}
                                style={{ fontFamily: 'Cairo, sans-serif' }}
                            >
                                <span className="inline-flex items-center gap-2">
                                    {h.label}
                                    <img
                                        src={SortingIcon}
                                        alt="Sort"
                                        className="w-3 h-3 opacity-60"
                                    />
                                </span>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {documents.map((doc, index) => {
                        const isLastRow = index === documents.length - 1;
                        return (
                            <tr key={doc.number} className="bg-white">
                                <td
                                    className={`py-3 px-4 whitespace-nowrap text-[14px] font-normal text-[#1D3557] bg-white ${
                                        isLastRow ? 'rounded-bl-[10px]' : 'border-b border-[#E0E8ED]'
                                    }`}
                                    style={{ fontFamily: 'Cairo, sans-serif' }}
                                >
                                    {doc.number}
                                </td>
                                <td
                                    className={`py-3 px-4 whitespace-nowrap text-[14px] font-normal text-[#1D3557] ${
                                        !isLastRow ? 'border-b border-[#E0E8ED]' : ''
                                    }`}
                                    style={{ fontFamily: 'Cairo, sans-serif' }}
                                >
                                    {doc.name}
                                </td>
                                <td
                                    className={`py-3 px-4 whitespace-nowrap text-[14px] font-normal text-[#1D3557] ${
                                        !isLastRow ? 'border-b border-[#E0E8ED]' : ''
                                    }`}
                                    style={{ fontFamily: 'Cairo, sans-serif' }}
                                >
                                    {doc.lead}
                                </td>
                                <td
                                    className={`py-3 px-4 whitespace-nowrap text-[14px] font-normal text-[#1D3557] ${
                                        !isLastRow ? 'border-b border-[#E0E8ED]' : ''
                                    }`}
                                    style={{ fontFamily: 'Cairo, sans-serif' }}
                                >
                                    {doc.preparer}
                                </td>
                                <td
                                    className={`py-3 px-4 whitespace-nowrap text-[14px] font-normal text-[#1D3557] ${
                                        !isLastRow ? 'border-b border-[#E0E8ED]' : ''
                                    }`}
                                    style={{ fontFamily: 'Cairo, sans-serif' }}
                                >
                                    {doc.date}
                                </td>
                                <td
                                    className={`py-3 px-4 whitespace-nowrap text-[14px] font-normal text-[#1D3557] ${
                                        !isLastRow ? 'border-b border-[#E0E8ED]' : ''
                                    }`}
                                    style={{ fontFamily: 'Cairo, sans-serif' }}
                                >
                                    {doc.dueDate}
                                </td>
                                <td
                                    className={`py-3 px-4 whitespace-nowrap bg-white ${
                                        isLastRow ? 'rounded-br-[10px]' : 'border-b border-[#E0E8ED]'
                                    }`}
                                >
                                    <span
                                        className={`inline-flex items-center justify-center rounded-full px-3 py-1 text-[14px] font-normal ${
                                            doc.status === 'Approved' 
                                                ? 'bg-[#34C7591A] text-[#34C759]' 
                                                : 'bg-[#FFCC001A] text-[#FFCC00]'
                                        }`}
                                        style={{ fontFamily: 'Cairo, sans-serif' }}
                                    >
                                        {doc.status}
                                    </span>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default EvidenceTable
