import '../../output/css/belt.css';
import { useState } from 'react';
import Modal from 'react-modal';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Belt() {
	const [modalIsOpen, setIsOpen] = useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function closeModal() {
		setIsOpen(false);
	}

	return (
		<div className='belt-container'>
			<div className='beltElOne' onClick={openModal}>
				<Modal
					isOpen={modalIsOpen}
				>
					<h1>Skullify</h1>
					<FontAwesomeIcon
						icon={faCircleXmark}
						onClick={() => { setIsOpen(false) }}
					/>
				</Modal>
			</div>
			<div className='beltElTwo'>

			</div>
			<div className='beltElThree'>

			</div>
		</div>
	)
}

export default Belt;