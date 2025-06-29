import { Card, Button } from 'antd';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { BG2, BG3 } from '../../../assets';

interface Props {
  name: string;
  description: string;
  features: string[];
  buttonTitle: string;
  title: string;
}

export const ListingCards = ({ name, description, features, buttonTitle, title }: Props) => {
  const [hovered, setHovered] = useState(false);

  return (
<motion.div
    onHoverStart={() => setHovered(true)}
    onHoverEnd={() => setHovered(false)}
    initial="rest"
    animate={hovered ? "hover" : "rest"}
    className="overflow-hidden rounded-xl shadow-md"
    style={{backgroundColor: 'rgb(242, 244, 247, 0.2)',}}
>
    <Card
        variant="borderless"
        styles={{body: {
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
            // width: 300,
            backgroundColor: 'rgb(242, 244, 247, 0.2)',
            padding: "40px 40px 10px",
            minHeight: 420,
            position: 'relative',
            // backgroundImage: `url(${BG2.src})`,
            // backgroundPosition: "center",
            // backgroundSize: "cover",
            // backgroundBlendMode: "mul"
        }}}
        style={{backgroundColor: 'rgb(242, 244, 247, 0.2)',}}
        >
        <motion.p
            className="text-2xl font-bold"
            variants={{
                rest: { y: 50 },
                hover: { y: -70 },
                click: {y: -70}
            }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
            {name}
        </motion.p>

        <motion.div
            variants={{
                rest: { opacity: 0, y: 20 },
                hover: { opacity: 1, y: -50 },
                click: { opacity: 1, y: -50 },
            }}
            transition={{ delay: 0.1, duration: 0.4 }}
            style={{ pointerEvents: hovered ? 'auto' : 'none' }}
            className='flex flex-col gap-2'
        >
            <p className="text-xl font-semibold">{title}</p>
            <p className="text-sm">{description}</p>
            <ul className="mt-2 list-disc pl-5 text-sm">
                {features.map((f, i) => (
                <li key={i}>{f}</li>
                ))}
            </ul>
            <div className="mt-4">
                <Button type="primary" style={{backgroundColor: "#001529", width: 200}}>{buttonTitle}</Button>
            </div>
        </motion.div>
    </Card>
</motion.div>
  );
};
