// (C) 2007-2019 GoodData Corporation
import React from "react";
import { LoadingComponent, ErrorComponent, useExecutionDataView } from "@gooddata/sdk-ui";
import toPairs from "lodash/toPairs";
import groupBy from "lodash/groupBy";


import * as Ldm from "../../ldm/full";

import { workspace } from "../../constants";
import { useBackend } from "../../contexts/Auth";

const getAttributeHeaderItemName = (x) => x.attributeHeaderItem.name;
const withIndex = (fn) => {
    let index = 0;
    return (...args) => fn(index++, ...args);
};

export const UseDataViewAttributeValuesExample = () => {
    const backend = useBackend();
    const execution = backend
        .workspace(workspace)
        .execution()
        .forItems([Ldm.LocationState, Ldm.LocationName.Default]);
    const { result, error, status } = useExecutionDataView({ execution });

    let renderAttributeValues = null;
    if (result) {
        const [[locationStateHeaders, locationNameHeaders]] = result?.dataView.headerItems;
        const locationStates = locationStateHeaders.map(getAttributeHeaderItemName);
        const locations = locationNameHeaders.map(getAttributeHeaderItemName);
        const locationsByState = groupBy(
            locations,
            withIndex((index) => locationStates[index]),
        );

        const locationStateLocationsPairs = toPairs(locationsByState);
        renderAttributeValues = (
            <div>
                <ul className="attribute-values s-execute-attribute-values">
                    {locationStateLocationsPairs.map(([locationState, _locations]) => (
                        <li key={locationState}>
                            <strong>{locationState}</strong>
                            <ul>
                                {_locations.map((location) => (
                                    <li key={location}>{location}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    return (
        <div>
            {status === "error" && (
                <ErrorComponent
                    message="There was an error getting your execution"
                    description={JSON.stringify(error, null, "  ")}
                />
            )}

            {status === "loading" && <LoadingComponent />}
            {status === "success" && renderAttributeValues}
        </div>
    );
};