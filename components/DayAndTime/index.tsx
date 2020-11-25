import React, { useState } from 'react';
import './index.less';
import { Moment } from 'moment';
import { DatePicker, Radio, TimePicker, Select, Space } from 'antd';
const { RangePicker } = DatePicker;
interface Props {
  /**
   * props 描述
   */
  onChange?: (data: any, dateString: any) => void;
}

/**
 * DayAndTime 组件
 */
function PickerWithType({ type, value, onChange, renderExtraFooter }) {
  return (
    <RangePicker
      picker={type}
      value={value}
      onChange={onChange}
      renderExtraFooter={renderExtraFooter}
    />
  );
}
function DayAndTime(props: Props) {
  const [type, setType] = useState('date');
  const [time, setTime] = useState(null);

  const handleSizeChange = (e: any) => {
    const newType = time == 'date' ? 'date' : 'month';
    setType(newType);
    setTime(null);
  };
  const handleChange = (date: any, dateString: any) => {
    setTime(date)
    const { onChange } = props;
    if (onChange) {
      onChange(date, dateString);
    }
  };
  return (
    <div className="DayAndTime">
      <PickerWithType
        type={type}
        value={time}
        onChange={handleChange}
        renderExtraFooter={() => (
          <Radio.Group onChange={handleSizeChange}>
            <Radio value={'日'} key={'日'}>
              日
            </Radio>
            <Radio value={'月'} key={'月'}>
              月
            </Radio>
          </Radio.Group>
        )}
      />
    </div>
  );
}

export default DayAndTime;
