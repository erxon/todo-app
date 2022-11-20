import React, {useState} from "react";
import Tab from "./Tab";

function Collection(){
    const [active, setActive] = useState("home");

    const handleClick = (tabClicked) => {
        setActive(tabClicked);
    }

    const styles = {
        backgroundColor: "#256D85",
        color: "#fff",
        height: "30rem",
        padding: "1.5rem",
    }

    return <div style={styles}>
        <h2>Collections</h2>
        <Tab 
            name="home" 
            active={active === "home" ? true : false}
            onHandleClick={handleClick}
        />
        <Tab 
            name="school" 
            active={active === "school" ? true : false} 
            onHandleClick={handleClick} 
        />
    </div> 
}

export default Collection;