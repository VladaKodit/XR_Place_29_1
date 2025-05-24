import { SuccessModal } from '../components/Modals/SuccessModal';
import { Modal } from '../components/Modal/Modal';
import { useModal } from '@hooks';
import { ContactFormModal } from '../components/Modals/ContactFormModal';
import { useContactForm } from '@hooks';

function App() {
  const successModalHook = useModal();
  const openSuccessModal = () =>
    successModalHook.openModal(() => {
      // вызывается после того, как модальное окно исчезло с экрана
      console.log('модалка исчезла с экрана');
      // переход на главную страницу
    });
  const contactModalHook = useModal();
  const contactFormHook = useContactForm();
  const openContactModal = () => {
    contactFormHook.clear();
    contactModalHook.openModal(() => {
      // вызывается после того, как модальное окно исчезло с экрана
      console.log('модалка исчезла с экрана');
      // переход на главную страницу
    });
  };
  return (
    <>
      {!successModalHook.isOpen && (
        <button onClick={openSuccessModal}>success</button>
      )}
      <Modal modalHook={successModalHook}>
        <SuccessModal onGoToHomeClick={successModalHook.closeModal} />
      </Modal>
      <br />
      <br />
      <br />
      <br />
      {!contactModalHook.isOpen && (
        <button onClick={openContactModal}>contact</button>
      )}
      <Modal modalHook={contactModalHook}>
        <ContactFormModal
          onSubmit={() => {
            console.log('отправлены данные на сервер');
            contactModalHook.closeModal();
            openSuccessModal();
          }}
          onClose={contactModalHook.closeModal}
          contactFormHook={contactFormHook}
        />
      </Modal>
    </>
  );
}

export default App;
