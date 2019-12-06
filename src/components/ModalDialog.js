import React from 'react'
import PropTypes from 'prop-types'
import './ModalDialog.css';
import * as Icons from '@material-ui/icons';
import {
    Button, Dialog, DialogActions,
    DialogContent, DialogTitle, IconButton
} from '@material-ui/core'


const renderTitle = (title, onClose) => {
    if(!title) return;

    const CloseIcon = Icons.Close;

    return (
        <div className='dialog-title'>
            <DialogTitle>
                {title}
            </DialogTitle>
            <IconButton
                onClick={onClose}
            >
                <CloseIcon />
            </IconButton>
        </div>
    )
}

const renderActions = (actions) => {
    if(!actions) return;

    const actionBtns = actions.map(({label, onClick}) =>
        <Button onClick={onClick} color="primary" key={label}>
            {label}
        </Button>
    )

    return (
        <DialogActions>{actionBtns}</DialogActions>
    )
}


const ModalDialog = (props) => {
    const { open, onClose, actions, title, maxWidth } = props;

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth={maxWidth || 'sm'}
        >
            {renderTitle(title, onClose)}
            <DialogContent>
                {props.children}
            </DialogContent>
            {renderActions(actions)}
        </Dialog>
    )
}


ModalDialog.propTypes = {
    actions: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired
    })),
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]),
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
}


export default ModalDialog
