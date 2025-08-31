import style from '../Notificacion/Notification.module.css';
const Notification = () => {
    return (
        <div className={style.notification}>
            <p className={style.message}>No votes yet</p> </div>);
};
export default Notification;