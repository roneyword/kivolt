import { useState } from "react";
import style from "./styles.module.scss"

interface AccordionProps {
  title: string,
  description: string,
}

interface AccordionListProps {
  items: AccordionProps[];
}

export default function Accordion({ items }: AccordionListProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className={style.accordionContainer}>
      <ul>
        {items.map((item, index) => (
          <li key={index} className={index === activeIndex ? style.isActive : ''} onClick={() => handleClick(index)}>
            <div className={style.accordionHeader}>
              <h3>{item.title}</h3>
              <svg width="31" height="20" viewBox="0 0 31 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="Vector 3" d="M28.5001 2.49902L15.5001 15.499L2.50006 2.49902" stroke="#9F9F9F" strokeWidth="6" />
              </svg>
            </div>

            <div className={style.acordionContent}>
              <p>{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}