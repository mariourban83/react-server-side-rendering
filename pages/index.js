import React from "react";
import styles from "./index.module.css";
import Card from "./Card";
import data from "./API/data.json";

export default class Index extends React.Component {
  // getInitialProps - when I need state, lifecycle hooks or initial data population I can export a React.Component (instead of a stateless function)
  static async getInitialProps() {
    return { cards: data };
  }
  render() {
    return (
      <div className={styles.app}>
        <header className={styles.header}>
          <img src="/logo.png" className={styles.logo} alt="logo" />
        </header>
        <div className={styles.grid}>
          {
            /* for every card returned from map function, display individual card */
            this.props.cards.map((card) => (
              <Card id={card.id} />
            ))
          }
        </div>
      </div>
    );
  }
}
