import { useState } from "react";
import MenuItem from "./MenuItem";

const menu = [
    { id: 1, name: "About", content: "Day la About"  },
    { id: 2, name: "New", content:  "Day la New"  },
    { id: 3, name: "Contact", content:  "Day la Contact" },
    { id: 4, name: "Help", content:  "Day la Help"  },
]

function MenuBar() {
    const [selectedMenu, setSelectedMenu] = useState(menu[0]);

    return (
        <div>
            <MenuItem menu={menu} setSelectedMenu={setSelectedMenu}/>

            <div>
                {selectedMenu && (
                    <>
                        <h1>{selectedMenu.name}</h1>
                        <p>{selectedMenu.content}</p>
                    </>
                )}
            </div>
        </div>
    );
}
export default MenuBar;