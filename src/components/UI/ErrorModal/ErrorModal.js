import classes from '../ErrorModal/ErrorModal.module.css';
import Card from '../Card';
import Button from '../Button';

const ErrorModal = props => {
  return (
    <>
      <div className={classes.backdrop}></div>
      <Card className={`${classes.modal}`}>
        {/* <div >{props.children}</div> */}
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button>Ok</Button>
        </footer>
      </Card>
    </>
  )
}

export default ErrorModal;