import React from 'react'
import ReactDOM from 'react-dom'
import classes from './Modal.module.css'

const Backdrop = (props) => {

    return (
        <div className={classes.backdrop} onClick={props.onClose} ></div>
    )
}

const ModalContent = (props) => {
    console.log(props)
    //   const classList = `${} row`
    return (
        <div className={classes.modalContent} >
            <div className="row justify-content-center" >
                <div className="col-11 col-sm-10 col-md-8">
                    <div className={classes.content}>
                        {props.children}
                        <div className={classes.modalClose} >
                            <button onClick={props.onClose} >close</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}


const Modal = (props) => {
    const modalPoint = document.getElementById('modal')

    return (
        <div className={classes.mainModal} >
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, modalPoint)}
            {ReactDOM.createPortal(<ModalContent onClose={props.onClose} > {props.children} </ModalContent>, modalPoint)}
        </div>
    )
}

export default Modal