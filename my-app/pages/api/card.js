import React, { useEffect, useRef, useState } from "react";
import styles from "../../styles/card.module.css";
function Card(props) {
   

    return (<div className={styles.card}>
        
        <h1 className={styles.title}>{props.name}</h1>
        
     <img src={props.imageUrl} className={styles.image} ></img>
    </div>);
  }
  
  export default Card;