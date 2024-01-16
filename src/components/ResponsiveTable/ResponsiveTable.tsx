// src/components/ResponsiveTable/ResponsiveTable.tsx
import React from "react";
import "./styles.css";
import { ResponsiveTableProps } from "./interfaces";

export const ResponsiveTable: React.FC<ResponsiveTableProps> = ({
  headers,
  data,
}) => {
  return (
    <div className="responsive-table">
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((rowData, rowIndex) => (
            <tr key={rowIndex}>
              {headers.map((header, colIndex) => (
                <td key={colIndex}>{rowData[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
