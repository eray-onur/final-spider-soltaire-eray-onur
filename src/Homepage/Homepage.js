import React, { useState } from 'react';
import Page from './../Common/Layouts/Page';
import EntryForm from './EntryForm/EntryForm';
import Button from './../Common/Components/Button/Button';
import Modal from 'react-modal';
import Tutorial from './Tutorial/Tutorial';
import './Homepage.css';
import { APP_TITLE } from '../Common/Constants';

if (process.env.NODE_ENV !== 'test')
    Modal.setAppElement('#root');

const tutorialModalStyle = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#fff'
    },
};

const Homepage = (props) => {
    const [tutorialModalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
    <Page
        pageVariants={{
            in: {
                opacity: 1,
                x: 0
            },
            out: {
                opacity: 0,
                x: '-100vw'
            }
        }}
        pageTransition={{
            duration: 0.35,
            transition: 'linear'
        }}
        classes={'home-page'}
    >
        <h1 className="home-heading">{APP_TITLE}</h1>
        <EntryForm {...props}/>
        <Button styleClasses={'btn-tutorial'} onClick={openModal}>How to Play?</Button>
        <Modal
            isOpen={tutorialModalIsOpen}
            onRequestClose={closeModal}
            style={tutorialModalStyle}
            contentLabel="Tutorial"
        >
            <Tutorial/>
        </Modal>
    </Page>);
}

export default Homepage;