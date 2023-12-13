"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";

export const StoreModal = () => {
    const storeModal = useStoreModal();
    
    return (
    <Modal
        title="Create Store"
        description="Create a new store to start selling your products"
        isOpen={storeModal.isOpen}
        onClose={storeModal.onClose}
    >
        Future Create Store Form
    </Modal>
    )
};