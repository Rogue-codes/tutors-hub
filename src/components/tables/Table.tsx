/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table } from "antd";
import { JSX } from "react/jsx-dev-runtime";

interface ITable{
  columns:  {
    title: string;
    dataIndex: string;
    key: string;
    render?: (status: any) => JSX.Element;
}[];

data: {
  key: string;
  name: string;
  course: string;
  date: string;
  status: string;
}[]
}


const MyTable = ({columns,data}:ITable) => {
  return <Table columns={columns} dataSource={data} />;
};

export default MyTable;
