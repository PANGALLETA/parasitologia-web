import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function ImageViewer({
    open,
    image,
    title,
    onClose,
}) {
    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="
                        fixed
                        inset-0
                        z-[9999]
                        bg-black/95
                        backdrop-blur
                        flex
                        items-center
                        justify-center
                        p-8
                    "
                >
                    <button
                        onClick={onClose}
                        className="
                            absolute
                            top-8
                            right-8
                            w-14
                            h-14
                            rounded-full
                            bg-white
                            shadow-xl
                            flex
                            items-center
                            justify-center
                            hover:scale-110
                            transition
                        "
                    >
                        <X size={28} />
                    </button>

                    <motion.img
                        layout
                        src={image}
                        alt={title}
                        onClick={(e) => e.stopPropagation()}
                        initial={{
                            opacity: 0,
                            scale: 0.8,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0.8,
                        }}
                        transition={{
                            duration: .3,
                        }}
                        className="
                            max-w-[95vw]
                            max-h-[90vh]
                            object-contain
                            rounded-2xl
                            shadow-2xl
                        "
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
}