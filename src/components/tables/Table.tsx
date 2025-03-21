/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table } from "antd";

interface ITable{
  columns:  any;

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
