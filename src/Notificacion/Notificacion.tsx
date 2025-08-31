import style from './Notificacion.module.scss';
const Notification = () => {
    return (
        <div className={style.notification}>
            <p className={style.message}>No votes yet</p> </div>);
};
export default Notification;