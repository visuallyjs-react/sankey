import React, { useState, useEffect, useRef } from 'react';
import {SankeyChartComponent} from "@visuallyjs/browser-ui-react";

function App({url}) {
    const [pivot, setPivot] = useState('transitMode');

    return (
        <div style={{ position: 'relative' }}>
            <div className="controls-panel">
                <label className="pivot-label">Pivot:</label>
                <select 
                    className="pivot-select"
                    value={pivot} 
                    onChange={(e) => setPivot(e.target.value)}
                >
                    <option value="">No pivot</option>
                    <option value="transitMode">Transit Mode</option>
                    <option value="carrier">Carrier</option>
                </select>
            </div>
            <SankeyChartComponent
                url={url}
                pivot={pivot}
                options={{
                    linkColorStrategy: "source-target",
                    labelProperty:"name",
                    labels: {
                        padding: 5,
                        backgroundColor: "#FFFFFF56"
                    },
                    tooltipSuffix: "TWh"
                }}
            />
        </div>
    );
}

export default App;
