import React from 'react'
import s from './Message.module.css'

    type MessageDataProps = {
    avatar:string
    name:string
    message:string
    time:string
}

function Message(props:MessageDataProps) {
    return (
            <div className={s.message}>
                <img
                    className={s.avatar}
                    alt={props.name}
                    src={props.avatar}
                />
                <div className={s.angel}/>
                    <div className={s.content}>
                    <div className={s.name}>{props.name}</div>
                    <div className={s.text}>{props.message}</div>
                    <div className={s.time}>{props.time}</div>
                    </div>
            </div>
    )
}

export default Message
