import styles from './DisclaimerModal.module.scss'

export interface IDisclaimerModalProps {
  isOpen: boolean
  onClose: () => void
}
const DisclaimerModal: React.FC<IDisclaimerModalProps> = ({ isOpen, onClose }) => {
  let currentYear = new Date().getFullYear();
  if (!isOpen) {
    return null
  }
  return (
    <div className={styles.Modal} onClick={onClose}>
      <div className={styles.ModalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.ModalBody}>
          {`The G500/G600 CMC Trainer is for training purposes only and does not reflect all possible aircraft configurations. Specific system details and/or operating procedures can be found in the Aircraft Maintenance Publications. \n
          All rights reserved. The recipient of this software, by its retention and use, agrees to hold in confidence the data and information that form part of such software contained herein. \n
          @${currentYear} CAE Inc.`}
        </div>
        <div className={styles.ModalFooter}>
          <button className={styles.Button} onClick={onClose}>
            I Accept
          </button>
        </div>
      </div>
    </div>
  )
}

export default DisclaimerModal
