import { Modal } from '../components/Modal/modal';
import { useModal } from '@hooks';

function App() {
  const modalHook = useModal();
  const openModal = () =>
    modalHook.openModal(() => {
      // вызывается после того, как модальное окно исчезло с экрана
      console.log('модалка исчезла с экрана');
      // переход на главную страницу
    });
  return (
    <div>
      {!modalHook.isOpen && <button onClick={openModal}>open me</button>}
      <Modal modalHook={modalHook}>
        <p>спасибо за ваше доверие</p>
      </Modal>
    </div>
  );
}

export default App;
