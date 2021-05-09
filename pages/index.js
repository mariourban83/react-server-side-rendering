import React from "react";
import { initStore } from "../store"
import styles from "./index.module.css";
import Card from "./Card";

class Index extends React.Component {
  // getInitialProps - when I need state, lifecycle hooks or initial data population I can export a React.Component (instead of a stateless function)
  static async getInitialProps(store) {
    return store.dispatch(initialCards());
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
};

export default initStore.withRedux(Index);
