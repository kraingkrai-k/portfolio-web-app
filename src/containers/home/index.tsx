import React, {useState} from 'react'
import Modal from '../../components/modal'


const HomeContainer = (): React.ReactElement => {
    const [visible, setVisible] = useState<boolean>(false)

    const handlerVisibleModal = () => {
        setVisible(true)
    }

    const handlerCancelModal = () => {
        setVisible(false)
    }

    return (
        <>
            <Modal
                visible={visible}
                onCancel={handlerCancelModal}
                onOK={handlerCancelModal}
            >
                OK
            </Modal>
            <div onClick={handlerVisibleModal} className="text-5xl font-extrabold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
                    Hello Messages
                </span>
            </div>

        </>
    )
}

export default HomeContainer
