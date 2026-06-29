/* Phoenix UI Kit © Skyler J. Jones */
import React from "react";

export interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({ items, allowMultiple }) => {
  const [open, setOpen] = React.useState<number[]>([]);
  const toggle = (i: number) => {
    setOpen((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : allowMultiple ? [...prev, i] : [i]
    );
  };
  return (
    <div className="phoenix-accordion" data-phoenix-kit="true">
      {items.map((item, i) => {
        const isOpen = open.includes(i);
        return (
          <div key={i} className={`phoenix-accordion-item ${isOpen ? "is-open" : ""}`}>
            <button className="phoenix-accordion-trigger" onClick={() => toggle(i)} aria-expanded={isOpen}>
              <span>{item.title}</span>
              <span className="phoenix-accordion-chevron">▾</span>
            </button>
            {isOpen && <div className="phoenix-accordion-content">{item.content}</div>}
          </div>
        );
      })}
    </div>
  );
};
