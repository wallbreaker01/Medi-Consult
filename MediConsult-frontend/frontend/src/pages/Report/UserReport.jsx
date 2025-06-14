import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { TbGenderBigender } from "react-icons/tb";
import ReactMarkdown from "react-markdown";
import QRCode from "react-qr-code";
import { assets } from '../../assets/assets'
import { useSelector } from 'react-redux';

const UserReport = () => {
  const user = useSelector(state => state.user);
  const reportID = 65416163516;
  const qr = `https://pulsegen.xyz/report/${reportID}`;
  const name = `${user.name}`;
  const age = `${user.age}`;
  const gender = `${user.gender}`;
  const address = `${user.address}`;
  const date = "2024-04-03";
  const number = "01234567891";
  const email = "N/A";
  const c_c = ` * **C/C** - 1\n  * C/C - 2\n  * C/C - 3\n  * C/C - 4\n * da `;
  const history = ` * **History** - 1\n  * History - 2\n  * __History__ - 3\n  * History - 4 `;
  const summary = ` * **Summary** - 1\n  * Summary - 2\n  * Summary - 3\n  * Summary - 4 `;

  // Custom components for ReactMarkdown to handle styling
  const markdownComponents = {
    li: ({node, ...props}) => <li className="m-0" {...props} />,
    strong: ({node, ...props}) => <strong className="font-bold" {...props} />,
    em: ({node, ...props}) => <em className="italic" {...props} />,
    // Add other elements as needed
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center m-8 lg:mx-24">
        <header className="flex flex-row justify-between items-center w-full m-2">
          <div className="flex flex-col">
            <div className="flex flex-row items-center">
              <img
                src={assets.logo2}
                alt="icon"
                className="h-24 w-24 object-contain"
              />
            </div>
            <h4 className="text-2xl font-semibold text-primary mt-1">
              Primary Diagnostic Report
            </h4>
          </div>
          <div>
            <QRCode
              size={140}
              style={{ height: "auto", maxWidth: "100%", width: "100%" }}
              value={qr}
              viewBox={`0 0 256 256`}
            />
          </div>
        </header>
        {/* date & ID */}
        <div className="flex justify-between w-full border-b-2 border-t-2 py-2 border-secondary">
          <p>
            <strong className="text-primary">Date: </strong>
            {date}
          </p>
          <p>
            <strong className="text-primary">Report ID: </strong>
            {reportID}
          </p>
        </div>
        {/* patient info */}
        <div className="flex w-full justify-between items-end">
          <div>
            <p className="font-medium text-xl">{name}</p>
            <p>{age} years</p>
            <p className="flex items-center">
              <TbGenderBigender />
              <strong className="mr-1">:</strong>
              {gender}
            </p>
          </div>
          {/* div at right with everything in it align in right */}
          <div className="flex flex-col items-end">
            <p className="flex items-center">
              +88
              {number}
            </p>
            <p className="flex items-center">
              {address}
              <FaLocationDot className="ml-1" />
            </p>
            <p className="flex items-center">
              {email}
              <SiGmail className="ml-1" />
            </p>
          </div>
        </div>
        {/* C/C & History */}
        <div className="flex w-full">
          {/* C/C */}
          <div className="flex flex-col items-start w-1/2 m-4 bg-neutral p-4 rounded-lg">
            <h2 className="text-xl font-extrabold underline underline-offset-2 text-primary">
              C/C:
            </h2>
            <ReactMarkdown components={markdownComponents}>
              {c_c}
            </ReactMarkdown>
          </div>
          {/* History */}
          <div className="flex flex-col items-start w-1/2 m-4 bg-neutral p-4 rounded-lg">
            <h2 className="text-xl font-extrabold underline underline-offset-2 text-primary">
              History:
            </h2>
            <ReactMarkdown components={markdownComponents}>
              {history}
            </ReactMarkdown>
          </div>
        </div>
        {/* Summary */}
        <div className="flex w-full flex-col items-start m-4 bg-neutral p-4 rounded-lg">
          <h2 className="text-xl font-extrabold underline underline-offset-2 text-primary">
            Summary:
          </h2>
          <ReactMarkdown components={markdownComponents}>
            {summary}
          </ReactMarkdown>
        </div>
        {/* footer */}
        <div className="flex text-primary items-center p-2 w-full border-double border-primary border-4 text-sm mt-8 justify-self-end">
          <strong className="mr-2">N.B.</strong>
          <p className="flex items-center border-l-2 border-primary pl-2">
            This AI-generated report is for preliminary guidance only and should
            not replace professional medical consultation. Always seek the
            advice of a qualified healthcare provider for proper diagnosis and
            treatment.
          </p>
        </div>
      </div>
      <button
        onClick={() => window.print()}
        className="bg-primary text-white p-2 rounded-lg m-4"
      >
        Print/Download
      </button>
    </div>
  );
};

export default UserReport;