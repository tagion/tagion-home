import { TooltipModel } from "chart.js";
import { Context } from "chartjs-plugin-datalabels";
import { Align, Anchor, Font } from "chartjs-plugin-datalabels/types/options";

import {
  BorderWidthSizes,
  PaddingSizes,
  BorderRadiusSizes,
} from "../common/enums";
import { Colors } from "../common/enums/colors";

type TooltipContentCreatorType = (title: string, description: string) => string;
type ContextType = Context & { tooltip: TooltipModel<never> };
type TooltipContentType = {
  title: string;
  description: string;
  img: string;
};

const tooltipContentCreator = (title: string, description: string) => `
<div class="tooltip">
  <div class="title">${title}</div>
  <div class="description">${description}</div>
</div>
`;

const chartTooltip = (
  context: ContextType,
  tooltipContentCreator: TooltipContentCreatorType,
  tooltipContentArray: Array<TooltipContentType>
) => {
  // Tooltip Element
  let tooltipEl = document.getElementById("chartjs-tooltip");

  const selectedDataPoint = context.tooltip.dataPoints[0];

  if (!selectedDataPoint && !tooltipContentArray) {
    return;
  }

  const tooltipsCount = tooltipContentArray.length;
  const content = tooltipContentArray[selectedDataPoint.dataIndex - 1];
  if (!content) {
    return;
  }

  // Create element on first render
  if (!tooltipEl) {
    tooltipEl = document.createElement("div");
    tooltipEl.id = "chartjs-tooltip";
    tooltipEl.innerHTML = tooltipContentCreator(
      content.title,
      content.description
    );
    document.body.appendChild(tooltipEl);
  } else {
    // update element
    tooltipEl.innerHTML = tooltipContentCreator(
      content.title,
      content.description
    );
  }

  // Hide if no tooltip
  const tooltipModel = context.tooltip;
  if (tooltipModel.opacity === 0) {
    tooltipEl.style.opacity = "0";
    return;
  }

  // Set caret Position
  tooltipEl.classList.remove("above", "below", "no-transform");
  if (tooltipModel.yAlign) {
    tooltipEl.classList.add(tooltipModel.yAlign);
  } else {
    tooltipEl.classList.add("no-transform");
  }

  const position = context.chart.canvas.getBoundingClientRect();

  // Display, position, and set styles for font
  tooltipEl.style.opacity = "1";
  tooltipEl.style.position = "absolute";
  tooltipEl.style.pointerEvents = "none";

  tooltipEl.style.top =
    position.top + window.pageYOffset + tooltipModel.caretY + "px";
  if (tooltipsCount / 2 < context.tooltip.dataPoints[0].dataIndex) {
    tooltipEl.style.right = position.right - tooltipModel.caretX + "px";
    tooltipEl.style.left = "auto";
  } else {
    tooltipEl.style.left =
      position.left + window.pageXOffset + tooltipModel.caretX + "px";
    tooltipEl.style.right = "auto";
  }
};

export const getChartOptions = (
  tooltipContentArray: Array<TooltipContentType>,
  pointBorderWidth: Array<number>
) => ({
  responsive: true,
  layout: {
    padding: {
      top: PaddingSizes.TIMELINE_CANVAS_TOP,
      bottom: PaddingSizes.TIMELINE_CANVAS_BOTTOM,
    },
  },

  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    // scaleLineColor: "red",
    tooltip: {
      enabled: false,
      external: (context: ContextType) =>
        chartTooltip(context, tooltipContentCreator, tooltipContentArray),
    },
    datalabels: {
      align: "end" as Align,
      anchor: "end" as Anchor,
      color: Colors.MAIN_DARK as string,
      font: () =>
        ({
          size: 24,
          weight: "bold",
        } as Font),
      formatter: (value: string, context: Context) =>
        context.chart.data.labels?.[context.dataIndex],
      padding: PaddingSizes.TIMELINE_CANVAS_LABEL,
    },
  },
  borderWidth: BorderWidthSizes.TIMELINE_LINE,
  pointBorderWidth,
  pointBorderColor: Colors.MAIN_DARK as string,
  maintainAspectRatio: false,
  clip: { left: -10, top: 0, right: -10, bottom: 0 },
  scales: {
    y: {
      display: false,
    },
    x: {
      display: false,
    },
  },
  elements: {
    point: {
      backgroundColor: Colors.MAIN_DARK as string,
      // borderWidth: 10,
      hitRadius: BorderRadiusSizes.TIMELINE_HIT,
      pointRadius: BorderRadiusSizes.TIMELINE_POINT,
      pointHoverRadius: BorderRadiusSizes.TIMELINE_POINT_HOVER,
    },
  },
});

// scaleShowGridLines
export const getChartData = (
  labels: Array<string>,
  dataset: Array<number>
) => ({
  labels,
  datasets: [
    {
      data: dataset,
      // borderColor: "rgba(230, 230, 230, 1)",
      tension: 0.4,
    },
  ],
});
