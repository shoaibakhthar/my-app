import styles from './styles/appStyles.module.css';

function App() {
  return (
    <div className="App">
      <h1 className={styles.success}>Success</h1>
      <h1 className={styles.error}>Error</h1>
    </div>
  );
}

export default App;
