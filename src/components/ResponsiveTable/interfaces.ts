export interface ResponsiveTableProps {
  headers: string[];
  data: any[];
  customActionColumn?: (row: any) => React.ReactNode;
}
