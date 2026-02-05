import SortingIcon from '../../assets/hugeicons_sorting-a-z-02.svg';
import { evidenceDocuments, evidenceTableHeaders } from '../../data/mockData';

function EvidenceTable() {
    const documents = evidenceDocuments;
    const headers = evidenceTableHeaders;

    return (
        <div className="overflow-x-auto max-w-[37rem] lg:max-w-[42rem] xl:max-w-full">
           
                <table className="w-full" style={{ borderCollapse: 'separate', borderSpacing: 0 }}>
                    <thead>
                        <tr style={{ backgroundColor: '#F5F8FB' }}>
                            {headers.map((h, index) => (
                                <th
                                    key={h.key}
                                    className="text-left py-3 px-4 whitespace-nowrap"
                                    style={{
                                        color: '#1D3557',
                                        fontWeight: 400,
                                        fontSize: '12px',
                                        fontFamily: 'Cairo, sans-serif',
                                        borderTopLeftRadius: index === 0 ? '10px' : '0px',
                                        borderTopRightRadius: index === headers.length - 1 ? '10px' : '0px',
                                    }}
                                >
                                    <span className="inline-flex items-center gap-2">
                                        {h.label}
                                        <img
                                            src={SortingIcon}
                                            alt="Sort"
                                            className="w-3 h-3"
                                            style={{ opacity: 0.6 }}
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
                                <tr
                                    key={doc.number}
                                    style={{
                                        backgroundColor: '#FFFFFF',
                                    }}
                                >
                                    <td
                                        className={`py-3 px-4 whitespace-nowrap ${isLastRow ? 'rounded-bl-[10px]' : ''}`}
                                        style={{
                                            color: '#1D3557',
                                            fontSize: '14px',
                                            fontWeight: 400,
                                            fontFamily: 'Cairo, sans-serif',
                                            borderBottom: !isLastRow ? '1px solid #E0E8ED' : 'none',
                                            backgroundColor: '#FFFFFF',
                                        }}
                                    >
                                        {doc.number}
                                    </td>
                                    <td
                                        className="py-3 px-4 whitespace-nowrap"
                                        style={{
                                            color: '#1D3557',
                                            fontSize: '14px',
                                            fontWeight: 400,
                                            fontFamily: 'Cairo, sans-serif',
                                            borderBottom: !isLastRow ? '1px solid #E0E8ED' : 'none',
                                        }}
                                    >
                                        {doc.name}
                                    </td>
                                    <td
                                        className="py-3 px-4 whitespace-nowrap"
                                        style={{
                                            color: '#1D3557',
                                            fontSize: '14px',
                                            fontWeight: 400,
                                            fontFamily: 'Cairo, sans-serif',
                                            borderBottom: !isLastRow ? '1px solid #E0E8ED' : 'none',
                                        }}
                                    >
                                        {doc.lead}
                                    </td>
                                    <td
                                        className="py-3 px-4 whitespace-nowrap"
                                        style={{
                                            color: '#1D3557',
                                            fontSize: '14px',
                                            fontWeight: 400,
                                            fontFamily: 'Cairo, sans-serif',
                                            borderBottom: !isLastRow ? '1px solid #E0E8ED' : 'none',
                                        }}
                                    >
                                        {doc.preparer}
                                    </td>
                                    <td
                                        className="py-3 px-4 whitespace-nowrap"
                                        style={{
                                            color: '#1D3557',
                                            fontSize: '14px',
                                            fontWeight: 400,
                                            fontFamily: 'Cairo, sans-serif',
                                            borderBottom: !isLastRow ? '1px solid #E0E8ED' : 'none',
                                        }}
                                    >
                                        {doc.date}
                                    </td>
                                    <td
                                        className="py-3 px-4 whitespace-nowrap"
                                        style={{
                                            color: '#1D3557',
                                            fontSize: '14px',
                                            fontWeight: 400,
                                            fontFamily: 'Cairo, sans-serif',
                                            borderBottom: !isLastRow ? '1px solid #E0E8ED' : 'none',
                                        }}
                                    >
                                        {doc.dueDate}
                                    </td>
                                    <td
                                        className={`py-3 px-4 whitespace-nowrap ${isLastRow ? 'rounded-br-[10px]' : ''}`}
                                        style={{
                                            borderBottom: !isLastRow ? '1px solid #E0E8ED' : 'none',
                                            backgroundColor: '#FFFFFF',
                                        }}
                                    >
                                        <span
                                            className="inline-flex items-center justify-center rounded-full px-3 py-1"
                                            style={{
                                                backgroundColor: doc.status === 'Approved' ? '#34C7591A' : '#FFCC001A',
                                                color: doc.status === 'Approved' ? '#34C759' : '#FFCC00',
                                                fontSize: '14px',
                                                fontWeight: 400,
                                                fontFamily: 'Cairo, sans-serif',
                                            }}
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
