import "@gooddata/sdk-ui-charts/styles/css/main.css";
import { ColumnChart} from "@gooddata/sdk-ui-charts";
import { Kpi } from "@gooddata/sdk-ui";
import { PivotTable } from "@gooddata/sdk-ui-pivot";
import * as Ldm from "../../ldm/full";
import React from "react";
import { modifyAttribute } from "@gooddata/sdk-model";
import { newRankingFilter } from "@gooddata/sdk-model";
import { InsightView, DashboardView } from "@gooddata/sdk-ui-ext";
//import { MAPBOX_TOKEN } from "../../ldm/full";
// import { EmployeeName } from "../../ldm/full";

const style = { height: 300 };
const monthDate = modifyAttribute(Ldm.DateDatasets.Date.Month.Short)
export const ColumnExample = () => {
    return (
        <div style ={style}>
            <ColumnChart
                measures={[Ldm.TotalSalesPercentChange,Ldm.$FranchiseFees]}
                viewBy={monthDate}
            />
        </div>
    );
};

export const KpiExample = () => {
    return (
            <Kpi measure={Ldm.$TotalSales} />
    );
}

const filter = [newRankingFilter(Ldm.$TotalCosts, "TOP", 3)]
export const TableExample = () => {
    return (
        <div style ={style}>
            <PivotTable 
                measures={[Ldm.TotalSalesPercentChange,Ldm.$TotalCosts]}
                rows={[Ldm.LocationState]}
                // columns={[monthDate]}
                filters={filter}
            />
        </div>    
    );
};

export const EmbedAD = () => {
    return (
        <div style ={style}>
            <InsightView
                insight="aabeoBPmbUy6"
            />
        </div>
    );
}

// export const EmbedKD = () => {
//     const config = { mapboxToken: MAPBOX_TOKEN };
//     return (
//         <div style ={style}>
//             <DashboardView
//                 dashboard="aaSn7njxfipF"
//                 config={config}
//             />
//         </div>
//     );


