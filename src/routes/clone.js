import { InsightView } from "@gooddata/sdk-ui-ext";
import React from "react";

////import Page from "../components/Page";
import { Insights } from "../ldm/full";
//import { ColumnExample, EmbedAD, EmbedKD, KpiExample, TableExample } from "./abc/chart";

const clone = () => {
    return (
    <div>
        <InsightView insight={Insights.BarChartTest} />
    </div>
    )
};

export default clone;
