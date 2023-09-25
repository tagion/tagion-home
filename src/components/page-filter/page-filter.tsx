import React from "react";
import classNames from "classnames/bind";

import { Dropdown } from "../dropdown";

import * as styles from "./page-filter.module.scss";

import { ReactComponent as RightArrowIcon } from "../../assets/images/right_arrow.svg";

const cx = classNames.bind(styles);

interface InputProps {
  selectedFilterIndex: string;
  filterItems: Array<string>;
  classNames?: { wrapper?: string; desktopFilter?: string };
  onDropdownChange?: () => void;
  onFilterItemClick?: () => void;
  setSelectedFilterIndex: React.Dispatch<React.SetStateAction<string>>;
}

export const PageFilter: React.FC<InputProps> = ({
  filterItems,
  classNames,
  onDropdownChange,
  onFilterItemClick,
  selectedFilterIndex,
  setSelectedFilterIndex,
}) => {
  return (
    <div className={`${cx("page_filter")} ${classNames?.wrapper || ""}`}>
      <Dropdown
        name="pageFilterDropdown"
        value={selectedFilterIndex}
        onChange={(e) => {
          setSelectedFilterIndex(e.target.value.toString());
          onDropdownChange?.();
        }}
        menuItems={filterItems}
        withLeftArrow
        withoutErrorMessages
        className={{
          dropdown: cx("dropdown"),
          leftArrow: cx("dropdown_leftArrow"),
          wrapper: cx("dropdown_wrapper"),
        }}
        menuProps={{
          PaperProps: {
            sx: {
              "& .MuiMenuItem-root": {
                fontFamily: "Inter-400, sans-serif",
                lineHeight: "20px",
                fontSize: "16px",
                minHeight: "auto",
              },
            },
          },
        }}
      />

      <div
        className={`${cx("desktop_filter")} ${classNames?.desktopFilter || ""}`}
      >
        {filterItems.length &&
          filterItems.map((item, i) => (
            <div
              key={item}
              onClick={() => {
                setSelectedFilterIndex(i.toString());
                onFilterItemClick?.();
              }}
              className={`${cx("contributor_type_item", {
                selected: i === Number(selectedFilterIndex),
              })} contributor_type_item prompt-400`}
            >
              <RightArrowIcon />
              <span>{item}</span>
            </div>
          ))}
      </div>
    </div>
  );
};
