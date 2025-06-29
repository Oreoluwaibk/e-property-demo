import { Card } from 'antd';
import React from 'react'

interface props {
    name: string;
    description: string;
}
const DescriptionCard = ({ name, description }: props) => {
  return (
    <Card variant="borderless" styles={{body: {display: "flex", flexDirection: "column", gap: 4, width: 300, backgroundColor: "#F2F4F7"}}}>
        <p className='text-2xl font-bold'>{name}</p>
        <p className='sm'>{description}</p>
    </Card>
  )
}

export default DescriptionCard