import { Session } from "../../types";
import { FaCheck, FaCopy } from "react-icons/fa";

interface SessionListProps {
  sessions: Session[] | null | undefined;
  copyToClipboard: (link: string, index: number) => void;
  copiedIndex: number | null;
}

const SessionList: React.FC<SessionListProps> = ({
  sessions,
  copyToClipboard,
  copiedIndex,
}) => {
  return (
    <div className="min-h-screen text-gray-200 p-4">
      {sessions && sessions.length > 0 ? (
        <div className="w-full bg-gray-800 rounded-lg shadow-md overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-700 text-red-500">
                <th className="p-4">Title</th>
                <th className="p-4">Description</th>
                <th className="p-4">Session Link</th>
                <th className="p-4">Time</th>
              </tr>
            </thead>
            <tbody>
              {sessions.map((session, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-700 hover:bg-gray-700"
                >
                  <td className="p-4 text-gray-300">{session.title}</td>
                  <td className="p-4 text-gray-300">{session.description}</td>
                  <td className="p-4 text-red-400">
                    {/* <span className="break-all">{session.sessionLink}</span> */}
                    <button
                      onClick={() =>
                        copyToClipboard(session.sessionLink, index)
                      }
                      className={`transition-transform duration-300 focus:outline-none ${
                        copiedIndex === index
                          ? "text-green-500 transform scale-105" // Scale effect on copied
                          : "text-red-500 hover:text-red-600"
                      }`}
                    >
                      {copiedIndex === index ? (
                        <span className="flex items-center">
                          Link Copied <FaCheck className="ml-2" />
                        </span>
                      ) : (
                        <span className="flex items-center">
                          Copy Link <FaCopy className="ml-2" />
                        </span>
                      )}
                    </button>
                  </td>
                  <td className="p-4 text-gray-300">
                    {new Date(session.sessionTime).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-lg text-gray-300 mt-8">
          There is no Upcoming Session. We will update you soon.
        </p>
      )}
    </div>
  );
};

export default SessionList;
