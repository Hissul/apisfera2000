import { Maximize2, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { RefObject } from "react";
import type { ProductVideo } from "./productTypes";
import "./videoInstructionDialog.css";

type VideoInstructionDialogProps = {
  video: ProductVideo;
  productName: string;
  onClose: () => void;
  returnFocusTo: RefObject<HTMLButtonElement | null>;
};

export function VideoInstructionDialog({
  video,
  productName,
  onClose,
  returnFocusTo,
}: VideoInstructionDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const surfaceRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [fullscreenUnavailable, setFullscreenUnavailable] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.showModal();
    closeButtonRef.current?.focus();

    return () => {
      if (dialog.open) dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  function handleClose() {
    onClose();
    returnFocusTo.current?.focus();
  }

  function handleFullscreen() {
    const surface = surfaceRef.current;
    if (!surface) return;
    void surface.requestFullscreen().catch(() => setFullscreenUnavailable(true));
  }

  function handleCloseClick() {
    if (document.fullscreenElement === surfaceRef.current) {
      void document.exitFullscreen().then(
        () => dialogRef.current?.close(),
        () => dialogRef.current?.close(),
      );
      return;
    }
    dialogRef.current?.close();
  }

  return (
    <dialog
      ref={dialogRef}
      className="video-instruction-dialog"
      aria-labelledby="video-instruction-title"
      onClose={(event) => {
        if (!event.currentTarget.open) handleClose();
      }}
    >
      <div ref={surfaceRef} className="video-instruction-dialog__surface">
        <div className="video-instruction-dialog__header">
          <h2 id="video-instruction-title">Видеоинструкция: {productName}</h2>
          <div className="video-instruction-dialog__actions">
            <button
              ref={closeButtonRef}
              type="button"
              className="video-instruction-dialog__icon-button"
              aria-label="Развернуть видео на весь экран"
              title="На весь экран"
              onClick={handleFullscreen}
            >
              <Maximize2 aria-hidden="true" size={20} />
            </button>
            <button
              type="button"
              className="video-instruction-dialog__icon-button"
              aria-label="Закрыть видеоинструкцию"
              title="Закрыть"
              onClick={handleCloseClick}
              autoFocus
            >
              <X aria-hidden="true" size={22} />
            </button>
          </div>
        </div>
        <iframe
          className="video-instruction-dialog__frame"
          src={video.embedUrl}
          title={`Видеоинструкция по применению препарата ${productName}`}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
        {fullscreenUnavailable && (
          <p className="video-instruction-dialog__notice" role="status">
            Полноэкранный режим недоступен. Используйте кнопку в видеоплеере.
          </p>
        )}
      </div>
    </dialog>
  );
}
