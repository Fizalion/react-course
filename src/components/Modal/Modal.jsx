import Button from "../Button/Button";
import styles from "./Modal.module.css";

const Modal = ({ children, onClose }) => {
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.content}
        onClick={(event) => event.stopPropagation()}
      >
        <Button onClick={onClose}>Закрыть</Button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
