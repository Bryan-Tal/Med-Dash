import { memo } from 'react'
import { Card, Tag } from 'antd'
import SvgIcon from '~/components/SvgIcon'

const CloseButton = ({ onClose }) => <SvgIcon iconName="close" onClick={onClose} />

const ShowData = memo(({ data, onClose }) => {
  function onCloseClick(id) {
    onClose(id)
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {data.map(({ title, id, color, list }) => (
        <Card
          title={title}
          bordered={false}
          key={id}
          extra={<CloseButton onClose={() => onCloseClick(id)} />}
        >
          {list.map(({ title: innerTitle, desc: innerDesc, percent }, idx) => (
            <div className="flex justify-between items-center mb-2" key={idx}>
              <span>{innerTitle}</span>
              <Tag className="px-4" color={color}>
                {percent}
              </Tag>
            </div>
          ))}
        </Card>
      ))}
    </div>
  )
})

export default ShowData
