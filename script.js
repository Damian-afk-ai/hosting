const modal = document.getElementById('orderModal');
const modalContent = document.getElementById('modalContent');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');

function openModal() {
    modal.classList.remove('modal-hidden');
    setTimeout(() => {
        modalContent.classList.remove('scale-95');
        modalContent.classList.add('scale-100');
    }, 10);
}

function closeModal() {
    modalContent.classList.remove('scale-100');
    modalContent.classList.add('scale-95');
    setTimeout(() => {
        modal.classList.add('modal-hidden');
    }, 300);
}

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

function showSuccessMessage(orderType) {
    // In a real scenario, this would be a window.location.href = "https://wa.me/YOURNUMBER?text=Hola, quiero..."
    toastMessage.textContent = `¡Pedido de ${orderType} listo! (Simulación de WhatsApp)`;
    toast.classList.remove('opacity-0', 'translate-y-10');
    toast.classList.add('opacity-100', 'translate-y-0');

    setTimeout(() => {
        toast.classList.remove('opacity-100', 'translate-y-0');
        toast.classList.add('opacity-0', 'translate-y-10');
    }, 3000);
}
