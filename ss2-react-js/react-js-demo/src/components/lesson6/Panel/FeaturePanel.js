import { useState } from "react";
import './togleCss.css'
function FeaturePanel() {
    const [features, setFeatures] = useState([
        { id: 1, name: "wifi", status: false },
        { id: 2, name: "bluetooth", status: false },
        { id: 3, name: "dark mode", status: false }
    ]);
    const togle = (id) => {
        setFeatures((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, status: !item.status } : item
            )
        );
    };

    return (
        <div>
            <ul>
                {features.map((item) => (
                    <li key={item.id}>
                        {item.name} --- {item.status ? "on" : "off"}
                        <label  class="switch">
                            <input onClick={() => togle(item.id)} type="checkbox" />
                            <span  class="slider round"></span>
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default FeaturePanel;