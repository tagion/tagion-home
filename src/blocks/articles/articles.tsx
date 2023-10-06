import React, { useState } from "react";
import classNames from "classnames/bind";

import { PageDescription } from "../../components";
import { articlesData } from "../../content/articles";

import * as styles from "./articles.module.scss";

const cx = classNames.bind(styles);

export const ArticlesBlock: React.FC = () => {
  const [hoveredCardId, setHoveredCardId] = useState(-1);
  articlesData?.sort(
    (prevArticle, currentArticle) =>
      new Date(currentArticle.dateOfCreation).getTime() -
      new Date(prevArticle.dateOfCreation).getTime()
  );

  return (
    <div className={cx("articles_block")}>
      {articlesData.length &&
        articlesData.map((article, i) => (
          <PageDescription
            title={article.name}
            description={article.description}
            date={article.dateOfCreation}
            navigateTo={`articles/${article.linkTo}`}
            img={article.mainImgData || article.descriptiveImgData}
            isUpperCardHovered={hoveredCardId > 0 && hoveredCardId === i + 1}
            key={i}
            onMouseEnter={() => setHoveredCardId(i)}
            onMouseLeave={() => setHoveredCardId(-1)}
          />
        ))}
    </div>
  );
};

// // for a future feature
// export const labels = [
//   { id: 0, name: "Education", color: "#3F0B81" },
//   { id: 1, name: "Development", color: "#55FFA6" },
//   { id: 2, name: "People", color: "#4F36E3" },
//   { id: 3, name: "Other", color: "#00B6C1" },
// ];
