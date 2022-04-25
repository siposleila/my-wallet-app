import {useCallback, useContext, useState} from 'react';
import ShareModal from "../modals/ShareModal";
import ConfirmModal from "../modals/ConfirmModal";
import React from 'react'

const ModalContext = React.createContext();
ModalContext.displayName ='ModalContext';


export const MODALS ={
	'CONFIRM_DELETE' : 'CONFIRM_DELETE',
	'SHARE' : 'SHARE',
	'NONE' : 'NONE'
};

export function Modals(){
	return(
	
		<ModalContext.Consumer>
		{(context)=>{
				const onClose = () => context.showModal(MODALS.NONE);
				switch (context.currentModal){
					case MODALS.SHARE:
						return <ShareModal onClose={onClose}/>;
					case MODALS.CONFIRM_DELETE:
						return <ConfirmModal onClose={onClose}/>;
					case MODALS.NONE:
					default:
						return null;
				}
			
			}}
		</ModalContext.Consumer>
	
	
	);
}

export function ModalContextProvider({children}){
	const [currentModal, setCurrentModal] = useState(false);
	const showModal = useCallback(
	(newModal)=>{
		setCurrentModal(newModal);
	},
		[setCurrentModal]
	);
	
	return(
		<ModalContext.Provider value={{currentModal, showModal}}>
			{children}
			<Modals/>
		</ModalContext.Provider>
	
	);
}

export function useModals(){
	return useContext(ModalContext);
}