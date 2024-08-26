"use client";

import { useState, useEffect } from "react"
import styles from "./card.module.css"
import Nav from "@/app/components/nav";

export default function Card() {
    const [data, setData] = useState()
    
    useEffect(() => {
        fetch('https://valorant-api.com/v1/agents')
            .then((response) => response.json())
            .then((data) => {
                // Filtro para remover a duplicata do sova
                const filteredData = data.data.filter(
                    (agent, index, self) =>
                        self.findIndex((a) => a.displayName === agent.displayName) === index
                );
                console.log('Data fetched and filtered:', filteredData);
                setData(filteredData);
            })
            .catch((error) => {
                console.error('Fetch error:', error);
            });
    }, []);
git 
    if (data === null) {
        return <div>Loading...</div>;
    }



    return(
        <main className={styles.background}>
           <Nav />
            <div className={styles.container}>
            {data &&
                data.map((item) => (
                <div key={item.uuid} className={styles.card}>
                    <h1 key={item.displayName} className={styles.name}>{item.displayName}</h1>
                    <img src={item.displayIconSmall} alt={item.displayName} className={styles.image}/>
                    <h3 key={item.role?.displayName} className={styles.classe}>{item.role?.displayName}</h3>
                    <p className={styles.descricao}>{item.description}</p>
                </div>
                ))}
            </div>
        </main>
    )
}