import React, {MouseEvent, ReactNode, useEffect, useState} from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    fullSize?: boolean;
}

const Modal: React.FC<ModalProps> = ({isOpen, onClose, children, fullSize = false}) => {
    const [showModal, setShowModal] = useState(isOpen);
    const [isVisible, setIsVisible] = useState(isOpen); // Для анимации

    useEffect(() => {
        if (isOpen) {
            setShowModal(true);
            setTimeout(() => setIsVisible(true), 10);
        } else {
            setIsVisible(false);
            setTimeout(() => setShowModal(false), 500); // Увеличил время анимации
        }
    }, [isOpen]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose?.();
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen, onClose]); // ✅ Добавили onClose в зависимости

    const handleBackgroundClick = (e: MouseEvent<HTMLDivElement>) => {
        if ((e.target as HTMLDivElement).id === "modalBackground") {
            onClose?.();
        }
    };

    if (!showModal) return null;

    return (
        <div
            id="modalBackground"
            className={`fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center transition-opacity duration-500 p-10 ${
                isVisible ? "opacity-100" : "opacity-0"
            }`}
            onClick={handleBackgroundClick}
        >
            <div
                className={`max-h-[90vh] overflow-auto rounded-xl shadow-lg transition-all duration-500 ease-in-out ${
                    isVisible
                        ? "scale-100 rotate-0 translate-y-0"
                        : "scale-90 rotate-[-8deg] translate-y-[-50px] opacity-0"
                } ${fullSize ? "w-full h-full max-w-none max-h-none" : "max-w-[600px] w-full"}`}
                onClick={(e) => e.stopPropagation()}
                style={{
                    animation: isVisible
                        ? "modalEnter 0.5s ease-in-out"
                        : "modalExit 0.5s ease-in-out",
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default Modal;
