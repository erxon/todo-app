/* eslint-disable react/prop-types */
import React from "react";

function Tab(props){

    const styles = {
        backgroundColor: props.active ? "#16C0D8" : "",
        color: "#fff",
        cursor: "pointer",
        padding: "0px 15px",
    };
    

    return <div style={styles} 
                className="tab"
                onClick={() => {props.onHandleClick(props.name)}}
                
        >
            <p>{props.name}</p>
    </div>
}

export default Tab;