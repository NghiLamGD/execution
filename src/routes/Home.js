import { DashboardView, InsightView } from "@gooddata/sdk-ui-ext";
import React from "react";

import Page from "../components/Page";
import { Dashboards, Insights } from "../ldm/full";
import { UseDataViewWithSlicesExample } from "./abc/executetion2";
import { UseDataViewExample } from "./abc/execution";
import { UseDataViewWithCustomVisualizationExample } from "./abc/execution3";
import { UseDataViewAttributeValuesExample } from "./abc/execution4";

const Home = () => {
    return (
    <div> 
        <UseDataViewWithCustomVisualizationExample/>
        <UseDataViewExample/>
        <UseDataViewWithSlicesExample/>
        <UseDataViewAttributeValuesExample/>
    </div>)
};

export default Home;
