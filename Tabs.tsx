/* Phoenix UI Kit © Skyler J. Jones */
import React from "react";

export interface TabItem {
  label: string;
  content: React.ReactNode;
}

export interface TabsProps {
  items: TabItem[];
  defaultIndex?: number;
  color?: "phoenix" | "cyan" | "purple" | "green";
}

export const Tabs: React.FC<TabsProps> = ({ items, defaultIndex = 0, color = "phoenix" }) => {
  const [active, setActive] = React.useState(defaultIndex);
  return (
    <div className={`phoenix-tabs phoenix-tabs-${color}`} data-phoenix-kit="true">
      <div className="phoenix-tabs-list" role="tablist">
        {items.map((item, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === active}
            className={`phoenix-tab ${i === active ? "is-active" : ""}`}
            onClick={() => setActive(i)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="phoenix-tabs-panel" role="tabpanel">{items[active]?.content}</div>
    </div>
  );
};
