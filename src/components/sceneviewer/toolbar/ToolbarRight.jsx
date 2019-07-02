import React from 'react';
import ModifyDataSource from '../ModifyDataSource/index';
import SearchBtn from '../SearchBtn/index';
import SelectionTool from '../SelectionTool/index';
import BaseMap from '../BaseMap/index';
import LightShadow from '../LightShadow/index';
import Measure3Dbutton from '../Measure3Dbutton/index';
import styles from './ToolbarRight.css';

const ToolbarRight = () => {
  return (
    <div className={styles['toolbar-right']}>
      {/* 修改数据源 */}
      <ModifyDataSource />
      {/* 搜索 */}
      <SearchBtn />
      {/* 框选 */}
      <SelectionTool />
      {/* 底图切换 */}
      <BaseMap />
      {/* 光照阴影 */}
      <LightShadow />

      <Measure3Dbutton />
    </div>
  );
};

export default ToolbarRight;
