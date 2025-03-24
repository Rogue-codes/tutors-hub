import { Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';

interface IPreloader{
  color?:string;
  size?:number;
}
export default function Preloader({color,size}:IPreloader) {
  return (
    <div className="flex justify-center items-center h-full">
      <Spin
        indicator={<LoadingOutlined style={{ fontSize: size || 40 , color: color || "#7050e7" }} spin />}
      />    
    </div>
  )
}
